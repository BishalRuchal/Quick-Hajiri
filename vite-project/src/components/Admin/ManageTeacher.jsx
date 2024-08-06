import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import teacherService from "../../Services/teacher.service";

const ManageTeacher = () => {
  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    teacherService
      .getAllTeacher()
      .then((res) => {
        console.log(res.data);
        setTeacherList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    teacherService
      .deleteTeacher(id)
      .then((res) => {
        console.log(res.data);
        fetchTeachers(); // Refresh the list after deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex-1 mt-1 ml-6 mb-20 flex flex-col">
      <div className="flex-grow bg-gray-200 border-1 border-gray-400 p-6 mt-20 ml-6">
        <h1 className="text-2xl font-semibold mb-4">Teacher</h1>
        <div className="flex justify-end mb-4">
          <Link to="/admin/add-teacher">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add Teacher
            </button>
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
              {teacherList.map((e, num) => (
                <tr key={e.id}>
                  <td className="py-2 px-4 border-b">{num + 1}</td>
                  <td className="py-2 px-4 border-b">{e.teacherName}</td>
                  <td className="py-2 px-4 border-b">{e.teacherContact}</td>
                  <td className="py-2 px-4 border-b">{e.teacherEmail}</td>
                  <td className="py-2 px-4 border-b">{e.userName}</td>
                  <td className="py-2 px-4 border-b">{e.password}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600">
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-2"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTeacher;
