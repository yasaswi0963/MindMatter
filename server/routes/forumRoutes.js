const express = require('express');
const router = express.Router();
const ForumPost = require('../models/ForumPost');
const authMiddleware = require('../middleware/authMiddleware');

// Create a forum post
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new ForumPost({
      title,
      content,
      createdBy: req.user.id,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get all posts by logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const posts = await ForumPost.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Update a forum post by id
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await ForumPost.findOne({ _id: req.params.id, createdBy: req.user.id });
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.title = title || post.title;
    post.content = content || post.content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Delete a forum post by id
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const post = await ForumPost.findOneAndDelete({ _id: req.params.id, createdBy: req.user.id });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
