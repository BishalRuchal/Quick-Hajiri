// src/components/Admin/LogOut.jsx
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LogOut = () => {
  const history = useHistory();

  useEffect(() => {
    // Clear user session data here
    // e.g., localStorage.removeItem('userToken');
    localStorage.removeItem('userToken');
    
    // Redirect to login page
    history.push('/login');
  }, [history]);

  return null;
};

export default LogOut;
