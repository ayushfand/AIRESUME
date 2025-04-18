import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const eventData = {
    'Tech Talk': {
        title: 'Tech Talk',
        description:
            'Join us for an engaging Tech Talk on the future of AI and software engineering. Experts from the industry will share insights and career tips.',
        date: 'May 5, 2025',
        time: '3:00 PM - 5:00 PM',
        location: 'Auditorium A',
        whoCanParticipate: 'Open to all students and tech enthusiasts.',
    },
    Hackathon: {
        title: 'Hackathon',
        description:
            'Participate in our 24-hour Hackathon and showcase your problem-solving skills. Prizes and swag await!',
        date: 'May 12, 2025',
        time: '9:00 AM - 9:00 AM (next day)',
        location: 'Main Hall',
        whoCanParticipate: 'Open to coders, designers, and problem-solvers of all levels.',
    },
    'Coding Bootcamp': {
        title: 'Coding Bootcamp',
        description:
            'A weekend bootcamp covering full-stack web development with hands-on projects. Perfect for beginners and intermediates.',
        date: 'May 19-20, 2025',
        time: '10:00 AM - 4:00 PM',
        location: 'Lab 204',
        whoCanParticipate: 'Beginners to intermediate developers looking to sharpen their skills.',
    },
};

const EventDetails = ({ user }) => {
    const { eventName } = useParams();
    const navigate = useNavigate();
    const event = eventData[eventName];

    const register = () => {
        const registered = JSON.parse(localStorage.getItem('registered') || '[]');
        if (!registered.includes(event.title)) {
            localStorage.setItem('registered', JSON.stringify([...registered, event.title]));
            alert(`Successfully registered for ${event.title}`);
        } else {
            alert(`You're already registered for ${event.title}`);
        }
    };

    if (!event) {
        return <div className="text-center text-white py-20">Event not found.</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                <p className="mb-4 text-gray-300">{event.description}</p>
                <p className="mb-2">
                    <strong>Date:</strong> {event.date}
                </p>
                <p className="mb-2">
                    <strong>Time:</strong> {event.time}
                </p>
                <p className="mb-6">
                    <strong>Location:</strong> {event.location}
                </p>

                <div className="mb-6">
                    <strong className="text-lg">Who Can Participate:</strong>
                    <p className="text-gray-400">{event.whoCanParticipate}</p>
                </div>

                <div className='flex gap-8 justify-evenly'>

                    {user ? (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold transition-all"
                            onClick={register}
                        >
                            Register Now
                        </motion.button>
                    ) : (
                        <p className="text-yellow-400 mt-4">Please login to register.</p>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold transition-all"
                        onClick={() => navigate(-1)}
                    >
                        ← Go Back
                    </motion.button>

                </div>
            </motion.div>
        </div>
    );
};

export default EventDetails;
