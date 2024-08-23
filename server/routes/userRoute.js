const express = require('express');
const { registerUser, authUser, logoutUser, getUsers } = require('../controller/userController');

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', authUser);
router.post('/logout', logoutUser);
router.get('/users', getUsers);

module.exports = router;
