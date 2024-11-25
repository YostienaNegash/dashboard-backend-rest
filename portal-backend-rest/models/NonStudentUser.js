const mongoose = require('mongoose');

const NonStudentUserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('NonStudentUser', NonStudentUserSchema);
