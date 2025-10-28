"use client";

import { useParams, useSearchParams } from "next/navigation";
import Tabs from "./components/Tabs";
import LessonTab from "./components/LessonTab";
import CourseProgressBar from "./components/CourseProgressBar";
import AiTutorCard from "./components/AiTutorCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { courseData } from "../../lib/courseData";
import QuizzesTab from "./components/QuizzesTab";
import AssignmentTab from "./components/AssignmentTab";
import AnnouncementTab from "./components/AnnouncementsTab";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "lessons";
  const course = courseData.find((c) => String(c.id) === String(courseId));

  if (!course) {
    return <div className="p-6 text-red-500">Course not found.</div>;
  }

  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-8 w-80 md:w-full md:ml-0 -ml-11 rounded-lg mb-6">
        <Link href={`/workspace/my-courses/`}>
          <ArrowLeft className="w-4 h-4 text-white" />
        </Link>
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <p className="text-sm">By {course.instructor}</p>
      </div>
      {/* Main layout */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main content */}
        <div className="lg:col-span-3">
          {/* Tabs only visible on large screens */}
          <div className="hidden lg:block">
            <Tabs courseId={courseId} activeTab={activeTab} />
          </div>
          <div className="w-80 md:w-full md:ml-0 -ml-11">
            {activeTab === "lessons" && <LessonTab lessons={course.lessons} />}
            {activeTab === "quizzes" && <QuizzesTab quizzes={course.quizzes} />}
            {activeTab === "assignments" && (
              <AssignmentTab assignments={course.assignments} />
            )}
            {activeTab === "announcement" && (
              <AnnouncementTab announcements={course.announcements} />
            )}
          </div>
        </div>
        {/* Sidebar */}
        <div className="lg:col-span-1 space-2 w-80 md:w-80 -ml-11 md:ml-0">
          <CourseProgressBar />
          <AiTutorCard />
        </div>
      </div>

      {/* Mobile Footer Tabs */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#111827] border-t border-gray-700">
        <div className="flex justify-around py-3">
          <Tabs courseId={courseId} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
