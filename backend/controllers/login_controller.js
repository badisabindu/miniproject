// backend/controllers/userController.js
const User = require('../models/user_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Registration
exports.registerUser = async (req, res) => {
  const { username, email, password, phno } = req.body;
  console.log(req.body);

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    

   const newUser = new User({ username, password, email, phno });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// // User Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ token:token,login: true,  message: 'Login successful' , id: user._id,user:user});
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Fetch User Details
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update User Information
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
