const mongoose = require('mongoose');

const forumPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['stress', 'wins', 'ask'],
      default: 'stress',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ForumPost = mongoose.model('ForumPost', forumPostSchema);

module.exports = ForumPost;
