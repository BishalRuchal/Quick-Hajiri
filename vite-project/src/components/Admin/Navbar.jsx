import React from "react";
import logo from "../../assets/logo.png";
import teacher from "../../assets/teacher.png";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-3 fixed top-0 left-0 right-0 z-10 border-b border-gray-400">
      <div className="container mx-auto flex justify-between items-end">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Quick Hajiri Logo" className="h-12 w-auto" />
          </div>

        

        <div className="flex items-end space-x-16">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border border-gray-400 rectangle-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            
          />
          <FiSearch className="absolute right-3 top-1 tect-gray-400" />
          </div>
           <div className="flex items-end space-x-1">
          <img src={teacher} alt="Admin Logo" className="h-8 w-15" />
            <span className="text-lg">Cyan(Admin)</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
