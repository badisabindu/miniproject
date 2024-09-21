
// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
   unique: true 
},
phno:{
  type:String,
  required:true,
  unique:true
},
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
},
created_at: {
    type: Date,
    default: Date.now()
}
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

<<<<<<< HEAD
const user_model = mongoose.model("users", userSchema);
=======
const user_model = mongoose.model("user_model", userSchema);
>>>>>>> e82995ae0cc200d8cb1aca76c69ac044bcd040cd

module.exports = user_model;

