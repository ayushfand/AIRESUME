import React from 'react';
import { motion } from 'framer-motion';

const pastEventData = [
  {
    title: 'AI Workshop',
    description:
      'A hands-on workshop where participants learned about the basics of AI, machine learning, and data analysis.',
    date: 'March 15, 2025',
    location: 'Auditorium A',
    image: 'path_to_ai_workshop_image.jpg', // Add image path here
  },
  {
    title: 'Hackathon 2024',
    description:
      'A 48-hour hackathon that brought together developers, designers, and problem-solvers to build innovative solutions.',
    date: 'December 2024',
    location: 'Main Hall',
    image: 'path_to_hackathon_image.jpg', // Add image path here
  },
  {
    title: 'Frontend Bootcamp',
    description:
      'A full-day bootcamp focused on mastering frontend web development with React, CSS, and JavaScript.',
    date: 'November 2024',
    location: 'Lab 102',
    image: 'path_to_frontend_bootcamp_image.jpg', // Add image path here
  },
];

const PastEvents = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Past Events</h2>
      <p className="text-center text-gray-400 mb-8">Details of successful past events with photos and experiences.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pastEventData.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-gray-400 mb-2">{event.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Location:</strong> {event.location}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;

