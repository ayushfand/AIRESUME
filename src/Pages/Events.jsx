import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBolt, FaChalkboardTeacher } from 'react-icons/fa';

const Events = ({ user }) => {
  const events = [
    {
      title: 'Tech Talk',
      description: 'An insightful talk on future tech and innovation.',
      icon: <FaBolt className="text-yellow-400 text-3xl" />
    },
    {
      title: 'Hackathon',
      description: 'Collaborate and compete to build amazing projects!',
      icon: <FaLaptopCode className="text-green-400 text-3xl" />
    },
    {
      title: 'Coding Bootcamp',
      description: 'Level up your coding skills with expert mentors.',
      icon: <FaChalkboardTeacher className="text-blue-400 text-3xl" />
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          🚀 Upcoming Events
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              onClick={() => navigate(`/events/${encodeURIComponent(event.title)}`)}
              className="cursor-pointer bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-indigo-500 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-800 rounded-full">{event.icon}</div>
                <h3 className="text-xl font-bold">{event.title}</h3>
              </div>
              <p className="text-gray-400">{event.description}</p>
              <p className="mt-4 text-indigo-400 text-sm font-semibold ">
                View Details & Register →
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
