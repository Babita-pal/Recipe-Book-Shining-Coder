import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import './Navbar.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBtnDisable(true);
    const url = 'https://fullstack-ecom-render.onrender.com/account/login/';
    const data = { username, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setBtnDisable(false);
        toast.error(`HTTP error! status: ${response.status}`);
        return;
      }

      const result = await response.json();

      if (result && result.token) {
        sessionStorage.setItem('token', result.token);
        toast.success('Login successful!');
        setTimeout(() => navigate('/'), 2000);
      } else {
        toast.error('Login failed. Invalid token.');
        setBtnDisable(false);
      }
    } catch (error) {
      toast.error(`There was a problem with the login: ${error.message}`);
      setBtnDisable(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 opacity-100 " style={{ backgroundImage: "url('/Image/1.jpg')" }}></div>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm ">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 ">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              disabled={btnDisable}
              className={`w-full py-2 rounded transition duration-200 ${btnDisable ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}`}
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <span
              className="text-indigo-500 hover:underline cursor-pointer"
              onClick={() => navigate('/register')}
            >
              Register
            </span>
          </div>
          <ToastContainer position="bottom-right" autoClose={1000} />
        </div>
      </div>
    </div>
  );
};

export default Login;
