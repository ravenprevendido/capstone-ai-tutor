import React from 'react'
import TeacherList from './components/TeacherList'

function TeacherPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        <p className="text-gray-600">Manage all teacher-related activities here.</p>
      </div>
      
      <TeacherList />
    </div>
  )
}

export default TeacherPage
