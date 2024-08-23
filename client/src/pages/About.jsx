import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About StudyNEst</h2>
        <p className="text-lg text-gray-600 mb-8">
          <span className="font-semibold text-indigo-600">StudyNest</span> is a comprehensive AI-driven educational platform designed to enhance student learning through personalized experiences, gamification, and advanced technological integration. Our mission is to transform the way students engage with their education, making learning more effective and enjoyable.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Playlist Management Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Playlist Management</h3>
            <p className="text-gray-600">
              Create and manage custom playlists of educational videos tailored to your needs. Organize your study material efficiently and prepare better for exams or specific subjects.
            </p>
          </div>

          {/* Leaderboard and Competitions Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leaderboard & Competitions</h3>
            <p className="text-gray-600">
              Engage in friendly competition with peers. Track your progress, earn points, and see how you stack up on the leaderboard to stay motivated and focused.
            </p>
          </div>

          {/* AI-Powered Chatbot Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Chatbot</h3>
            <p className="text-gray-600">
              Get real-time support and motivation from our AI chatbot. Whether you need help with a question or a boost of encouragement, our chatbot is here to assist you.
            </p>
          </div>

          {/* Smart Note-Taking Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Smart Note-Taking</h3>
            <p className="text-gray-600">
              Take notes during video playback with timestamps for easy reference. Ensure you never miss important information and keep your study sessions organized.
            </p>
          </div>

          {/* Dynamic User Experience Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dynamic User Experience</h3>
            <p className="text-gray-600">
              Enjoy a seamless experience with a responsive design using React.js and Tailwind CSS. Our user-friendly interface ensures a pleasant learning experience across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;