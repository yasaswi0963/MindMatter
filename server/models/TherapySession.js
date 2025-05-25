// models/TherapyBooking.js
const mongoose = require('mongoose');

const therapyBookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sessionId: {
    type: Number, // or String if using custom IDs
    required: true,
  },
  therapist: String,
  title: String,
  time: String,
  bookedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('TherapyBooking', therapyBookingSchema);
