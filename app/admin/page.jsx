import React from 'react'
import DashboardStats from './components/dashboard/DashboardStats'

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Overview of your educational platform.</p>
      </div>
    
      <DashboardStats />
    </div>
  )
}

export default AdminDashboard
