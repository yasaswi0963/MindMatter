import React, { useState, useEffect } from 'react';
import axios from '../services/api';

const Mood = () => {
  const [mood, setMood] = useState('');
  const [intensity, setIntensity] = useState(5);
  const [note, setNote] = useState('');
  const [trigger, setTrigger] = useState('');
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);

  const moods = ['Happy', 'Sad', 'Angry', 'Anxious', 'Calm', 'Frustrated', 'Overwhelmed', 'Loved', 'Confident', 'Numb'];
  const triggers = ['Work', 'Relationships', 'Health', 'Sleep', 'Exams', 'Finances', 'Weather', 'Other'];

  useEffect(() => {
    const fetchMoodHistory = async () => {
      try {
        const res = await axios.get('/api/mood');
        setHistory(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMoodHistory();
  }, []);

  const handleSubmit = async () => {
    if (!mood) {
      setMessage('Please select a mood');
      return;
    }

    try {
      await axios.post('/api/mood', { mood, intensity, note, trigger });
      setMessage('✅ Mood logged!');
      setMood('');
      setIntensity(5);
      setNote('');
      setTrigger('');
    } catch (err) {
      setMessage('❌ Error logging mood');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">Mood Tracker</h1>

      <div className="bg-white shadow p-6 rounded-xl mb-8">
        <label className="block font-medium mb-2">Select your mood</label>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4"
        >
          <option value="">-- Choose a mood --</option>
          {moods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <label className="block font-medium mb-2">Mood intensity: {intensity}/10</label>
        <input
          type="range"
          min="1"
          max="10"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          className="w-full mb-4"
        />

        <label className="block font-medium mb-2">Mood Trigger</label>
        <select
          value={trigger}
          onChange={(e) => setTrigger(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4"
        >
          <option value="">-- What caused this mood? --</option>
          {triggers.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label className="block font-medium mb-2">Note (optional)</label>
        <textarea
          rows="3"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4"
          placeholder="Jot down your thoughts..."
        ></textarea>

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Submit
        </button>

        {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
      </div>

      <div className="bg-gray-100 p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-indigo-700">Mood History</h2>
        {history.length === 0 ? (
          <p className="text-gray-500">No mood logs yet.</p>
        ) : (
          <ul className="space-y-3">
            {history.map((entry) => (
              <li key={entry._id} className="bg-white p-4 shadow rounded">
                <p><strong>Mood:</strong> {entry.mood} ({entry.intensity}/10)</p>
                {entry.trigger && <p><strong>Trigger:</strong> {entry.trigger}</p>}
                {entry.note && <p><strong>Note:</strong> {entry.note}</p>}
                <p className="text-sm text-gray-500">{new Date(entry.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Mood;
