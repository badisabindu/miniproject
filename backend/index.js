// backend/server.js
<<<<<<< HEAD
require("dotenv").config()
=======
>>>>>>> e82995ae0cc200d8cb1aca76c69ac044bcd040cd
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user_routes');
const citiesRoutes = require('./routes/city_routes');
<<<<<<< HEAD
const uri = process.env.DBURI
=======

>>>>>>> e82995ae0cc200d8cb1aca76c69ac044bcd040cd


const app = express();
const PORT = 5000; // Adjusted to match your port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
<<<<<<< HEAD
mongoose.connect(uri).then(() => {
=======
mongoose.connect('mongodb://localhost:27017/userDB', {
}).then(() => {
>>>>>>> e82995ae0cc200d8cb1aca76c69ac044bcd040cd
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
