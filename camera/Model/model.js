const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
},{
    timestamps: true
  });

module.exports = mongoose.model('Camera', cameraSchema);