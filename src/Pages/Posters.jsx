import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'

// You can add more posters here
// import poster3 from '../assets/poster3.jpg'

const Posters = () => {
  const posters = [p1, p2 , p3]; // Add more as needed

  return (
    <div className="bg-black py-8">
      <div className="flex overflow-x-auto gap-6 px-6 scroll-smooth scrollbar-hide">
        {posters.map((poster, index) => (
          <img
            key={index}
            src={poster}
            alt={`Poster ${index + 1}`}
            className="h-64 w-auto rounded-lg border-2 border-white transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default Posters;

