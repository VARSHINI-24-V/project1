const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userEmail: String,
  date: String,
  time: String,
  persons: Number
});

module.exports = mongoose.model('Booking', bookingSchema);
