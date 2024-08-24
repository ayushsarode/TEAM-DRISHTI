import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Feature from './pages/Feature.jsx';
import Navbar from './components/Navbar.jsx';

import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';  // Import the Login component
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Playlist from './pages/Dashboard/Playlist.jsx';
import AIAssist from './pages/Dashboard/AIAssist.jsx';

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
        <Route path="/playlist" element={<Playlist />} />
        <Route path='/help' element={<AIAssist />} />
      </Routes>
  
    </div>
  );
}

export default App;
