// app/provider.jsx (replace with this file content — keeps all existing behavior)
// NOTE: this keeps your existing axios usage and router redirect logic

'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/navigation';
import { UserDetailContext } from '@/context/UserDetailContext';

const Provider = ({ children }) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    const createNewUser = async () => {
      try {
        // Read pending role set before sign-up
        let pendingRole = null;
        try {
          pendingRole = localStorage.getItem('pendingRole'); // "teacher" or null
        } catch (e) {
          pendingRole = null;
        }

        
        const payload = {
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          clerk_id: user.id,
          // prefer the pendingRole if present, otherwise fallback to unsafeMetadata or student
          role: pendingRole || user.unsafeMetadata?.role || 'student',
        };

        const result = await axios.post('/api/user', payload, {
          headers: { 'Content-Type': 'application/json' },
        });

        // remove pendingRole after we've synced (so it won't affect future logins)
        try {
          localStorage.removeItem('pendingRole');
        } catch (e) {}

        console.log('User synced successfully:', result.data);
        setUserDetail(result.data);

        // Redirect based on DB result.role (prefer DB response)
        const role = result.data?.role || payload.role || 'student';
        if (role === 'teacher') {
          router.push('/teacher');
        } else {
          router.push('/workspace');
        }
      } catch (err) {
        // your existing error handling — untouched, just kept here
        if (axios.isAxiosError(err)) {
          if (err.response) {
            console.error(' Server error creating user:', err.response.data);
          } else if (err.request) {
            console.error(' No response received:', err.request);
          } else {
            console.error(' Axios error:', err.message);
          }
        } else {
          console.error('Unexpected error creating user:', err);
        }
      }
    };

    createNewUser();
  }, [user?.id]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div className="bg-black">{children}</div>
    </UserDetailContext.Provider>
  );
};

export default Provider;
