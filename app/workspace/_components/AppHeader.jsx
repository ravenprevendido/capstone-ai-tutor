import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function AppHeader () {
    return (
        <div className='p-4 flex justify-between items-center shadow-sm'>
            <SidebarTrigger className='text-green-400'/>
            <UserButton/>
        </div>
    )   
}



export default AppHeader


