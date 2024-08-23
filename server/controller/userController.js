const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, 'studynest', { expiresIn: '1h' }); // Set your secret key
};

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public


exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("signup", {
        error: "User already exists with this email"
      });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    // Generate a token
    const token = await newUser.generateToken(); // Make sure to implement this method in your User model

    return res.cookie('token', token).redirect('/');
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.render("signup", {
      error: "An error occurred during registration"
    });
  }
}


// @desc    Authenticate user & get token
// @route   POST /api/auth/signin
// @access  Public
exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.json({
        success: true,
        token,
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getUsers = async (req, res) => {
    try {
      const users = await User.find().select('-password'); // Exclude passwords
      res.status(200).json({ success: true, users });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  };

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
exports.logoutUser = (req, res) => {
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};
