const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// Create a limiter object
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 100 requests per windowMs
  message: 'Wait'
});

module.exports = limiter