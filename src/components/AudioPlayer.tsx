'use client';

import { useState, useRef } from 'react';
import { IoPlay, IoPause, IoRepeat } from 'react-icons/io5';

interface Props {
  url: string;
}

export function AudioPlayer({ url }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const replay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <audio 
        ref={audioRef}
        src={url}
        onEnded={() => setIsPlaying(false)}
      />
      
      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center
                 hover:bg-primary/90 transition-colors"
      >
        {isPlaying ? <IoPause size={24} /> : <IoPlay size={24} />}
      </button>

      <button
        onClick={replay}
        className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300
                 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        <IoRepeat size={24} />
      </button>
    </div>
  );
} 