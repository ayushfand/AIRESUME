import React from 'react'
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 border-t border-gray-800 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Info */}
        <div>
          <h1 className="text-2xl text-white font-bold mb-2">Axios</h1>
          <p className="text-sm text-gray-500">Fueling ideas through events, webinars, and collaborations.</p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
          <p>Email: <a href="mailto:contact@axios.com" className="hover:text-white">contact@axios.com</a></p>
          <p>Phone: <span className="text-white">+91 98765 43210</span></p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="mailto:contact@axios.com" className="hover:text-red-400">
              <FaEnvelope />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-8">
        &copy; {new Date().getFullYear()} Axios. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
