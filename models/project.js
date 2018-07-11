const mongoose = require('mongoose');

const projectSchema = new mongoose.schema({
  projectName: String,
  projectType: String,
  projectBrief: String,
  skillsRequired: String
});

module.exports = mongoose.model('Project', projectSchema);
