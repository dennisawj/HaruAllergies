import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiAlertTriangle, FiHeart, FiVolume2, FiVolumeX } from 'react-icons/fi';

import { getCategories } from '../data/allergies.js';

export default function Header({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const categories = Object.keys(getCategories());
  const categoryOptions = ['All', ...categories];

  useEffect(() => {
    // Create audio element for background music
    const audioElement = new Audio('/HaruAllergies/Blue - SoundWorldz.mp3');
    audioElement.loop = true;
    audioElement.volume = 0.3; // Gentle volume
    setAudio(audioElement);

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8 relative z-10">
        {/* Title Section with Haru's Photo */}
        <div className="text-center mb-6 md:mb-8">
          {/* Mobile Layout: Vertical Stack */}
          <div className="flex flex-col items-center gap-4 mb-4 md:hidden">
            {/* Haru's Photo - Mobile */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white/30 shadow-xl bg-white/10 backdrop-blur-sm">
                <img 
                  src="/HaruAllergies/Haru.PNG" 
                  alt="Haru the adorable pet" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-2xl hidden">
                  🐾
                </div>
              </div>
              {/* Cute floating hearts - smaller on mobile */}
              <div className="absolute -top-1 -right-1 text-pink-300 animate-bounce text-sm">💕</div>
              <div className="absolute -bottom-0 -left-1 text-red-300 animate-pulse text-sm">❤️</div>
            </div>

            {/* Title - Mobile */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Haru's Allergy Report
              </h1>
              <div className="flex items-center justify-center gap-1 mt-1">
                <FiHeart className="w-4 h-4 text-pink-200" />
                <p className="text-sm text-white/90">PAX Complete Test Results</p>
                <FiHeart className="w-4 h-4 text-pink-200" />
              </div>
              <p className="text-xs text-white/70 mt-1 italic">
                "Score-Based Allergy Classification" 🐾
              </p>
            </div>

            {/* Music Control - Mobile */}
            <button
              onClick={toggleMusic}
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-200 backdrop-blur-sm border border-white/20"
              title={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? (
                <FiVolume2 className="w-5 h-5 text-white" />
              ) : (
                <FiVolumeX className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* Desktop Layout: Horizontal */}
          <div className="hidden md:flex items-center justify-center gap-6 mb-6">
            {/* Haru's Photo - Desktop */}
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm">
                <img 
                  src="/HaruAllergies/Haru.PNG" 
                  alt="Haru the adorable pet" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-4xl hidden">
                  🐾
                </div>
              </div>
              {/* Cute floating hearts */}
              <div className="absolute -top-2 -right-2 text-pink-300 animate-bounce">💕</div>
              <div className="absolute -bottom-1 -left-2 text-red-300 animate-pulse">❤️</div>
            </div>

            {/* Title and Subtitle - Desktop */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Haru's Allergy Report
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <FiHeart className="w-5 h-5 text-pink-200" />
                <p className="text-lg text-white/90">PAX Complete Test Results</p>
                <FiHeart className="w-5 h-5 text-pink-200" />
              </div>
              <p className="text-sm text-white/70 mt-2 italic">
                "Score-Based Allergen Classification" 🐾
              </p>
            </div>

            {/* Music Control - Desktop */}
            <div>
              <button
                onClick={toggleMusic}
                className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-200 backdrop-blur-sm border border-white/20"
                title={isPlaying ? "Pause relaxing music" : "Play relaxing music"}
              >
                {isPlaying ? (
                  <FiVolume2 className="w-6 h-6 text-white" />
                ) : (
                  <FiVolumeX className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 items-center justify-center">
          {/* Enhanced Search Bar */}
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search allergies, safe foods, or environmental items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 md:pl-12 md:pr-6 md:py-4 text-base md:text-lg border border-white/20 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-4 focus:ring-white/30 focus:border-white/50 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-row gap-3 md:gap-4 w-full md:w-auto justify-center">
            {/* Status Filter */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-2 flex-1 md:flex-none">
              <FiFilter className="text-white/80 w-4 h-4 md:w-5 md:h-5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-transparent text-white border-none outline-none cursor-pointer text-xs md:text-sm font-medium w-full md:w-auto"
              >
                <option value="All" className="text-gray-800">All Items</option>
                <option value="Highly Allergic" className="text-gray-800">🚨 Highly Allergic</option>
                <option value="Allergic" className="text-gray-800">⚠️ Allergic</option>
                <option value="Safe" className="text-gray-800">✅ Safe</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-2 flex-1 md:flex-none">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-transparent text-white border-none outline-none cursor-pointer text-xs md:text-sm font-medium w-full md:w-auto"
              >
                {categoryOptions.map(category => (
                  <option key={category} value={category} className="text-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
