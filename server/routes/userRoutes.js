const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware'); // your auth middleware

// GET user profile (logged-in user)
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST create a new user (registration)
router.post('/', async (req, res) => {
  try {
    const { name, email, password, avatarUrl } = req.body;

    // Normally you’d hash password here (e.g., bcrypt)
    // and validate email uniqueness

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Email already registered' });

    const user = new User({ name, email, password, avatarUrl });
    const savedUser = await user.save();

    res.status(201).json({ id: savedUser._id, name: savedUser.name, email: savedUser.email });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

const bcrypt = require('bcrypt'); // Add this if not already imported

router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { name, avatarUrl, password } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (name) user.name = name;
    if (avatarUrl) user.avatarUrl = avatarUrl;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();
    res.json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      avatarUrl: updatedUser.avatarUrl
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


// DELETE user account (logged-in user)
router.delete('/profile', authMiddleware, async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.user.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
