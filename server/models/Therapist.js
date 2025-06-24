const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: [String], // e.g., ["Anxiety", "Depression"]
  bio: String,
  avatarUrl: String,
  availableSlots: [String], // e.g., ["10:00 AM", "2:00 PM", "5:00 PM"]
}, { timestamps: true });

module.exports = mongoose.model('Therapist', therapistSchema);
