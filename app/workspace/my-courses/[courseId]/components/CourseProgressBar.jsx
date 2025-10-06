"use client";

import { CheckCircle, FileText, ListCheck } from "lucide-react";

export default function CourseProgressBar(){
    return (
        <div className="bg-[#1a1d24] p-10 rounded-lg space-y-4 shadow-md">
            <h2 className="text-lg font-bold text-white mb-4">
                Course Progress
            </h2>
            <ul className="text-sm space-y-2 text-white">
                <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-400 w-4 h-4"/>
                    <span>2/5 Lessons Viewed</span>
                </li>

                <li className="flex items-center gap-2">
                    <ListCheck className="text-yellow-400 w-4 h-4"/>
                    <span>1/2 Quizzes Completed</span>
                </li>

                <li className="flex items-center gap-2">
                    <FileText className="text-blue-400 w-4 h-4"/>
                    <span>0/2 Assignments Submitted</span>
                </li>
            </ul>
        </div>
    )
}


