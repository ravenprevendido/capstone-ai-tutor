"use client";
import React from "react"
import { courseData } from "../lib/courseData";
import { File, FileText, Video } from "lucide-react";

function LessonMaterials () {
  const getIcon = (type) => {
    if(type === "video") return <Video className="w-5 h-5 shrink-0 text-red-500"/>;
    if(type === "doc") return <FileText className="w-5 h-5 shrink-0 text-blue-500"/>;
    return <File className="text-blue-500 w-5 h-5 shrink-0"/>

  };
  return(
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">All Lessons & Materials</h1>
      <div className="bg-[#1e1e1e] rounded-lg p-6 shadow">
        <div className="grid grid-cols-4 font-semibold text-gray-400 mb-4 border-b border-gray-600 pb-2">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-5"/>LESSON</div>
            <div>COURSE</div>
            <div>STATUS</div>
            <div>ACTION</div>
        </div>

        {courseData.map((course) => course.lessons?.map((lesson, index) => (
          <div key={`${course.id}-${index}`} className="grid grid-cols-4 items-center p-3 border-b border-gray-700 text-sm text-white">
              <div className='flex items-center gap-2'>
                  {getIcon(lesson.type)}
                  {lesson.title}
              </div>
              <div>{course.title}</div>
              <div>
                {lesson.status === "viewed" ? (
                  <span className="bg-green-700 px-3 py-1 rounded-full text-xs text-white">
                      Viewed
                  </span>
                ) : (
                  <span className="bg-yellow-700 px-3 py-1 rounded-full text-xs text-white">
                    Not Viewed
                  </span>
                )}
              </div>

              <div>
                {lesson.fileUrl ? (
                  <a href={lesson.fileUrl} target="_blank" download className="text-blue-400 hover:underline">
                    View
                  </a>
                ):(

                <span className="text-gray-400 text-xs">
                    N/A
                </span>
                )}
              </div>
          </div>
        )))}

      </div>
    </div>
  )
}


export default LessonMaterials