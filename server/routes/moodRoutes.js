const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST /api/mood
// @desc    Create a new mood entry
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { mood, description } = req.body;

    const newMood = new Mood({
      user: req.user.id,
      mood,
      description,
    });

    const savedMood = await newMood.save();
    res.status(201).json(savedMood);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/mood
// @desc    Get all moods for the logged-in user
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(moods);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;

