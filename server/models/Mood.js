const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  mood: { type: String, required: true },
  intensity: { type: Number, default: 5 },
  note: { type: String },
  trigger: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mood', moodSchema);
