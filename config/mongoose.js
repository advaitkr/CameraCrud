const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cameradb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB checked'))
  .catch(error => console.log(error));

// Start the server
