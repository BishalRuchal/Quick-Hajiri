// src/components/Admin/Teacher/ManageTeacher.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {Link} from 'react-router-dom';

const ManageTeacher = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-1 mt-1 ml-6 mb-20 flex flex-col">
          <div className="flex-grow bg-gray-100 border-1 border-gray-400 p-4 mt-20 ml-2">
            <h1 className="text-2xl font-semibold mb-4">Teacher</h1>
            <div className="flex justify-end mb-4">
              <Link to="/admin/add-teacher">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Teacher</button>
              </Link>
            </div>
            <div className="table-container">
              <h3 className="text-lg font-semibold mb-2">Current Teachers</h3>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">#</th>
                    <th className="py-2 px-4 border-b">Teacher Name</th>
                    <th className="py-2 px-4 border-b">Contact</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Username</th>
                    <th className="py-2 px-4 border-b">Password</th>
                    <th className="py-2 px-4 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">1</td>
                    <td className="py-2 px-4 border-b">Amrit Thapa</td>
                    <td className="py-2 px-4 border-b">9008564156</td>
                    <td className="py-2 px-4 border-b">amrit12@gmail.com</td>
                    <td className="py-2 px-4 border-b">amrit</td>
                    <td className="py-2 px-4 border-b">********</td>
                    <td className="py-2 px-4 border-b">
                      <i className="fas fa-edit mr-2"></i>
                      <i className="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">2</td>
                    <td className="py-2 px-4 border-b">Sujan Ale</td>
                    <td className="py-2 px-4 border-b">9008564156</td>
                    <td className="py-2 px-4 border-b">sujan123@gmail.com</td>
                    <td className="py-2 px-4 border-b">sujan</td>
                    <td className="py-2 px-4 border-b">********</td>
                    <td className="py-2 px-4 border-b">
                      <i className="fas fa-edit mr-2"></i>
                      <i className="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">3</td>
                    <td className="py-2 px-4 border-b">Anju Thapa</td>
                    <td className="py-2 px-4 border-b">9008564156</td>
                    <td className="py-2 px-4 border-b">aleanju1@gmail.com</td>
                    <td className="py-2 px-4 border-b">anju</td>
                    <td className="py-2 px-4 border-b">********</td>
                    <td className="py-2 px-4 border-b">
                      <i className="fas fa-edit mr-2"></i>
                      <i className="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">4</td>
                    <td className="py-2 px-4 border-b">Binita Thapa</td>
                    <td className="py-2 px-4 border-b">9008564156</td>
                    <td className="py-2 px-4 border-b">binitathapa@gmail.com</td>
                    <td className="py-2 px-4 border-b">binita</td>
                    <td className="py-2 px-4 border-b">********</td>
                    <td className="py-2 px-4 border-b">
                      <i className="fas fa-edit mr-2"></i>
                      <i className="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ManageTeacher;
