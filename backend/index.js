// backend/server.js
require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user_routes');
const citiesRoutes = require('./routes/city_routes');
const uri = process.env.DBURI


const app = express();
const PORT = 5000; // Adjusted to match your port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect(uri).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api', userRoutes);
app.use('/cities',citiesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
