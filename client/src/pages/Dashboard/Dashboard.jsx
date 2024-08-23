import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

// Function to handle logout
const handleLogout = () => {
  localStorage.removeItem('token'); // Remove token or authentication info
  navigate('/'); // Redirect to login page
};
  return (
    <div>
      Dashboard
      <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none"
        >
          Logout
        </button>
    </div>
  )
}

export default Dashboard
