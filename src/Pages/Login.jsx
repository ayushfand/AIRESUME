


import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !name) return alert("Please enter both name and email");

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        name
      });

      const user = response.data.user;
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials');
    }
  };

  const handleSignup = async () => {
    navigate('/signup');
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        className="bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">🔐 Login to Axios</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-6 p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-300"
        >
          Login
        </button>

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white my-2 font-semibold py-3 rounded transition duration-300"
        >
          Signup
        </button>
      </motion.div>
    </div>
  );
};

export default Login
