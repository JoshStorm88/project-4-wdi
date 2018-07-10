const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  // change required to true when we add logging in
  username: { type: String, required: false, unique: true },
  email: { type: String, required: false, unique: true },
  password: { type: String, required: false }
});



module.exports = mongoose.model('User', userSchema);
