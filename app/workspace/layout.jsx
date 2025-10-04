'use client';

import React from 'react'
import WorkspaceProvider from './provider'
import { RedirectToSignIn, SignedOut, SignIn } from '@clerk/nextjs';

function WorkspaceLayout({children}) {
  return (
    
    <WorkspaceProvider>
        {children}
    </WorkspaceProvider>
    
  )
}

export default WorkspaceLayout



