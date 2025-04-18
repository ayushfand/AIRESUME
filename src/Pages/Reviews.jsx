import React, { useEffect, useState } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import reviewImage from '../assets/axious.jpeg' // replace with your own image

const initialReviews = [
  {
    name: 'Aarav Sharma',
    username: '@aarav_dev',
    rating: 5,
    message:
      "Absolutely loved the AI Club's last event! Super insightful and well organized. The speakers were amazing and the Q&A session helped me a lot. 🚀🔥"
  },
  {
    name: 'Sanya Verma',
    username: '@sanyaaa',
    rating: 4,
    message:
      'Webinars are always top-notch and full of value. I learned so much about AI ethics and real-world applications. Kudos to the team! 💯'
  },
  {
    name: 'Ishaan Malik',
    username: '@ishaan_m',
    rating: 5,
    message:
      'The posters are stunning and the event atmosphere was electric! Everything was so well managed, and I even made some new friends. 🙌'
  },
  {
    name: 'Pooja Desai',
    username: '@pooja_dx',
    rating: 5,
    message:
      "I'm amazed by the community vibe here. Registered for 3 events already! It's more than just learning — it’s a full experience. 🌟"
  }
]

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5)

const averageRating = (
  initialReviews.reduce((sum, review) => sum + review.rating, 0) / initialReviews.length
).toFixed(1)

const renderStars = (rating) => {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  const empty = 5 - full - (half ? 1 : 0)

  return (
    <>
      {Array(full)
        .fill()
        .map((_, i) => (
          <FaStar key={`f-${i}`} className="text-yellow-400" />
        ))}
      {half && <FaStarHalfAlt className="text-yellow-400" />}
      {Array(empty)
        .fill()
        .map((_, i) => (
          <FaRegStar key={`e-${i}`} className="text-yellow-400" />
        ))}
    </>
  )
}

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews(shuffleArray(initialReviews))
  }, [])

  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-20 gap-12">
      
      {/* Left side: image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <img
          src={reviewImage}
          alt="Reviews"
          className="w-[260px] md:w-[350px] object-contain animate-pulse drop-shadow-lg"
        />
      </div>

      {/* Right side: content */}
      <div className="w-full md:w-2/3">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">What People Are Saying</h2>

        {/* Overall Rating */}
        <div className="flex flex-col items-center md:items-start mb-10">
          <p className="text-xl font-semibold">Overall Rating</p>
          <div className="flex items-center gap-2 mt-2">
            {renderStars(averageRating)}
            <span className="text-yellow-400 font-bold ml-2">{averageRating}/5</span>
          </div>
        </div>

        {/* Big Review Cards */}
        <div className="grid gap-6 max-h-[60vh] overflow-y-auto pr-2 scrollbar-hide">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-xl p-6 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h4 className="text-lg font-bold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.username}</p>
                </div>
                <div className="flex text-yellow-400">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
              </div>
              <p className="text-base leading-relaxed">“{review.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews
