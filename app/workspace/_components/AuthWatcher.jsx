'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

export default function AuthWatcher() {
  const { user, isLoaded } = useUser();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (isLoaded && user && !hasShownToast.current) {
      toast.success(`✅ Welcome back, ${user.firstName || 'User'}!`, {
        icon: '🎉',
      });
      hasShownToast.current = true;
    }
  }, [isLoaded, user]);

  return null; // invisible watcher
}
