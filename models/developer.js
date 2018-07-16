const mongoose = require('mongoose');
const moment = require('moment');

const developerSchema = new mongoose.Schema({
  // add more keys/values if we think of anything else that's needed
  companyName: String,
  companySize: { type: String, enum: ['Small', 'Medium', 'Large', 'Unknown'] },
  founded: Date,
  description: String,
  image: String,
  skills: String,
  location: String,
  telNumber: String,
  email: String
});

developerSchema.path('founded')
  .get(function formatDate(dob) {
    return moment(dob).format('YYYY-MM-DD');
  });

developerSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Developer', developerSchema);
