// routes/meditationRoutes.js
const express = require('express');
const router = express.Router();
const Meditation = require('../models/Meditation');
const UserMeditationProgress = require('../models/UserMeditationProgress');

const authMiddleware = require('../middleware/authMiddleware');

// GET all meditations
router.get('/', async (req, res) => {
  const meditations = await Meditation.find();
  res.json(meditations);
});

// POST mark as completed
router.post('/complete/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  let progress = await UserMeditationProgress.findOne({ userId });
  if (!progress) progress = new UserMeditationProgress({ userId });

  if (!progress.completedMeditations.includes(id)) {
    progress.completedMeditations.push(id);
    await progress.save();
  }

  res.json({ message: 'Meditation marked as completed' });
});

// POST save meditation
router.post('/save/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  let progress = await UserMeditationProgress.findOne({ userId });
  if (!progress) progress = new UserMeditationProgress({ userId });

  if (!progress.savedMeditations.includes(id)) {
    progress.savedMeditations.push(id);
    await progress.save();
  }

  res.json({ message: 'Meditation saved' });
});

// GET progress
router.get('/progress', authMiddleware, async (req, res) => {
  const userId = req.user._id;
  const progress = await UserMeditationProgress.findOne({ userId })
    .populate('completedMeditations')
    .populate('savedMeditations');

  res.json(progress || {});
});

module.exports = router;
