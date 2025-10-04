import React from 'react'

function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900">Total Teachers</h3>
        <p className="text-3xl font-bold">0</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900">Total Courses</h3>
        <p className="text-3xl font-bold">0</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900">Active Students</h3>
        <p className="text-3xl font-bold">0</p>
      </div>
    </div>
  )
}

export default DashboardStats
