import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Feature from './pages/Feature.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';  // Import the Login component
import Dashboard from './pages/Dashboard/Dashboard.jsx';

const App = () => {
  return (
    <div>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />  // Add this line to define the route
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
<<<<<<< HEAD
      
=======

      
      <div>
        <Carousel />
      </div>

      <Footer />

>>>>>>> 623108a63051f1582dfab2ce6bfb70d08337e131
    </div>
  );
}

export default App;
