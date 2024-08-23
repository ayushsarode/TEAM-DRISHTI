import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Feature from './pages/Feature.jsx';
import Navbar from './components/Navbar.jsx';
import "./App.css";
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
