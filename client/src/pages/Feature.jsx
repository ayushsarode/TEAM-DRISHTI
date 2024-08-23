import React from 'react';
import Navbar from '../components/Navbar';

const Feature = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Key Features</h2>
        <p className="text-lg text-gray-600 mb-8">
          StudyNEst is packed with powerful features designed to enhance your learning experience. Here’s a look at what we offer:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Playlist Management Section */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Playlist Management</h3>
            <p className="text-gray-600">
              Create and manage custom playlists of educational videos tailored to your needs. Organize your study materials and prepare efficiently for exams or specific subjects.
            </p>
          </div>

          {/* Leaderboard and Competitions Section */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leaderboard & Competitions</h3>
            <p className="text-gray-600">
              Foster a community of motivated learners. Compete with peers, track progress, earn points, and see how you rank on the leaderboard for friendly competition.
            </p>
          </div>

          {/* JWT Authentication Section */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">JWT Authentication</h3>
            <p className="text-gray-600">
              Ensure your data is secure with JSON Web Token authentication. Protect your personal information during sign-ups and logins with our robust security measures.
            </p>
          </div>

          {/* AI-Powered Chatbot Section */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Chatbot</h3>
            <p className="text-gray-600">
              Receive stress-relief and motivational support through our AI chatbot. Enhance your engagement with real-time interaction and get the help you need whenever you need it.
            </p>
          </div>

          {/* Smart Note-Taking Section */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Smart Note-Taking</h3>
            <p className="text-gray-600">
              Take notes during video playback with timestamps for easy reference. Keep your study sessions organized and efficiently review important content.
            </p>
          </div>

          {/* Dynamic User Experience Section */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dynamic User Experience</h3>
            <p className="text-gray-600">
              Enjoy a responsive and seamless experience with a design crafted using React.js and Tailwind CSS. Our user-friendly interface ensures a pleasant learning journey across all devices.
            </p>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default Feature;