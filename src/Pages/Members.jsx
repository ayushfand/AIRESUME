import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/axious.jpeg';

// Sample data for club members in a hierarchical structure
const members = [
  {
    name: 'John Doe',
    role: 'President',
    bio: 'John is a visionary leader who has steered the club towards success with his remarkable ideas and leadership.',
    image: logo, // Replace with actual image path
    children: [
      {
        name: 'Jane Smith',
        role: 'Vice President',
        bio: 'Jane is a problem-solver and an excellent communicator, managing all internal club operations and projects.',
        image: logo, // Replace with actual image path
      },
      {
        name: 'Alex Lee',
        role: 'Tech Lead',
        bio: 'Alex is the brains behind all our tech innovations, leading the development of our digital tools and systems.',
        image: logo, // Replace with actual image path
      },
    ],
  },
];

const TreeNode = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
      <p className="text-sm text-gray-400 mb-2">{member.role}</p>
      <p className="text-center text-gray-300 mb-4">{member.bio}</p>
    </motion.div>
  );
};

const Members = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Club Members</h2>
      <p className="text-center text-gray-400 mb-8">Our club's leadership hierarchy and key members</p>

      <div className="flex flex-col items-center gap-12">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <TreeNode member={member} />
            <div className="flex justify-center gap-12 mt-8">
              {member.children?.map((child, childIndex) => (
                <TreeNode key={childIndex} member={child} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
