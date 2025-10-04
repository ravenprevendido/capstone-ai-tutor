// "use client";
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import React, { useState } from 'react'
// import AddNewCourseDialog from './AddNewCourseDialog';
// import { Plus, BookOpen, Clock, Users } from 'lucide-react';

// function CourseList() {
//     // Sample course data - you can replace this with actual data from your backend
//     const [courseList, setCourseList] = useState([
//         {
//             id: 1,
//             title: "Introduction to Python",
//             description: "Learn the fundamentals of Python programming",
//             progress: 60,
//             instructor: "Mr. Lopez",
//             lastAccessed: "2 days ago",
//             enrolled: true,
//             image: "/javascript.png"
//         },
//         {
//             id: 2,
//             title: "Data Structure & Algorithm",
//             description: "Master data structures and algorithms",
//             progress: 25,
//             instructor: "Mr. Sulasok",
//             lastAccessed: "3 days ago",
//             enrolled: true,
//             image: "/javascript.png"
//         },
//         {
//             id: 3,
//             title: "Web Development",
//             description: "Build modern web applications",
//             progress: 35,
//             instructor: "Mrs. Cruz",
//             lastAccessed: "1 day ago",
//             enrolled: true,
//             image: "/javascript.png"
//         },
//         {
//             id: 4,
//             title: "Objective Oriented Programming",
//             description: "Learn OOP concepts and principles",
//             progress: 54,
//             instructor: "Mr. batongbakal",
//             lastAccessed: "5 days ago",
//             enrolled: true,
//             image: "/javascript.png"
//         },
//         {
//             id: 5,
//             title: "Java Development",
//             description: "Enterprise Java development",
//             progress: 23,
//             instructor: "Mrs. Pride",
//             lastAccessed: "4 days ago",
//             enrolled: true,
//             image: "/javascript.png"
//         }
//     ]);

//     const handleEnrollCourse = (courseId) => {
//         setCourseList(prev => prev.map(course => 
//             course.id === courseId 
//                 ? { ...course, enrolled: !course.enrolled }
//                 : course
//         ));
//     };

//     const CourseCard = ({ course }) => (
//         <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <div className="p-6">
//                 <div className="flex items-start justify-between mb-4">
//                     <div className="flex-1">
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
//                         <p className="text-gray-600 text-sm mb-3">{course.description}</p>
//                         <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
//                     </div>
//                     <Image 
//                         src={course.image} 
//                         alt={course.title} 
//                         width={60} 
//                         height={60}
//                         className="rounded-lg"
//                     />
//                 </div>

//                 {course.enrolled && (
//                     <div className="mb-4">
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="text-sm font-medium text-gray-700">Progress</span>
//                             <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                             <div 
//                                 className="bg-green-600 h-2 rounded-full transition-all duration-300" 
//                                 style={{ width: `${course.progress}%` }}
//                             ></div>
//                         </div>
//                         <p className="text-xs text-gray-500 mt-2">Last accessed: {course.lastAccessed}</p>
//                     </div>
//                 )}

//                 <div className="flex gap-2">
//                     {course.enrolled ? (
//                     <a href={`/workspace/my-courses/${course.id}`} className="flex-1">
//                         <Button className="flex-1 bg-green-600 hover:bg-green-700">
//                             <BookOpen className="w-4 h-4 mr-2" />
//                             Continue Learning
//                         </Button>
//                     </a>
//                     ) : (
//                         <Button 
//                             className="flex-1 bg-blue-600 hover:bg-blue-700"
//                             onClick={() => handleEnrollCourse(course.id)}
//                         >
//                             <Plus className="w-4 h-4 mr-2" />
//                             Enroll Now
//                         </Button>
//                     )}
                    
//                     {course.enrolled && (
//                         <Button 
//                             variant="outline" 
//                             size="icon"
//                             onClick={() => handleEnrollCourse(course.id)}
//                             className="border-red-300 text-red-600 hover:bg-red-50"
//                         >
//                             <Plus className="w-4 h-4 rotate-45" />
//                         </Button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );

//     return (   
//         <div className='mt-6'>
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className='font-bold text-3xl'>Available Courses</h2>
//                 <AddNewCourseDialog>
//                     <Button className="bg-green-600 hover:bg-green-700">
//                         <Plus className="w-4 h-4 mr-2" />
//                         Create New Course
//                     </Button>
//                 </AddNewCourseDialog>
//             </div>
            
//             {courseList?.length === 0 ? (
//                 <div className='flex p-7 items-center justify-center flex-col border rounded-xl mt-2'>
//                     <Image src={'/javascript.png'} alt='edu' height={80} width={80}/>
//                     <h2 className='my-2 text-xl font-bold'>Look like you haven't created any courses yet</h2>
//                     <AddNewCourseDialog>
//                         <Button>+ Create your first course</Button>
//                     </AddNewCourseDialog> 
//                 </div>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {courseList.map((course) => (
//                         <CourseCard key={course.id} course={course} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default CourseList
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
                <h2 className='font-bold text-3xl'>Available Courses</h2>
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
                    className='bg-white rounded-lg shadow-md p-6'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <h3 className='text-xl font-bold  text-gray-900'>
                                {course.title}
                            </h3>
                            <p className="text-sm -text-grey-600">{course.instructor}</p>
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
                                <div className='flex justify-between items-center mb-1'>
                                    <span className='text-sm text-grey-700'>Progress</span>
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
