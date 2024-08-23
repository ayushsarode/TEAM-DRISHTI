import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar.jsx';
import "./App.css";
import Carousel from './Carousel';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
      <div>
        <h1>Image Carousel</h1>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
