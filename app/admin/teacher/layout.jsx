import React from 'react'

function TeacherLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Add teacher-specific layout elements here */}
      {children}
    </div>
  )
}

export default TeacherLayout
