// // backend/routes/userRoutes.js
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// // User Registration
// router.post('/signup', async (req, res) => {
//   const { username, password, email } = req.body;

//   try {
//     const userExists = await User.findOne({ username });
//     if (userExists) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     const newUser = new User({ username, password, email });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // User Login
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid username or password' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid username or password' });
//     }

//     const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

//     res.status(200).json({ token, message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Fetch User Details
// router.get('/user/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Update User Information
// router.put('/user/:id', async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     ).select('-password');

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json({ message: 'User updated successfully', updatedUser });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Delete User
// router.delete('/user/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = user_router;

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
