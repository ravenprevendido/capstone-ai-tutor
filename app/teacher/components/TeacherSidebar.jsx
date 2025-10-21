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
  useSidebar,
} from "@/components/ui/sidebar"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Book, BookCheck, Compass, LayoutDashboard, Notebook, PencilRulerIcon, UserCircle2Icon} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaBook, FaBookReader } from 'react-icons/fa';
import { IoAnalytics } from 'react-icons/io5';


const SideBarOptions=[
  {
    title: 'Dashboard',
    icon:LayoutDashboard,
    path: '/teacher'
  },

  
  {
    title: 'My courses',
    icon: FaBook ,
    path: '/teacher/course'
  },

  {
    title: 'Lessons & materials',
    icon: FaBookReader,
    path: '/teacher/lesson-materials'
  },

  {
    title: 'Quizzes & Assessment',
    icon: BookCheck,
    path: '/teacher/quizzes-assessment'
  },

  {
    title: 'Study plan',
    icon: Notebook,
    path: '/teacher/study-plan'
  },

  {
    title: 'Analytics',
    icon: IoAnalytics,
    path: '/teacher/analytics'
  },

  {
    title: 'AI tutor',
    icon:PencilRulerIcon,
    path: '/teacher/ai-tutor'
  }
]




function TeacherSidebar() {

  const {toggle} = useSidebar();
  const path = usePathname();
   const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      toggle();
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className={'p-4 bg-[#0D1117]'}>
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
      <SidebarContent className="bg-[#0D1117]">
        <SidebarGroup>
        </SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu >
                {SideBarOptions.map((item, index) => (
                  <SidebarMenuItem key={index}>
                      <SidebarMenuButton  asChild  className={'p-5'} >
                          <Link  href={item.path} onClick={handleLinkClick} className={`text-[15px] text-white
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
      <SidebarFooter className='bg-[#0D1117]' />
    </Sidebar>
  )
}

export default TeacherSidebar
