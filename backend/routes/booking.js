const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/book', async (req, res) => {
  const { userEmail, date, time, persons } = req.body;
  const booking = new Booking({ userEmail, date, time, persons });
  await booking.save();
  res.send({ message: 'Booking confirmed' });
});

router.get('/all', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

module.exports = router;
