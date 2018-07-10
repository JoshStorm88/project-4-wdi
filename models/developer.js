const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  // add more keys/values if we think of anything else that's needed
  companyName: String,
  companySize: String,
  description: String,
  image: String,
  skills: String,
  location: String
});

module.exports = mongoose.model('Developer', developerSchema);
