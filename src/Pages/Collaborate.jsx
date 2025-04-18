import React from 'react';
import { motion } from 'framer-motion';
import c1 from '../assets/contributors/gullu.jpg';
import c2 from '../assets/contributors/microsoft.jpg';
import c3 from '../assets/contributors/c-3.jpg';
import c4 from '../assets/contributors/c-4.jpg';
import c5 from '../assets/contributors/deepseek.jpg';

const Collaborate = () => {

  const collaborators = [
    { src: c1, alt: "Google", delay: 0.4 },
    { src: c2, alt: "Microsoft", delay: 0.5 },
    { src: c3, alt: "Paytm", delay: 0.6 },
    { src: c4, alt: "Netflix", delay: 0.4 },
    { src: c5, alt: "deepseek", delay: 0.5 }
  ];


  return (
    <div className="bg-black px-4 py-14 md:px-10">
      <motion.h2
        className="text-3xl font-semibold text-center text-white mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🤝 Collaborate with Us
      </motion.h2>
      <motion.p
        className="text-center text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Companies and institutions — partner with Axios for meaningful impact.
      </motion.p>

      <div className="p-6 bg-gray-900 rounded-lg shadow-xl max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-center text-white mb-6">Ready to Collaborate?</h3>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-600 p-3 w-full rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-600 p-3 w-full rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Message"
            className="border border-gray-600 p-3 w-full rounded-lg h-32 resize-none bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Past Collaborators Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center text-white mb-4">Our Past Collaborators</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          {collaborators.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-24 h-24 object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: logo.delay }}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collaborate;
