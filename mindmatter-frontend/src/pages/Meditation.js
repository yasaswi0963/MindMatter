// src/pages/Meditation.js
import React from 'react';
import MeditationPlayer from '../components/MeditationPlayer';

const tracks = [
  {
    title: 'Relaxing Breath',
    duration: '3 min',
    file: '/relaxing-breath.mp3',
  },
  {
    title: 'Sleep Sounds',
    duration: '10 min',
    file: '/sleep-sounds.mp3',
  },
  {
    title: 'Morning Boost',
    duration: '5 min',
    file: '/morning-boost.mp3',
  },
  {
    title: 'Focus Session',
    duration: '7 min',
    file: '/focus-session.mp3',
  },
];

const Meditation = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-teal-500 to-indigo-500 text-transparent bg-clip-text">
        🧘 Guided Meditations
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {tracks.map((track, index) => (
          <MeditationPlayer key={index} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Meditation;
