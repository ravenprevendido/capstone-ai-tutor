import React from 'react'
import AdminHeader from './components/shared/AdminHeader'
import AdminSidebar from './components/shared/AdminSidebar'

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
