const express = require('express');
const router = express.Router();
const Meditation = require('../models/Meditation');
const authMiddleware = require('../middleware/authMiddleware');

// GET all meditations
router.get('/', authMiddleware, async (req, res) => {
  try {
    const meditations = await Meditation.find().sort({ createdAt: -1 });
    res.json(meditations);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST a new meditation (for admin usage)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description, audioUrl, duration, category } = req.body;

    const meditation = new Meditation({
      title,
      description,
      audioUrl,
      duration,
      category,
    });

    const saved = await meditation.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});
// Update meditation (PUT)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { title, description, audioUrl, duration, category } = req.body;
    const meditation = await Meditation.findById(req.params.id);
    if (!meditation) return res.status(404).json({ message: 'Meditation not found' });

    meditation.title = title || meditation.title;
    meditation.description = description || meditation.description;
    meditation.audioUrl = audioUrl || meditation.audioUrl;
    meditation.duration = duration || meditation.duration;
    meditation.category = category || meditation.category;

    const updated = await meditation.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Delete meditation (DELETE)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deleted = await Meditation.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Meditation not found' });
    res.json({ message: 'Meditation deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


module.exports = router;
