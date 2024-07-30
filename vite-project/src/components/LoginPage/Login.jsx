import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'; 
import userIcon from '../../assets/user.png'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      navigate('/admin/dashboard');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-full max-w-6xl h-full border-2 border-black">
        <div className="w-1/2 flex justify-center items-center border-r border-black bg-gradient-to-b from-blue-900 via-green-600 to-green-400">
        <div className="bg-white p-4 rounded-lg">
          <img src={logo} alt="Logodesign" className="w-50 h-50 object-cover" />
        </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-4/5 max-w-lg p-5 flex flex-col items-center border-2 border-gray-400 rounded-md bg-white shadow-md">
            <form id="login-form" className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
              <img src={userIcon} alt="Login Icon" className="w-20 mb-5" />
              <label htmlFor="username" className="w-full mb-1 text-left">Username</label>
              <input
                type="text"
                id="username"
                className="w-full p-3 mb-5 border-2 bg-gray-100"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password" className="w-full mb-1 text-left">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 mb-5 border-2 bg-gray-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full flex items-center mb-3">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button type="submit" className="w-full p-3 bg-blue-700 text-white text-lg cursor-pointer hover:bg-gray-600">
                Login
              </button>
              <div className="mt-3 text-center">
                <a href="#" className="text-blue-600">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
