import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="bg-gray-950 text-white px-4 py-16 min-h-screen flex items-center justify-center">
      <div className='p-8 bg-gray-900 rounded-2xl'>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-5xl">

          {/* Left Animation / Icons Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black p-4 rounded-xl flex flex-col items-center gap-4 shadow-lg w-48 md:w-56"
          >
            <FaPhoneAlt className="text-blue-400 text-4xl animate-bounce" />
            <FaEnvelope className="text-yellow-300 text-4xl animate-pulse" />
            <FaCommentDots className="text-pink-400 text-4xl animate-spin-slow" />
          </motion.div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg text-black w-full md:w-[60%]">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">📞 Contact Us</h2>
            <p className="text-center text-gray-600 mb-6">
              Got questions or feedback? We're here to help.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="border border-gray-300 p-3 w-full rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full"
              >
                Send Message
              </button>
            </form>

            <div className="text-center mt-6 text-gray-700">
              <p>Email: <span className="text-blue-600">club@example.com</span></p>
              <p>Phone: <span className="text-blue-600">123-456-7890</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
