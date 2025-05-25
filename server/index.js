const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const forumRoutes = require('./routes/forumRoutes');
const therapyRoutes = require('./routes/therapyRoutes'); // 👈 Your therapy route
const userRoutes = require('./routes/userRoutes'); // If you have user routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/therapy', therapyRoutes); // 👈 Attach therapy routes here

// Default route
app.get('/', (req, res) => {
  res.send('MindMatter API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
