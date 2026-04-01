import React, { useState, useMemo } from "react";
import { allergyData, getCategoryStats, getAllergicItems } from "./data/allergyData.js";
import ScoreVisualization from "./components/ScoreVisualization.jsx";
import CategoryBreakdown from "./components/CategoryBreakdown.jsx";
import AllergicItemsList from "./components/AllergicItemsList.jsx";
import Legend from "./components/Legend.jsx";

export default function App() {
  const [activeView, setActiveView] = useState("overview"); // overview, allergic, category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categoryStats = useMemo(() => getCategoryStats(), []);
  const allergicItems = useMemo(() => getAllergicItems(), []);
  const totalItems = allergyData.length;
  const totalAllergic = allergicItems.length;
  const allergy_percentage = ((totalAllergic / totalItems) * 100).toFixed(1);

  const filteredAllergicItems = useMemo(() => {
    return allergicItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-orange-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🐾</span>
            <div>
              <h1 className="text-4xl font-bold text-white">Haru's Allergy Profile</h1>
              <p className="text-red-100 text-lg">Comprehensive Immunological Assessment</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-red-100 text-sm font-semibold">Total Tested</p>
              <p className="text-white text-3xl font-bold">{totalItems}</p>
            </div>
            <div className="bg-red-500/30 rounded-lg p-4 backdrop-blur-sm border border-red-400">
              <p className="text-red-100 text-sm font-semibold">Allergic Items</p>
              <p className="text-white text-3xl font-bold">{totalAllergic}</p>
            </div>
            <div className="bg-green-500/30 rounded-lg p-4 backdrop-blur-sm border border-green-400">
              <p className="text-green-100 text-sm font-semibold">Safe Items</p>
              <p className="text-white text-3xl font-bold">{totalItems - totalAllergic}</p>
            </div>
            <div className="bg-blue-500/30 rounded-lg p-4 backdrop-blur-sm border border-blue-400">
              <p className="text-blue-100 text-sm font-semibold">Allergy Rate</p>
              <p className="text-white text-3xl font-bold">{allergy_percentage}%</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-slate-800/95 backdrop-blur-sm border-b border-slate-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-2 py-4 flex-wrap">
            <button
              onClick={() => setActiveView("overview")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeView === "overview"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
              }`}
            >
              📊 Overview
            </button>
            <button
              onClick={() => setActiveView("allergic")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeView === "allergic"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
              }`}
            >
              🚨 Allergic Items ({totalAllergic})
            </button>
            <button
              onClick={() => setActiveView("category")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeView === "category"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
              }`}
            >
              📂 By Category
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview */}
        {activeView === "overview" && (
          <div className="space-y-8">
            <Legend />
            <ScoreVisualization allergyData={allergyData} />
            <CategoryBreakdown stats={categoryStats} onSelectCategory={setSelectedCategory} />
          </div>
        )}

        {/* Allergic Items */}
        {activeView === "allergic" && (
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
              <input
                type="text"
                placeholder="🔍 Search allergic items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Results */}
            {filteredAllergicItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                <AllergicItemsList items={filteredAllergicItems} />
              </div>
            ) : (
              <div className="bg-slate-800 rounded-lg p-8 text-center border border-slate-600">
                <p className="text-slate-300 text-lg">No allergic items found matching your search</p>
              </div>
            )}
          </div>
        )}

        {/* Category View */}
        {activeView === "category" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(categoryStats).map(([category, stats]) => (
              <div
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveView("allergic");
                  setSearchTerm("");
                }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6 border border-slate-600 hover:border-slate-400 transition-all cursor-pointer hover:shadow-xl hover:shadow-slate-900/50 transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Total Tested:</span>
                    <span className="text-white font-semibold text-lg">{stats.total}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-300 flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                      Allergic:
                    </span>
                    <span className="text-red-400 font-semibold text-lg">{stats.allergic}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-300 flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                      Safe:
                    </span>
                    <span className="text-green-400 font-semibold text-lg">{stats.nonAllergic}</span>
                  </div>
                  <div className="mt-4 bg-slate-600/50 rounded-lg p-3">
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-red-500 to-red-600 h-full transition-all"
                        style={{ width: `${(stats.allergic / stats.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      {((stats.allergic / stats.total) * 100).toFixed(1)}% allergic
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            Allergy Classification: Score ≥ 24 or ≤ 26 (covers {`>`}25 ±1) = ALLERGIC
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Always consult with a veterinarian before making dietary or environmental changes.
          </p>
        </div>
      </footer>
    </div>
  );
}
