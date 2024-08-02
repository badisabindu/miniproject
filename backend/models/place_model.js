
// backend/models/User.js
const mongoose = require('mongoose');


const placeSchema = new mongoose.Schema({
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
    }

});



const place_model = mongoose.model("place_model", placeSchema);

module.exports = place_model;

