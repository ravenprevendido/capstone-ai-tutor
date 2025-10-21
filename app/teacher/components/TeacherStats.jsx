"use client"
import React from "react";
import { Book, Clock, User2Icon } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import TeacherCharts from "./TeacherCharts";


function TeacherStats() {
  const stats = [
    {
      title: "Course Related",
      value: "3",
      icon: Book,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Student Enrolled",
      value: "2",
      icon: FaUserGraduate,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Average Engagement",
      value: "4",
      icon: IoAnalyticsOutline,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Upcoming Quizzes",
      value: "4",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
  ];



  // Mock data for the two-column section
  const quizzes = [
    { title: "Calculus I Midterm", date: "Nov 15, 2024" },
    { title: "Physics II Quiz", date: "Nov 18, 2024" },
    { title: "History of Art Essay Due", date: "Nov 20, 2024" },
  ];

  const announcements = [
    { title: "Holiday Break Schedule Confirmed", date: "Nov 10, 2024" },
    { title: "Parent-Teacher Conference Sign-up Open", date: "Nov 08, 2024" },
    { title: "New AI Tutor Features Available", date: "Nov 05, 2024" },
  ];





  const recent  = [
    {title: "alice Green Submitted Calculus 1 midterm", date: "Nov, 20, 2025", icon: User2Icon},
    {title: "alice Green Submitted Calculus 1 midterm", date: "Nov, 20, 2025", icon: User2Icon}
  ]



  
  return (
    <div className="md:w-full md:-ml-0 w-82 -ml-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#13181F] border border-[#232935] p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-gray-100">{stat.title}</h3>
                <p className="text-3xl text-green-500 font-bold mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
       
      </div>
      {/* Upcoming Quizzes + Announcements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upcoming Quizzes */}
        <div className="bg-[#13181F] border border-[#232935] p-6 rounded-xl">
          <h3 className="text-white text-lg font-semibold mb-3">
            Upcoming Quizzes
          </h3>
          <ul className="divide-y divide-gray-700">
            {quizzes.map((item, i) => (
              <li
                key={i}
                className="flex justify-between py-3 text-gray-300 text-sm"
              >
                <span>{item.title}</span>
                <span className="text-gray-400">{item.date}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-green-400 mt-3 text-sm cursor-pointer hover:underline">
            View All Quizzes
          </p>
        </div>
        {/* Recent Announcements */}
        <div className="bg-[#13181F] border border-[#232935] p-6 rounded-xl">
          <h3 className="text-white text-lg font-semibold mb-3">
            Recent Announcements
          </h3>
          <ul className="divide-y divide-gray-700">
            {announcements.map((item, i) => (
              <li
                key={i}
                className="flex justify-between py-3 text-gray-300 text-sm"
              >
                <span>{item.title}</span>
                <span className="text-gray-400">{item.date}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-green-400 mt-3 text-sm cursor-pointer hover:underline">
            View All Announcements
          </p>
        </div>



          <div className="bg-[#13181f] border border-[#232935] p-6 rouneded-xl">
              <h3 className="text-white text-lg font-semibold mb-3">Recent Student Activity</h3>
              <p className="text-gray-600">Over view of recent content</p>

              <ul className="divide-y divide-gray-700">
        {recent.map((item, i) => {
          const Icon = item.icon;
          return (
            <li
              key={i}
              className="py-3 flex items-center justify-between text-gray-300 hover:bg-[#1a1f29] transition-all px-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-700/20 p-2 rounded-full">
                  <Icon className="text-green-500 w-5 h-5" />
                </div>
                <span className="text-sm">{item.title}</span>
              </div>
              <span className="text-xs text-gray-500">{item.date}</span>
            </li>
          );
        })}
      </ul>
          </div>u
      </div>
      <TeacherCharts/>
    </div>
  );
}

export default TeacherStats;
