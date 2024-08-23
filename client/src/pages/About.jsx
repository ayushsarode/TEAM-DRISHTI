import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaListUl, FaStar, FaRobot } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const aboutData = [
  { title: 'Playlist Management', description: 'Create and manage custom playlists of educational videos tailored to your needs. Organize your study material efficiently and prepare better for exams or specific subjects.', icon: FaListUl },
  { title: 'Leaderboard & Competitions', description: 'Engage in friendly competition with peers. Track your progress, earn points, and see how you stack up on the leaderboard to stay motivated and focused.', icon: FaStar },
  { title: 'AI-Powered Chatbot', description: 'Get real-time support and motivation from our AI chatbot. Whether you need help with a question or a boost of encouragement, our chatbot is here to assist you.', icon: FaRobot },
  { title: 'Dynamic User Experience', description: 'Enjoy a seamless experience with a responsive design using React.js and Tailwind CSS. Our user-friendly interface ensures a pleasant learning journey across all devices.', icon: FaBrain },
];

const About = () => {
  return (
    <>
    <Navbar />
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About StudyNest</h2>
        <p className="text-gray-700 mb-16 max-w-2xl mx-auto">
          <span className="text-purple-600 font-semibold">StudyNest</span> is a comprehensive AI-driven educational platform designed to enhance student learning through personalized experiences, gamification, and advanced technological integration. Our mission is to transform the way students engage with their education, making learning more effective and enjoyable.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: { opacity: 0 },
          }}
        >
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl rounded-lg hover:scale-105 transform transition duration-500"
              whileHover={{ scale: 1.1 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
            >
              <div className="text-3xl text-indigo-600 mb-4">
                <item.icon />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className=" text-white">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default About;