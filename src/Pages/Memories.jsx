import React from 'react';
import { motion } from 'framer-motion';
import m1 from '../assets/memories/m1.jpg'
import m2 from '../assets/memories/m2.jpg'
import m3 from '../assets/memories/m3.jpg'
import m4 from '../assets/memories/m4.jpg'
import m5 from '../assets/memories/m5.jpg'
import m6 from '../assets/memories/m6.jpg'

const memories = [
  {
    src: m1,
    caption: 'Hackathon 2024',
  },
  {
    src: m2,
    caption: 'Bootcamp Bash',
  },
  {
    src: m3,
    caption: 'AI Webinar Vibes',
  },
  {
    src: m4,
    caption: 'Team Meetup',
  },
  {
    src: m5,
    caption: 'Code and Coffee',
  },
  {
    src: m6,
    caption: 'Final Day Celebration',
  },
];

const Memories = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📸 Our Club Memories
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={memory.src}
              alt={memory.caption}
              className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-lg font-semibold text-white">{memory.caption}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Memories;
