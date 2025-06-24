// models/UserMeditationProgress.js
const mongoose = require('mongoose');

const userMeditationProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  completedMeditations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meditation' }],
  savedMeditations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meditation' }],
}, { timestamps: true });

module.exports = mongoose.model('UserMeditationProgress', userMeditationProgressSchema);
