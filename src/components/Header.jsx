import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiAlertTriangle, FiHeart, FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function Header({ searchTerm, setSearchTerm, severityFilter, setSeverityFilter, categoryFilter, setCategoryFilter }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const categories = [
    'All Categories',
    'Environment', 
    'Protein', 
    'Fruits', 
    'Vegetables', 
    'Fish', 
    'Seafood',
    'Nuts & Seeds',
    'Grains & Others',
    'Herbs & Spices'
  ];

  useEffect(() => {
    // Create audio element for background music
    const audioElement = new Audio('/src/assets/Blue - SoundWorldz.mp3');
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
      
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Title Section with Haru's Photo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-6 mb-6">
            {/* Haru's Photo */}
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm">
                <img 
                  src="/src/assets/Haru.PNG" 
                  alt="Haru the adorable pet" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
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

            {/* Title and Subtitle */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Haru's Allergy Dashboard
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <FiHeart className="w-5 h-5 text-pink-200" />
                <p className="text-lg text-white/90">Comprehensive Pet Health Management System</p>
                <FiHeart className="w-5 h-5 text-pink-200" />
              </div>
              <p className="text-sm text-white/70 mt-2 italic">
                "Keeping our precious Haru safe and healthy" 🐾
              </p>
            </div>

            {/* Music Control */}
            <div className="hidden md:block">
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
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          {/* Enhanced Search Bar */}
          <div className="relative flex-1 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for allergies, safe foods, or environmental items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-6 py-4 text-lg border border-white/20 rounded-2xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-4 focus:ring-white/30 focus:border-white/50 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Severity Filter */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
              <FiFilter className="text-white/80 w-5 h-5" />
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="bg-transparent text-white border-none outline-none cursor-pointer text-sm font-medium"
              >
                <option value="All" className="text-gray-800">All Severities</option>
                <option value="High" className="text-gray-800">High Sensitivity</option>
                <option value="Moderate" className="text-gray-800">Moderate Sensitivity</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-transparent text-white border-none outline-none cursor-pointer text-sm font-medium"
              >
                {categories.map(category => (
                  <option key={category} value={category === 'All Categories' ? 'All' : category} className="text-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Music Control */}
            <div className="md:hidden">
              <button
                onClick={toggleMusic}
                className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 backdrop-blur-sm border border-white/20"
                title={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? (
                  <FiVolume2 className="w-5 h-5 text-white" />
                ) : (
                  <FiVolumeX className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
