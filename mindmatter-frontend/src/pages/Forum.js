import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('stress');
  const [selectedCategory, setSelectedCategory] = useState('stress');
  const [message, setMessage] = useState('');

  const categoryOptions = [
    { key: 'stress', label: '🌪 Coping with Stress' },
    { key: 'wins', label: '🌈 Mental Health Wins' },
    { key: 'ask', label: '❓ Ask a Therapist' },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/api/forum?category=${selectedCategory}`);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, [selectedCategory]);

  const handlePostSubmit = async () => {
    if (!title || !content) {
      setMessage('Please enter title and content');
      return;
    }

    try {
      const res = await axios.post('/api/forum', {
        title,
        content,
        category,
      });
      setMessage('✅ Post created successfully');
      setTitle('');
      setContent('');
      setCategory('stress');
      setSelectedCategory(category); // auto switch to posted category
    } catch (err) {
      setMessage('❌ Failed to create post');
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-teal-500 to-indigo-500 text-transparent bg-clip-text">
        MindMatter Community Forum
      </h1>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categoryOptions.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === cat.key
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Create Post Form */}
      <div className="bg-white border shadow p-6 rounded-xl mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Create a New Post</h2>

        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mb-4"
          placeholder="Enter post title..."
        />

        <label className="block text-sm font-medium mb-1">Content</label>
        <textarea
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mb-4"
          placeholder="Share your thoughts..."
        ></textarea>

        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mb-4"
        >
          {categoryOptions.map((cat) => (
            <option key={cat.key} value={cat.key}>
              {cat.label}
            </option>
          ))}
        </select>

        <button
          onClick={handlePostSubmit}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md"
        >
          Post
        </button>

        {message && <p className="mt-3 text-sm text-green-600">{message}</p>}
      </div>

      {/* Forum Posts List */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts in this category yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="border rounded-lg p-4 shadow">
              <h3 className="text-lg font-bold text-indigo-700">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Forum;
