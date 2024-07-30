import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-1 mt-1 ml-64 mb-20 flex flex-col">
          <Outlet />
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
