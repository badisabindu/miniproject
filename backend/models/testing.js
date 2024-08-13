
// backend/models/User.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userDB', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
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
    }
});



const city_model = mongoose.model("city_model", citySchema);

// module.exports = city_model;
// import city_model from "../models/city_model";
city_model.create({name:"Hyderabad",description:"asdf",imgUrl:"https://th.bing.com/th?id=OIP.7IrJMGZmyQZaalL-laIdNwHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"});
