import React, { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(false); // Start unmuted
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Try auto-play on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume
    audio.volume = 0.3;
    audio.muted = false; // Explicitly unmute

    // Attempt to play
    const playAttempt = () => {
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            console.log('Music auto-playing');
          })
          .catch((error) => {
            console.log('Auto-play blocked by browser. Click to start music.');
            setIsPlaying(false);
          });
      }
    };

    // Try immediately
    playAttempt();

    // Also try on first user interaction anywhere on page
    const startOnInteraction = () => {
      if (!hasInteracted) {
        playAttempt();
        setHasInteracted(true);
      }
    };

    document.addEventListener('click', startOnInteraction, { once: true });
    document.addEventListener('keydown', startOnInteraction, { once: true });

    return () => {
      document.removeEventListener('click', startOnInteraction);
      document.removeEventListener('keydown', startOnInteraction);
    };
  }, []);

  // Handle mute state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    
    // If not playing yet, start it
    if (!isPlaying && audio) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log('Play failed:', err));
    }
    
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/HaruAllergies/øneheart x reidenshi - snowfall.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 bg-slate-800/60 backdrop-blur-xl rounded-full border border-blue-300/30 shadow-2xl shadow-blue-900/50 p-3 sm:p-4 hover:bg-slate-700/60 transition-all duration-300 hover:scale-110"
        title={isMuted ? "Unmute Music" : "Mute Music"}
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-blue-100"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {isMuted || !isPlaying ? (
            <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z" />
          ) : (
            <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z" />
          )}
        </svg>
      </button>
    </>
  );
}
