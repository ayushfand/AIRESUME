import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const webinarData = {
  'AI Webinar': {
    title: 'AI Webinar',
    description:
      'Join us for an exciting AI webinar where experts discuss the latest trends and advancements in artificial intelligence.',
    date: 'April 30, 2025',
    time: '5:00 PM - 6:30 PM',
    location: 'Online',
    poster: 'path_to_ai_webinar_poster.jpg', // Add the path to your poster image
  },
  'Cloud Computing': {
    title: 'Cloud Computing',
    description:
      'Learn the fundamentals of Cloud Computing and how to build scalable applications in this comprehensive webinar.',
    date: 'May 7, 2025',
    time: '4:00 PM - 5:30 PM',
    location: 'Online',
    poster: 'path_to_cloud_computing_poster.jpg', // Add the path to your poster image
  },
  'Frontend Frameworks': {
    title: 'Frontend Frameworks',
    description:
      'Explore the world of frontend frameworks, including React, Vue, and Angular, and find out which one suits your project.',
    date: 'May 14, 2025',
    time: '6:00 PM - 7:30 PM',
    location: 'Online',
    poster: 'path_to_frontend_frameworks_poster.jpg', // Add the path to your poster image
  },
};

const Webinars = ({ user }) => {
  const webinars = Object.keys(webinarData);
  const navigate = useNavigate();

  const register = (webinar) => {
    const registered = JSON.parse(localStorage.getItem('registered') || '[]');
    if (!registered.includes(webinar)) {
      localStorage.setItem('registered', JSON.stringify([...registered, webinar]));
      alert(`Successfully registered for ${webinar}`);
    } else {
      alert(`You're already registered for ${webinar}`);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Upcoming Webinars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {webinars.map((w, i) => {
          const webinar = webinarData[w];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <img src={webinar.poster} alt={webinar.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{webinar.title}</h3>
              <p className="text-gray-400 mb-4">{webinar.description}</p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Date:</strong> {webinar.date}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Time:</strong> {webinar.time}
              </p>

              <button
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg w-full font-semibold transition-all"
                onClick={() => register(w)}
                disabled={!user}
              >
                {user ? 'Register Now' : 'Login to Register'}
              </button>

              <button
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg w-full font-semibold transition-all my-4"
                onClick={() => navigate(`/webinars/${encodeURIComponent(w)}`)}
                
              >
                View Details
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Webinars;
