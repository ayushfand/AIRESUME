import React from 'react';
import { useParams } from 'react-router-dom';

const webinarData = {
    'AI Webinar': {
        title: 'AI Webinar',
        description: 'Join us for an insightful webinar on the future of AI, where experts discuss cutting-edge advancements and practical applications.',
        date: 'May 5, 2025',
        time: '3:00 PM - 5:00 PM',
        location: 'Online',
    },
    'Cloud Computing': {
        title: 'Cloud Computing',
        description: 'A deep dive into the power of cloud computing technologies and how they are transforming businesses and industries.',
        date: 'May 12, 2025',
        time: '10:00 AM - 12:00 PM',
        location: 'Online',
    },
    'Frontend Frameworks': {
        title: 'Frontend Frameworks',
        description: 'This session explores the latest frontend frameworks, including React, Vue, and Angular, and their use cases.',
        date: 'May 19, 2025',
        time: '2:00 PM - 4:00 PM',
        location: 'Online',
    },
};

const WebinarDetails = ({ user }) => {
    const { webinarName } = useParams();
    const webinar = webinarData[webinarName];

    if (!webinar) {
        return <div className="text-center text-white py-20">Webinar not found.</div>;
    }

    const register = () => {
        if (!user) {
            alert("Please log in to register for this webinar.");
            return;
        }
        alert(`Successfully registered for ${webinar.title}`);
        // Save registration details to localStorage or backend
    };

    return (
        <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
            <div className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full shadow-lg">
                <h2 className="text-3xl font-bold mb-4">{webinar.title}</h2>
                <p className="mb-4 text-gray-300">{webinar.description}</p>
                <p className="mb-2"><strong>Date:</strong> {webinar.date}</p>
                <p className="mb-2"><strong>Time:</strong> {webinar.time}</p>
                <p className="mb-6"><strong>Location:</strong> {webinar.location}</p>

                {user ? (
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold"
                        onClick={register}
                    >
                        Register Now
                    </button>
                ) : (
                    <p className="text-yellow-400">Please log in to register.</p>
                )}

                <button
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 mx-4 rounded font-semibold"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default WebinarDetails;
