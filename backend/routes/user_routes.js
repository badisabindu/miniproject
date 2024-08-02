// backend/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserDetails, updateUser, deleteUser } = require('../controllers/login_controller');

const router = express.Router();

// User Registration
router.post('/register', registerUser);

// User Login
router.post('/login', loginUser);

// Fetch User Details
router.get('/user/:id', getUserDetails);

// Update User Information
router.put('/user/:id', updateUser);

// Delete User
router.delete('/user/:id', deleteUser);

module.exports = router;
