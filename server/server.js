const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// MongoDB connection setup
const dbURI = 'mongodb://localhost:27017';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Start your server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

