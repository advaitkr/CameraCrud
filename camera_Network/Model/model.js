const mongoose = require('mongoose');

const cameraNetworkSchema = new mongoose.Schema({
    name: String,
    description: String,
    camera_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Camera'
    }
  },{
    timestamps: true
  });

  module.exports = mongoose.model('CameraNetwork', cameraNetworkSchema);
