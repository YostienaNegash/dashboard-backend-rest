const mongoose = require('mongoose');

const CampusOrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('CampusOrganization', CampusOrganizationSchema);
