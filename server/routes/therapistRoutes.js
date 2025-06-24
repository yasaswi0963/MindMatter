const express = require('express');
const router = express.Router();
const Therapist = require('../models/Therapist');
const authMiddleware = require('../middleware/authMiddleware');

// Get all therapists
router.get('/', async (req, res) => {
  try {
    const therapists = await Therapist.find().sort({ createdAt: -1 });
    res.json(therapists);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Add therapist (admin usage)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, specialization, bio, avatarUrl, availableSlots } = req.body;

    const therapist = new Therapist({ name, specialization, bio, avatarUrl, availableSlots });
    const saved = await therapist.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
