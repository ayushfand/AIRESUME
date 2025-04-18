import React from 'react'
import Posters from './Posters'
import Reviews from './Reviews'
import Collaborate from './Collaborate'
import ContactUs from './ContactUs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Memories from './Memories'
import About from './About'

const Home = () => {
  return (
    <div className="flex flex-col gap-16 bg-black text-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-blue-900 to-black text-center py-20 px-6 md:px-24">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to <span className="text-blue-400">Axios</span> 🎉
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Explore, Engage, and Elevate with the best student-led events and collaborations.
        </motion.p>
        <Link to="/events">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-md"
          >
            Explore Events
          </motion.button>
        </Link>
      </section>

      <section className="px-4 md:px-10">
        <h2 className="text-3xl font-semibold text-center text-white mb-2">🏷 Our Motto:</h2>
        <p className="text-center text-gray-400 mb-8">
        At Axios, we're not just building skills — we're building a future. Discover our mission, programs, and community designed to inspire the next generation of tech leaders.
        </p>
        <About/>
      </section>

      {/* Posters Section */}
      <section className="px-4 md:px-10">
        <h2 className="text-3xl font-semibold text-center text-white mb-2">🎨 Posters & Visuals</h2>
        <p className="text-center text-gray-400 mb-8">
          A glimpse of our creative side through event visuals and announcements.
        </p>
        <Posters />
      </section>

      <section className="bg-gradient-to-b from-gray-900 to-black px-4 py-14 md:px-10">
        <h2 className="text-3xl font-semibold text-center text-white mb-2">🌟 Memories</h2>
        <p className="text-center text-gray-400 mb-8">
            
        </p>
        <Memories />
      </section>

      {/* Reviews Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black px-4 py-14 md:px-10">
        <h2 className="text-3xl font-semibold text-center text-white mb-2">🌟 Reviews</h2>
        <p className="text-center text-gray-400 mb-8">
          Hear what our attendees and partners have to say!
        </p>
        <Reviews />
      </section>

      {/* Contact Us Section */}
      <section className="px-4 md:px-10">
        <ContactUs />
      </section>

      {/* footer Section */}

      <Footer/>
    </div>
  )
}

export default Home
