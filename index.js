// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// Middleware
app.use(cors());  // Enable cross-origin requests
app.use(helmet());  // Add security headers
app.use(express.json());  // Parse JSON requests

// Import and use the products route (which will now return books)
const productRouter = require('./routes/products');
app.use('/products', productRouter);  // Link "/products" to the productRouter

// Connect to MongoDB
mongoose.connect(process.env.DB_URL)
  .then(() => console.log('DB connected'))
  .catch((err) => console.error('Error connecting to DB:', err));

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
