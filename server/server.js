

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// 🔄 Load environment variables
dotenv.config();

// 🔌 Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Route imports
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const moodRoutes = require('./routes/moodRoutes');
const therapyRoutes = require('./routes/therapyRoutes');
const forumRoutes = require('./routes/forumRoutes');
const meditationRoutes = require('./routes/meditationRoutes');

// ✅ Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/mood', moodRoutes);
app.use('/api/therapy', therapyRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/meditation', meditationRoutes);

app.get('/', (req, res) => {
  res.send('MindMatter API Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
