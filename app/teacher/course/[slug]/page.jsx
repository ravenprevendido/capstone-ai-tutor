"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  BookOpen,
  FileText,
  Megaphone,
  Users,
  BarChart2,
  Trash2,
  Edit,
  Lightbulb,
} from "lucide-react";

const CoursePage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("Lesson");
  const [pendingEnrollment, setPendingEnrollments] = useState([]);
  const lessons = [
    { id: 1, title: "Introduction to React Hooks", lesson: "Lesson 1", date: "2025-10-26", status: "Published" },
    { id: 2, title: "Understanding useState & useEffect", lesson: "Lesson 2", date: "2025-10-27", status: "Published" },
  ];

  const quizzes = [
    { id: 1, title: "React Basics Quiz", questions: 10, date: "2025-10-27", status: "Active" },
  ];

  const assignments = [
    { id: 1, title: "Build a React Counter App", deadline: "2025-11-01", status: "Ongoing" },
  ];

  const announcements = [
    { id: 1, message: "Live Q&A session on Friday!", date: "2025-10-28" },
  ];

  const students = [
    { id: 1, name: "John Doe", progress: 80 },
    { id: 2, name: "Jane Smith", progress: 90 },
  ];

  const analytics = {
    enrolled: 50,
    completionRate: 65,
    avgScore: 88,
  };



  const renderTabContent = () => {
    switch (activeTab) {
      case "Lesson":
        return (
          <table className="w-full text-left text-gray-300 text-sm">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400 uppercase text-xs">
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Lesson</th>
                <th className="py-3 px-4">Date Created</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => (
                <tr key={lesson.id} className="border-b border-gray-800 hover:bg-[#1c2128] transition">
                  <td className="py-3 px-4">{lesson.title}</td>
                  <td className="py-3 px-4">{lesson.lesson}</td>
                  <td className="py-3 px-4">{lesson.date}</td>
                  <td className="py-3 px-4 text-green-500">{lesson.status}</td>
                  <td className="py-3 px-4 text-right flex items-center justify-end gap-3">
                    <button className="hover:text-green-500">
                      <Edit size={16} />
                    </button>
                    <button className="hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "Quiz":
        return (
          <div className="text-gray-300 text-sm p-4">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="bg-[#1c2128] p-4 rounded-md mb-3 border border-gray-700">
                <p className="font-semibold">{quiz.title}</p>
                <p>Questions: {quiz.questions}</p>
                <p>Date: {quiz.date}</p>
                <p className="text-green-500">Status: {quiz.status}</p>
              </div>
            ))}
          </div>
        );

      case "Assignments":
        return (
          <div className="text-gray-300 text-sm p-4">
            {assignments.map((a) => (
              <div key={a.id} className="bg-[#1c2128] p-4 rounded-md mb-3 border border-gray-700">
                <p className="font-semibold">{a.title}</p>
                <p>Deadline: {a.deadline}</p>
                <p className="text-green-500">Status: {a.status}</p>
              </div>
            ))}
          </div>
        );

      case "Announcement":
        return (
          <div className="text-gray-300 text-sm p-4">
            {announcements.map((a) => (
              <div key={a.id} className="bg-[#1c2128] p-4 rounded-md mb-3 border border-gray-700">
                <p>{a.message}</p>
                <p className="text-gray-500 text-xs">{a.date}</p>
              </div>
            ))}
          </div>
        );

      case "Students":
        return (
          <table className="w-full text-left text-gray-300 text-sm">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400 uppercase text-xs">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Progress</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="border-b border-gray-800 hover:bg-[#1c2128] transition">
                  <td className="py-3 px-4">{s.name}</td>
                  <td className="py-3 px-4 text-green-500">{s.progress}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "Analytics":
        return (
          <div className="p-4 text-gray-300 space-y-2 text-sm">
            <p><span className="text-green-500 font-semibold">Enrolled Students:</span> {analytics.enrolled}</p>
            <p><span className="text-green-500 font-semibold">Completion Rate:</span> {analytics.completionRate}%</p>
            <p><span className="text-green-500 font-semibold">Average Quiz Score:</span> {analytics.avgScore}%</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 p-6 flex flex-col lg:flex-row gap-6">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        {/* Course Header */}
        <div className="bg-[#161b22] p-6 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold text-green-500">{slug.replace(/-/g, " ")}</h1>
              <p className="text-gray-400 mt-2">50 Students</p>
            </div>
            <img
              src="/hand.png"
              alt="Course"
              className="relative w-full aspect-square h-32 object-cover rounded-lg"
            />
          </div>
          {/* Progress */}
          <div className="mt-6">
            <div className="text-sm text-gray-300 mb-2 flex justify-between">
              <span>Course Progress</span>
              <span>65% complete</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              <BookOpen size={16} /> Add Lesson
            </button>
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              <FileText size={16} /> Add Quiz
            </button>
            <button className="flex items-center gap-2 border border-green-600 text-green-500 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
              <Megaphone size={16} /> Add Announcement
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[#161b22] border border-gray-800 rounded-lg">
          <div className="flex justify-around text-gray-400 text-sm font-medium border-b border-gray-700">
            {["Lesson", "Quiz", "Assignments", "Announcement", "Students", "Analytics"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-4 hover:text-green-500 transition-colors duration-200 ${
                  activeTab === tab ? "text-green-500 border-b-2 border-green-500" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">{renderTabContent()}</div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-96 bg-[#161b22] border border-gray-800 rounded-lg p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Lightbulb size={20} className="text-green-500" />
          <h2 className="text-lg font-semibold">AI Assistant</h2>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-400">Insights</h3>
          <ul className="space-y-3">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <div className="text-green-500 mt-1">☑</div>
                Students are struggling with Lesson {i}: React Basics.
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-400">Suggestions</h3>
          <ul className="space-y-3">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <div className="text-green-500 mt-1">☑</div>
                Schedule an optional live Q&A session for Module {i}.
              </li>
            ))}
          </ul>
        </div>

            <div></div>

      </div>
    </div>
  );
};

export default CoursePage;
