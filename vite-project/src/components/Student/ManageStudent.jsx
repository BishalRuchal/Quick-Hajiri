// src/components/Admin/Teacher/ManageTeacher.jsx
import React from 'react';
import Navbar from '../Admin/Navbar';
import Sidebar from '../Admin/Sidebar';
import Footer from '../Admin/Footer';

const ManageStudent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-1 mt-1 ml-64 mb-20 flex flex-col">
          <div className="flex-grow bg-gray-100 border-1 border-gray-400 p-4 mt-20 ml-2">
            <h1 className="text-2xl font-semibold mb-4">Manage Student</h1>
            <p>Welcome to the Manage Student page!</p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ManageStudent;
