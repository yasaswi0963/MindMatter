const mongoose = require('mongoose');

const meditationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  audioUrl: {
    type: String,
    required: true,
  },
  duration: Number, // Duration in minutes
  category: {
    type: String,
    enum: ['stress relief', 'sleep', 'focus', 'anxiety', 'general'],
    default: 'general',
  },
  createdByAdmin: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Meditation', meditationSchema);

