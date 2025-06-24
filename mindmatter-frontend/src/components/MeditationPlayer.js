import React, { useRef, useState } from 'react';
import { PlayCircle, PauseCircle } from 'lucide-react';

const MeditationPlayer = ({ track }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">{track.title}</h3>
        <p className="text-sm text-gray-600">{track.duration}</p>
      </div>
      <div className="flex items-center gap-4">
        <audio ref={audioRef} src={track.file} />
        <button onClick={togglePlay} className="text-indigo-600 hover:text-indigo-800 text-3xl">
          {isPlaying ? <PauseCircle size={36} /> : <PlayCircle size={36} />}
        </button>
      </div>
    </div>
  );
};

export default MeditationPlayer;
