import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { FaBrain, FaListUl, FaShieldAlt, FaStar, FaRobot, FaFileAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const featureData = [
  { 
    title: 'Playlist Management', 
    description: 'Create and manage custom playlists of educational videos tailored to your needs.', 
    icon: FaListUl, 
    image: 'https://img.freepik.com/free-vector/happy-girl-wearing-headphones-enjoying-playlist-listening-music-mobile-phone-singing-songs_74855-14053.jpg?t=st=1724475276~exp=1724478876~hmac=a969d6450a32cffd0f21649c717590efc5fadde4f04e07ed7d60cf16523fd5c5&w=996' // Add image path
  },
  { 
    title: 'Leaderboard & Competitions', 
    description: 'Compete with peers, track progress, and see how you rank on the leaderboard.', 
    icon: FaStar, 
    image: 'https://t4.ftcdn.net/jpg/06/23/50/33/240_F_623503339_efAlQpwCX2nOe3vMF9HxfEPv0vzRZAia.jpg' // Add image path
  },
  { 
    title: 'JWT Authentication', 
    description: 'Ensure your data is secure with JSON Web Token authentication.', 
    icon: FaShieldAlt, 
    image: 'https://img.freepik.com/premium-vector/digital-illustration-man-demonstrating-online-authentication-large-tablet-display_941526-2750.jpg?ga=GA1.1.717805605.1724181790&semt=ais_hybrid' // Add image path
  },
  { 
    title: 'AI-Powered Chatbot', 
    description: 'Receive support through our AI chatbot with real-time interaction.', 
    icon: FaRobot, 
    image: 'https://img.freepik.com/free-vector/conversation-chat-bot-screen-phone-customer-tiny-man-talking-with-cute-robot-online-messenger-flat-vector-illustration-chatbot-ai-virtual-support-social-media-concept_74855-24047.jpg?ga=GA1.1.717805605.1724181790&semt=ais_hybrid' // Add image path
  },
  { 
    title: 'Smart Note-Taking', 
    description: 'Take notes during video playback with timestamps.', 
    icon: FaFileAlt, 
    image: 'https://img.freepik.com/free-vector/lovely-hand-drawn-planning-schedule-concept_23-2147956312.jpg?ga=GA1.1.717805605.1724181790&semt=ais_hybrid' // Add image path
  },
  { 
    title: 'Dynamic User Experience', 
    description: 'Enjoy a responsive and seamless experience crafted with React and Tailwind CSS.', 
    icon: FaBrain, 
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024127.jpg?ga=GA1.1.717805605.1724181790&semt=ais_hybrid' // Add image path
  },
];

const RotatingSphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01; // Adjust rotation speed here
    }
  });

  return (
    <Sphere args={[1.5, 32, 32]} ref={sphereRef} position={[0, 0, 0]}>
      <meshStandardMaterial color="#0077FF" />
    </Sphere>
  );
};

const Feature = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center ">
          <h2 className="text-4xl font-bold mb-12">Key Features</h2>
          <p className="text-gray-700 mb-16">
            StudyNest is packed with powerful features designed to enhance your learning experience.
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            {featureData.map((feature, index) => (
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
                  <feature.icon />
                </div>
                <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-bold mb-4 ">{feature.title}</h3>
                <p className=" text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="mt-16 ">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <RotatingSphere />
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Feature;
