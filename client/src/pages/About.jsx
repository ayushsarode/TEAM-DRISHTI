import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaUsers, FaBook, FaCogs, FaThumbsUp } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const aboutData = [
  { 
    title: 'Our Mission', 
    description: 'Empowering students through innovative tools and personalized learning experiences.', 
    icon: FaBullseye, 
    image: '/src/assets/images/about/mission.png' // Add image path
  },
  { 
    title: 'Our Vision', 
    description: 'To be the leading platform for students seeking to excel in their academic pursuits with the help of cutting-edge technology.', 
    icon: FaEye, 
    image: '/src/assets/images/about/vision.png' // Add image path
  },
  { 
    title: 'Our Team', 
    description: 'A group of passionate learners, developers, and designers working together to build a better learning platform.', 
    icon: FaUsers, 
    image: '/src/assets/images/about/team.png' // Add image path
  },
  { 
    title: 'Our Story', 
    description: 'From a small idea to a thriving educational platform, discover our journey and how we’ve grown.', 
    icon: FaBook, 
    image: '/src/assets/images/about/story.png' // Add image path
  },
  { 
    title: 'Our Technology', 
    description: 'Leveraging the latest in AI, machine learning, and web development to create an exceptional learning experience.', 
    icon: FaCogs, 
    image: '/src/assets/images/about/technology.png' // Add image path
  },
  { 
    title: 'Why Choose Us', 
    description: 'We’re dedicated to providing a personalized, engaging, and effective learning experience for every student.', 
    icon: FaThumbsUp, 
    image: '/src/assets/images/about/why_choose_us.png' // Add image path
  },
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
              className="p-8 bg-white shadow-xl rounded-lg hover:scale-105 transform transition duration-500"
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
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default About;