"use client";
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react'
import { UserDetailContext } from '@/context/UserDetailContext';

const Provider = ({children}) => {
    const { user }=useUser();
    const [userDetail,setUserDetail]=useState();
    useEffect(() => {
        user&&CreateNewUsers();
    }, [user])
    const CreateNewUsers=async()=>{
        const result=await axios.post('/api/user',{
            name:user?.fullName,
            email:user?.primaryEmailAddress?.emailAddress
        });
        console.log(result.data);
        setUserDetail(result.data);
    }
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <div className='bg-black'>{children}</div>
    </UserDetailContext.Provider>
  )
}
export default Provider

