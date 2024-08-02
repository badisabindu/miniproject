
// backend/models/User.js
const mongoose = require('mongoose');
import place_model from './place_model';

const citySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    places: [place_model]
});



const city_model = mongoose.model("city_model", citySchema);

module.exports = city_model;

