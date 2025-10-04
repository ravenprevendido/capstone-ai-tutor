'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react"
import { IoTriangle } from "react-icons/io5";

export default function LandingHome({ setShowSignIn }) {
  
    const [showMobileOpen, setShowMobileOpen] = useState(false);
    return (
        <header className="flex items-center justify-between p-6">
            <div className="flex items-center">
                <Image
                    src="/plmunlogo (2).png"
                    alt="PLMun Logo"
                    width={70}
                    height={70}
                />
                <h1 className="text-green-300 font-semibold text-lg whitespace-nowrap">PLMun AI Tutor</h1>
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
        </header>
    );
}


