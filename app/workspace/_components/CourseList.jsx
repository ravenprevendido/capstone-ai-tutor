
"use client";
import React from 'react';
import AddNewCourseDialog from './AddNewCourseDialog';
import { Button } from '@/components/ui/button';
import { BookOpen, Plus } from 'lucide-react';
import { courseData } from '../lib/courseData';
import Image from 'next/image';
import Link from 'next/link';


function CourseList() {
    return(
        <div className='mt-6'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='font-bold text-3xl text-gray-300'>Available Courses</h2>
                <AddNewCourseDialog>
                <Button className='bg-green-500 hover:bg-green-700'>
                    <Plus className='w-4 h-4 mr-2'/>
                    Create New Course
                </Button>
             </AddNewCourseDialog>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {courseData.map((course) => (
                    <div
                    key={course.id}
                    className='bg-[#13181F] rounded-lg shadow-md p-6'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <h3 className='text-xl font-bold  text-gray-300'>
                                {course.title}
                            </h3>
                            <p className="text-sm mt-2 text-gray-400">{course.instructor}</p>
                        </div>
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={60}
                            height={60}
                            className='rounded-lg'
                        />
                            </div>
                            <p className='text-grey-500 text-sm mb-4'>{course.description}</p>
                            {course.progress !== undefined && (
                            <div className='mb-4 mt-2'>
                                <div className='flex justify-between items-center mb-3'>
                                    <span className='text-sm text-white'>Progress</span>
                                    <span className='text-sm text-grey-700'>{course.progress}%</span>
                                    </div>
                                    <div className='w-full bg-gray-200 rounded-full h-2'>
                                        <div className='bg-green-600 h-2 rounded-full transition-all duration-300' style={{ width: `${course.progress}%` }}>

                                        </div>
                                    </div>
                                </div>
                            )}
                            <a href={`/workspace/my-courses/${course.id}`} className='flex-1'>
                                <Button className="w-full bg-green-600 hover:bg-green-400">
                                    <BookOpen className='w-4- h-4 mr-2'/>
                                    Continue Learning
                                </Button>
                            </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CourseList;
