"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  const course = [
    {
      id: 1,
      title: "Advanced React Development",
      students: 150,
      progress: 75,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      students: 300,
      progress: 45,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      students: 210,
      progress: 60,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Cloud Computing with AWS",
      students: 120,
      progress: 88,
      color: "bg-orange-500",
    },
    {
      id: 5,
      title: "Ethical Hacking Fundamentals",
      students: 85,
      progress: 90,
      color: "bg-red-500",
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      students: 90,
      progress: 70,
      color: "bg-pink-500",
    },
  ];

  // 🔧 Function to convert title into a clean URL slug
  const slugify = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-4 sm:p-6 w-full">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-500">
          My Courses
        </h1>
        <p className="text-gray-400">Manage and track your course programs</p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
        {course.map((course) => {
          const slug = slugify(course.title); // ✅ Slugify here
          return (
            <div
              key={course.id}
              className="bg-[#161b22] rounded-xl border border-gray-700 p-5 sm:p-6 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white flex-1 pr-2">
                  {course.title}
                </h3>
                <div
                  className={`w-3 h-3 rounded-full ${course.color} shrink-0 mt-1`}
                ></div>
              </div>

              {/* Students */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm sm:text-base">
                  Enrolled Students{" "}
                  <span className="font-bold text-white">
                    {course.students}
                  </span>
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Manage Button */}
              <Link href={`/teacher/course/${slug}`}>
                <button className="w-full bg-green-600 hover:bg-green-700 rounded-md py-2 px-4 font-medium transition-colors duration-200 text-sm sm:text-base cursor-pointer">
                  Manage Course
                </button>
              </Link>
            </div>
          );
        })}
      </div>

      {course.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No Course Found</div>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium">
            Create New Course
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
