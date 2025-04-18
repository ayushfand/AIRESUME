import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user }) => {
  const registered = JSON.parse(localStorage.getItem('registered') || '[]');
  const navigate = useNavigate();

  if(user==null){
    alert("please Login");
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* User Info Section */}
        <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">👤 Profile</h2>
          <p className="text-lg text-gray-300 mb-2"><strong>Name:</strong> {user?.name || 'Guest'}</p>
          <p className="text-lg text-gray-300"><strong>Email:</strong> {user?.email || 'N/A'}</p>
        </div>

        {/* Registration Section */}
        <div className="bg-gray-950 rounded-xl p-8 shadow-xl border border-gray-800">
          <h3 className="text-3xl font-bold mb-6 text-green-400">🎫 Registered Events & Webinars</h3>

          {registered.length > 0 ? (
            <div className="space-y-4">
              {registered.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-5 rounded-xl text-2xl font-semibold text-white border-l-4 border-green-500 hover:scale-105 transform transition duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-500">No registrations yet.</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
