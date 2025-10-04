import React from 'react'
import Link from 'next/link'

function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen p-4">
      <nav className="space-y-2">
        <Link 
          href="/admin" 
          className="block p-2 rounded hover:bg-gray-100"
        >
          Dashboard
        </Link>
        <Link 
          href="/admin/teacher" 
          className="block p-2 rounded hover:bg-gray-100"
        >
          Teacher Section
        </Link>
      </nav>
    </aside>
  )
}

export default AdminSidebar
