// models/Meditation.js
const mongoose = require('mongoose');

const meditationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, enum: ['Anxiety', 'Sleep', 'Energy', 'Focus'], required: true },
  duration: { type: String, required: true },
  audio: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Meditation', meditationSchema);
