"use client"
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Book, Compass, LayoutDashboard, PencilRulerIcon, UserCircle2Icon} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import AddNewCourseDialog from './AddNewCourseDialog';

const SideBarOptions=[
  {
    title: 'Dashboard',
    icon:LayoutDashboard,
    path: '/workspace'
  },

  {
    title: 'My courses',
    icon:Book,
    path: '/workspace/my-courses'
  },

  {
    title: 'Lessons & materials',
    icon:Book,
    path: '/workspace/lesson-materials'
  },

  {
    title: 'Quizzes & Assessment',
    icon:PencilRulerIcon,
    path: '/workspace/quizzes-assessment'
  },

  {
    title: 'Study plan',
    icon:Book,
    path: '/workspace/study-plan'
  },

  {
    title: 'Analytics',
    icon:Compass,
    path: '/workspace/Analytics'
  },

  {
    title: 'AI tutor',
    icon:PencilRulerIcon,
    path: '/workspace/ai-tutor'
  }
]


function AppSidebar() {

  const path=usePathname();
 
  return (
    <Sidebar>
      <SidebarHeader className={'p-4 bg-black'}>
           <div className="flex items-center justify-start md:justify-start">
          <Image
            src="/plmunlogo.png"
            alt="logo"
            width={70}
            height={70}
            className="mx-auto md:mx-0"
          />
          <span className="ml-2 text-lg font-semibold hidden md:inline-block ">
           <span className="text-white" > PLMun AI Tutor </span>
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-black">

        <SidebarGroup>
        </SidebarGroup>

        <SidebarGroup>
        </SidebarGroup>

            <SidebarGroupContent>
              <SidebarMenu >
                {SideBarOptions.map((item, index) => (
                  <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild className={'p-5'}>
                          <Link href={item.path} className={`text-[17px] text-white
                          ${path.includes(item.path)&&'text-primary '}`}>
                            <item.icon className='h-7 w-7' />
                            <span>{item.title}</span>
                          </Link>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
