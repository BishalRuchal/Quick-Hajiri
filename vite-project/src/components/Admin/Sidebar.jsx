// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../../assets/Dashboard.png";
import Manageteacher from "../../assets/ManageTeacher.png";
import Managestudent from "../../assets/ManageStudent.png";
import Managefaculty from "../../assets/ManageFaculty.png";
import Upgradesemester from "../../assets/UpgradeSemester.png";
import Managesubject from "../../assets/ManageSubject.png";
import Manageattendance from "../../assets/ManageAttendance.png";
import logout from "../../assets/logout.png";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 text-black fixed top-20 left-0 flex flex-col border-r-2 border-gray-400">
      <div className="flex flex-col space-y-3 p-2">
        {[
          { src: Dashboard, label: "Dashboard", to: "/admin/dashboard" },
          { src: Manageteacher, label: "Manage Teacher", to: "/admin/manage-teacher"},
          { src: Managestudent, label: "Manage Student", to:"/admin/manage-student"},
          { src: Managefaculty, label: "Manage Faculty", to:"/admin/managefaculty"},
          { src: Upgradesemester, label: "Upgrade Semester", to: "/admin/upgradesemester"},
          { src: Managesubject, label: "Manage Subject", to:"/admin/managesubject"},
          { src: Manageattendance, label: "Manage Attendance", to:"/admin/manageattendance"},
        ].map((item, index) => (
          <NavLink
           to={item.to}
            key={index}
            className={({ isActive }) =>
              isActive
            ? "p-2 flex items-center space-x-5 bg-blue-200 text-blue-800 font-bold transition-colors"
            : "p-2 flex items-center space-x-5 bg-gray-100 hover:bg-blue-200 cursor-pointer transition-colors"
}
          >
            <img src={item.src} alt={`${item.label} Logo`} className="h-8 w-auto" />
            <span className="text-xl font-semibold">{item.label}</span>
            </NavLink>
        ))}
        </div>
        <div className="mt-12">

         <NavLink
            to="/logout"
          className={({ isActive }) =>
            isActive
              ? "p-2 flex items-center space-x-5 bg-blue-200 text-blue-800 font-bold transition-colors"
              : "p-2 flex items-center space-x-5 bg-gray-100 hover:bg-blue-200 cursor-pointer transition-colors"
          }
      >
      
          <img src={logout} alt="Logout Logo" className="h-8 w-auto" />
          <span className="text-xl font-semibold" >Logout</span>
          </NavLink>
        </div>
      </div>
   
  );
};

export default Sidebar;


