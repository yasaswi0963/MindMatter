import React, { useState } from 'react';

const meditationData = [
  {
    id: 1,
    title: 'Relaxing Breath',
    category: 'Anxiety',
    duration: '5 min',
    audio: '/audio/relaxing-breath.mp3',
  },
  {
    id: 2,
    title: 'Sleep Sounds',
    category: 'Sleep',
    duration: '8 min',
    audio: '/audio/sleep-sounds.mp3',
  },
  {
    id: 3,
    title: 'Morning Boost',
    category: 'Energy',
    duration: '4 min',
    audio: '/audio/morning-boost.mp3',
  },
  {
    id: 4,
    title: 'Focus Session',
    category: 'Focus',
    duration: '6 min',
    audio: '/audio/focus-session.mp3',
  },
];

const Meditation = () => {
  const [completed, setCompleted] = useState([]);
  const [saved, setSaved] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);

  const handleComplete = (id) => {
    if (!completed.includes(id)) {
      setCompleted([...completed, id]);
    }
  };

  const handleSave = (id) => {
    if (!saved.includes(id)) {
      setSaved([...saved, id]);
    }
  };

  const handlePlay = (audioSrc, id) => {
    const audio = new Audio(audioSrc);
    setCurrentAudio(id);
    audio.play();

    audio.onended = () => {
      handleComplete(id);
    };
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
        🧘 Guided Meditations
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {meditationData.map((session) => (
          <div key={session.id} className="bg-white p-5 rounded-xl shadow-lg border">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">{session.title}</h2>
            <p className="text-sm text-gray-500 mb-1">Category: {session.category}</p>
            <p className="text-sm text-gray-500 mb-3">Duration: {session.duration}</p>

            <button
              onClick={() => handlePlay(session.audio, session.id)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded mb-3"
            >
              ▶️ Play
            </button>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => handleComplete(session.id)}
                className={`text-sm px-3 py-1 rounded ${
                  completed.includes(session.id)
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-200 hover:bg-green-300'
                }`}
              >
                ✅ {completed.includes(session.id) ? 'Completed' : 'Mark Completed'}
              </button>

              <button
                onClick={() => handleSave(session.id)}
                className={`text-sm px-3 py-1 rounded ${
                  saved.includes(session.id)
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-200 hover:bg-yellow-300'
                }`}
              >
                📌 {saved.includes(session.id) ? 'Saved' : 'Save for Later'}
              </button>
            </div>

            {completed.includes(session.id) && (
              <p className="text-green-600 text-xs mt-2">🎉 You completed this meditation!</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meditation;
