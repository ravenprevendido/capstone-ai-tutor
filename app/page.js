'use client';


import { SignIn } from "@clerk/nextjs";
import LandingPage from "./LandingPage/page";
export default function Home() {
  return (
    <div>
     <LandingPage>
      <SignIn/>
     </LandingPage>
    </div>
  );
}
