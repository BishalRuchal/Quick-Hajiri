import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard';
import Login from './components/LoginPage/Login';
import Layout from './components/Admin/Layout';
import ManageTeacher from './components/Admin/ManageTeacher';
import AddTeacher from './components/Admin/AddTeacher';
import ManageStudent from './components/Admin/ManageStudent';
import AddStudent from './components/Admin/AddStudent';
import UpgradeSemester from './components/Admin/UpgradeSemester';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/components/admin/dashboard" element={<Dashboard />} /> */}
        <Route path='/admin' element={<Layout />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='manage-teacher' element={<ManageTeacher />} />
          <Route path='add-teacher' element={<AddTeacher />} /> 
          <Route path ='manage-student' element={<ManageStudent />} /> 
          <Route path ='add-student' element={<AddStudent />} />
          <Route path ='upgradesemester' element={<UpgradeSemester />} />
          </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
