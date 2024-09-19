// backend/routes/userRoutes.js
const express = require('express');
const { getCities,getCityByName } = require('../controllers/city_controller');

const router = express.Router();

// User Registration
router.get('/',getCities)
router.get('/:city',getCityByName)

module.exports = router;
