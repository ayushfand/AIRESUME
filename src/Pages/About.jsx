import React from 'react';

const About = () => {
  return (
    <div className="bg-[#111] min-h-screen px-6 py-14 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-bold font-mono">Who We Are</h1>
          <button className="bg-[#1e1e1e] text-white px-4 py-2 rounded-md border border-gray-600 hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-300">
              At Axios, we believe in the transformative power of technology. Our mission is to inspire and empower
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Our Programs</h2>
            <p className="text-gray-300">
              From beginner-friendly workshops to advanced coding challenges, Axios offers a diverse range of educational
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Connect with Us</h2>
            <p className="text-gray-300">
              Stay up-to-date with the latest news, upcoming events, and exclusive opportunities by following
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md flex items-start gap-3">
            <span className="text-white text-2xl">▶️</span>
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Approach</h2>
              <p className="text-gray-300">
                Through hands-on workshops, mentorship programs, and collaborative projects
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md flex items-start gap-3">
            <span className="text-white text-2xl">💬</span>
            <div>
              <h2 className="text-xl font-semibold mb-2">Get Involved</h2>
              <p className="text-gray-300">
                Join our growing community of tech enthusiasts and take advantage of our extensive network of resources
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md flex items-start gap-3">
            <span className="text-white text-2xl">⬇️</span>
            <div>
              <h2 className="text-xl font-semibold mb-2">Join Now</h2>
              <p className="text-gray-300">
                Unlock your full potential and become a part of the Axios community. Explore our membership plans and discover the
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
