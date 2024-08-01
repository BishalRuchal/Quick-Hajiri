import React, { useState } from "react";


const UpgradeSemester = () => {
  const [faculty, setFaculty] = useState("BICTE");
  const [batch, setBatch] = useState("BICTE 2080");
  const [semester, setSemester] = useState("2nd Sem");

  const [facultyNew, setFacultyNew] = useState("BICTE");
  const [batchNew, setBatchNew] = useState("BICTE 2080");
  const [semesterNew, setSemesterNew] = useState("2nd Sem");

  return (
    
        <div className="flex-1 mt-1 ml-54 mb-20 flex flex-col">
          <div className="flex-grow bg-gray-300 border-1 border-gray-400 p-4 mt-20 ml-2">
            <h1 className="text-2xl font-bold mb-6 text-teal-800">Upgrade Semester</h1>
            <div className="flex justify-around items-start mt-8">
              <div className="w-2/5 p-4 border rounded-md bg-white shadow-md">
                <form>
                  <div className="mb-4">
                    <label htmlFor="faculty" className="block mb-1 font-semibold">Faculty</label>
                    <input
                      type="text"
                      id="faculty"
                      value={faculty}
                      onChange={(e) => setFaculty(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="batch" className="block mb-1 font-semibold">Batch</label>
                    <input
                      type="text"
                      id="batch"
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="semester" className="block mb-1 font-semibold">Semester</label>
                    <input
                      type="text"
                      id="semester"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="students" className="block mb-1">Students</label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="select-all-current"
                        className="mr-2"
                      />
                      <label htmlFor="select-all-current">Select All</label>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Refresh
                    </button>
                    <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">
                  Proceed
                </button>
              </div>
              <div className="w-2/5 p-4 border rounded-md bg-white shadow-md">
                <form>
                  <div className="mb-4">
                    <label htmlFor="faculty-new" className="block mb-1 font-semibold">Faculty</label>
                    <input
                      type="text"
                      id="faculty-new"
                      value={facultyNew}
                      onChange={(e) => setFacultyNew(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="batch-new" className="block mb-1 font-semibold">Batch</label>
                    <input
                      type="text"
                      id="batch-new"
                      value={batchNew}
                      onChange={(e) => setBatchNew(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="semester-new" className="block mb-1 font-semibold">Semester</label>
                    <input
                      type="text"
                      id="semester-new"
                      value={semesterNew}
                      onChange={(e) => setSemesterNew(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="students-new" className="block mb-1">Students</label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="select-all-new"
                        className="mr-2"
                      />
                      <label htmlFor="select-all-new">Select All</label>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Upgrade
                    </button>
                    <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
         
    </div>
  );
};

export default UpgradeSemester;

