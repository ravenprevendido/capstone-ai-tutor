'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react"
import { IoTriangle } from "react-icons/io5";
import { motion } from "framer-motion";

export default function LandingHome({ setShowSignIn }) {
  
    const [showMobileOpen, setShowMobileOpen] = useState(false);
    return (
        <header className="flex flex-col items-center justify-between p-6">
            <div className="flex items-center justify-between w-full mb-6">
                <div className="flex items-center">
                <Image
                    src="/plmunlogo (2).png"
                    alt="PLMun Logo"
                    width={70}
                    height={70}
                />
                <h1 className="text-green-300 font-semibold text-lg whitespace-nowrap ml-2">PLMun AI Tutor</h1>
            </div>
            <div className="hidden md:flex gap-2">
                {/* Sign-in Button */}
                <Button
                    onClick={() => setShowSignIn('sign-in')}  // Open sign-in modal
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                    Sign in
                </Button>
                {/* Sign-up Button */}
                <Button
                    onClick={() => setShowSignIn('sign-up')}  // Open sign-up modal
                    variant={"outline"}
                    className={"bg-transparent border border-green-500 text-green-400 hover:bg-green-600 hover:text-white"}
                >
                    Sign up
                </Button>
            </div>
        {/* Mobile Triangle Icon */}
       <div className="flex md:hidden gap-2">
            <button onClick={() => setShowMobileOpen(!showMobileOpen)}>
                <IoTriangle size={30} className="text-green-400" />
            </button>
            {/* Mobile Menu */}
            {showMobileOpen && (
                <div className="absolute  right-6 top-16 bg-[#1d1f2b] p-4 rounded-md z-50 flex flex-col gap-2" >
                    <Button
                        onClick={() => {
                            setShowSignIn('sign-in');
                            setShowMobileOpen(false);
                        }}  
                        className="bg-green-600 text-white"
                    >
                        Sign in
                    </Button>
                    <Button
                        onClick={() => {
                            setShowSignIn('sign-up');
                            setShowMobileOpen(false);
                        }}
                        variant="outline"
                        className={"text-green-400 border border-green-400"}
                    >
                        Sign up
                    </Button>
                </div>
            )}
       </div>
       </div>
       {/* become a teacher */}
       <div className="flex flex-col md:flex-row items-center justify-between flex-1 px-6 md:px-16 gap-8 mt-10">
        <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Become a Fast Learning for this Online Courses</h2>
            <p className="text-gray-600 mb-6">Join a a teacher and create for student courses </p>
            <button  onClick={() => {
    // Mark that THIS signup flow should create a teacher
    try { localStorage.setItem('pendingRole', 'teacher'); } catch(e){ /* ignore */ }
    setShowSignIn('sign-up'); // open the SignUp modal (use sign-up so user enters new account)
  }} className="bg-green-300 text-black hover:bg-green-700 hover:text-white rounded-md px-6 py-3 text-lg cursor-pointer">
                Become a Teacher
            </button>
        </div>
        <div className="relative flex-1">
            
            <Image
                src="/imageplmun.png"
                alt="plmunlogo"
                width={320}
                height={320}
                className="mx-auto relative"
            />
            <motion.div
               initial={{opacity: 0, scale: 0.5}}
               animate={{opacity: 1, scale: 1}}
               transition={{duration: 0.8, ease: "easeInOut"}}
               className="absolute md:top-[165px] top-[15px] md:left-[275px] left-[100px]  md:w-10 md:h-10 bg-green-500 rounded-full blur-xl mix-blend-screen"
            />
             <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                className="absolute top-[165px] left-[340px] w-10 h-10 bg-green-500 rounded-full blur-xl mix-blend-screen"
      />
        </div>
       </div>
        </header>
    );
}


