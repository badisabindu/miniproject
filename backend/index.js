// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user_routes');

const app = express();
const PORT = 5000; // Adjusted to match your port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/userDB', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
