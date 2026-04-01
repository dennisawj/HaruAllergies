import React, { useState, useMemo } from "react";
import { allergyData, getCategoryStats, getAllergicItems } from "./data/allergyData.js";
import ScoreVisualization from "./components/ScoreVisualization.jsx";
import CategoryBreakdown from "./components/CategoryBreakdown.jsx";
import AllergicItemsList from "./components/AllergicItemsList.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import Snowfall from "./components/Snowfall.jsx";

export default function App() {
  const [activeView, setActiveView] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const categoryStats = useMemo(() => getCategoryStats(), []);
  const allergicItems = useMemo(() => getAllergicItems(), []);
  const totalItems = allergyData.length;
  const totalAllergic = allergicItems.length;
  const allergy_percentage = ((totalAllergic / totalItems) * 100).toFixed(1);

  const filteredItems = useMemo(() => {
    return allergyData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allergyData]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-x-hidden">
      {/* Subtle night gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20" style={{ zIndex: 0 }}></div>

      {/* Canvas-based Snowfall - Should be very visible now! */}
      <Snowfall />

      <MusicPlayer />

      {/* Hero Section */}
      <div className="relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 items-start">
            {/* Haru's Portrait Card */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-300/20 shadow-2xl shadow-blue-900/50">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 shadow-lg ring-2 ring-blue-300/20">
                  <img
                    src="/Haru.jpg"
                    alt="Haru"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-3 sm:space-y-4">
                  <h1 className="text-2xl sm:text-3xl font-bold text-blue-50">Haru</h1>
                  <p className="text-sm sm:text-base text-blue-200">Health Profile & Allergy Assessment</p>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4">
                    <div className="bg-slate-700/30 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-blue-300/20">
                      <div className="text-xl sm:text-2xl font-bold text-blue-50">{totalItems}</div>
                      <div className="text-[10px] sm:text-xs text-blue-200 mt-0.5 sm:mt-1">Tested</div>
                    </div>
                    <div className="bg-red-900/30 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-red-400/30">
                      <div className="text-xl sm:text-2xl font-bold text-red-200">{totalAllergic}</div>
                      <div className="text-[10px] sm:text-xs text-red-200 mt-0.5 sm:mt-1">Allergic</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-blue-300/20">
                      <div className="text-xl sm:text-2xl font-bold text-blue-50">{allergy_percentage}%</div>
                      <div className="text-[10px] sm:text-xs text-blue-200 mt-0.5 sm:mt-1">Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Navigation Tabs */}
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border border-blue-300/20 flex gap-1 sm:gap-2">
                <button
                  onClick={() => setActiveView("overview")}
                  className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all ${
                    activeView === "overview"
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                      : "text-blue-100 hover:bg-slate-700/50"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveView("allergic")}
                  className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all ${
                    activeView === "allergic"
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                      : "text-blue-100 hover:bg-slate-700/50"
                  }`}
                >
                  <span className="hidden sm:inline">All Items ({totalItems})</span>
                  <span className="sm:hidden">Items ({totalItems})</span>
                </button>
                <button
                  onClick={() => setActiveView("category")}
                  className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all ${
                    activeView === "category"
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                      : "text-blue-100 hover:bg-slate-700/50"
                  }`}
                >
                  Categories
                </button>
              </div>

              {/* Content */}
              <div className="min-h-[40vh] sm:min-h-[60vh]">
                {activeView === "overview" && (
                  <ScoreVisualization allergyData={allergyData} />
                )}

                {activeView === "allergic" && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-300/20">
                      <input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-slate-700/30 border border-blue-300/20 rounded-lg sm:rounded-xl text-blue-50 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>

                    <div className="mt-6 sm:mt-8">
                      {filteredItems.length > 0 ? (
                        <AllergicItemsList items={filteredItems} />
                      ) : (
                        <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center border border-blue-300/20">
                          <p className="text-blue-200 text-sm sm:text-base">No items found</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeView === "category" && (
                  <CategoryBreakdown stats={categoryStats} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-blue-300/10 bg-slate-900/40 backdrop-blur-sm mt-8 sm:mt-12 py-6 sm:py-8" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-200 text-xs sm:text-sm">
            Comprehensive Allergy Assessment — {totalAllergic} of {totalItems} items identified as allergenic
          </p>
          <p className="text-blue-300/60 text-[10px] sm:text-xs mt-1 sm:mt-2">
            Always consult with a veterinarian before making dietary or environmental changes.
          </p>
        </div>
      </footer>
    </div>
  );
}
