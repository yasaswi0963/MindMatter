const express = require('express');
const router = express.Router();
const TherapySession = require('../models/TherapySession');
const authMiddleware = require('../middleware/authMiddleware');

// Book a therapy session (POST)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { therapist, date, notes } = req.body;
    const session = new TherapySession({
      user: req.user.id,
      therapist,
      date,
      notes,
    });

    const saved = await session.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// List all sessions for logged-in user (GET)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const sessions = await TherapySession.find({ user: req.user.id }).sort({ date: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Update session (PUT)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { therapist, date, notes } = req.body;
    const session = await TherapySession.findOne({ _id: req.params.id, user: req.user.id });

    if (!session) return res.status(404).json({ message: 'Session not found' });

    session.therapist = therapist || session.therapist;
    session.date = date || session.date;
    session.notes = notes || session.notes;

    const updated = await session.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Delete session (DELETE)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deleted = await TherapySession.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deleted) return res.status(404).json({ message: 'Session not found' });
    res.json({ message: 'Session deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
