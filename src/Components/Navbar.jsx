import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/axious.jpeg';

const Navbar = ({ user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/webinars', label: 'Webinars' },
    { to: '/past-events', label: 'Past Events' },
    { to: '/members', label: 'Members' },
    { to: '/collaborate', label: 'Collaborate' },
  ];

  return (
    <div className="bg-black text-white shadow-md z-50 relative">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Axios Logo"
            className="h-10 w-10 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-xl font-bold tracking-wide hover:text-yellow-400 transition duration-300">
            Axios
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-yellow-300 hover:scale-105 transition-all duration-300 px-2 py-1 rounded"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={user ? '/profile' : '/login'}
            className="hover:text-yellow-300 transition-all duration-300"
          >
            {user ? <FaUser size={18} /> : <FaLock size={18} />}
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setSidebarOpen(true)} aria-label="Open Menu">
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50 shadow-xl`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-blue-500">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
            <h2 className="text-lg font-bold">Axios</h2>
          </div>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close Menu">
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex flex-col px-4 mt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setSidebarOpen(false)}
              className="hover:text-yellow-300 border-b border-blue-500 pb-2 transition-all duration-300 hover:translate-x-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={user ? '/profile' : '/login'}
            onClick={() => setSidebarOpen(false)}
            className="mt-2 flex items-center gap-2 hover:text-yellow-300 transition-all duration-300"
          >
            {user ? <FaUser /> : <FaLock />}
            {user ? 'Profile' : 'Login'}
          </Link>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
