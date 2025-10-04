'use client';

import LandingFooter from "@/app/LandingPage/components/LandingFooter";
import LandingPage from "@/app/LandingPage/page";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  
    return(
        <div className="flex flex-col min-h-screen items-center justify-center bg-[#1d1f2b]">
        <SignIn
        />
        </div>
    )
}











