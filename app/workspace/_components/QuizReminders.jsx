"use client"
import React from 'react'

function QuizReminders() {
  const reminders = [
    {
      title: "Javascript for web development",
      subtitle: "Quiz in 1 day",
      priority: "High Priority"
    },
    {
      title: "web-dev is now available",
      subtitle: "3 hours ago",
      priority: ""
    }
  ]

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Quiz Reminders</h3>
      <div className="space-y-4">
        {reminders.map((reminder, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">{reminder.title}</p>
              <p className="text-xs text-gray-500">{reminder.subtitle}</p>
              {reminder.priority && (
                <span className="text-xs text-red-500 font-medium">{reminder.priority}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuizReminders
