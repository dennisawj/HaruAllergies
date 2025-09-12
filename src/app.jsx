import React, { useState, useMemo } from "react";
import Header from "./components/Header.jsx";
import DashboardStats from "./components/DashboardStats.jsx";
import CategoryTables from "./components/CategoryTables.jsx";
import SafeItemsTables from "./components/SafeItemsTables.jsx";
import VitaminMineralPanel from "./components/VitaminMineralPanel.jsx";
import allergies, { getSafeItems, vitaminImbalances, testedItems } from "./data/allergies.js";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("allergies"); // allergies or safe

  const safeItems = getSafeItems();

  // Filter allergies based on search term, severity, and category
  const filteredAllergies = useMemo(() => {
    return allergies.filter(allergy => {
      const matchesSearch = allergy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           allergy.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           allergy.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSeverity = severityFilter === "All" || allergy.severity === severityFilter;
      const matchesCategory = categoryFilter === "All" || allergy.category === categoryFilter;
      
      return matchesSearch && matchesSeverity && matchesCategory;
    });
  }, [searchTerm, severityFilter, categoryFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Header */}
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <div className="max-w-7xl mx-auto p-6">
        {/* Dashboard Statistics */}
        <DashboardStats 
          allergies={allergies}
          filteredAllergies={filteredAllergies}
        />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-xl shadow-lg p-2 inline-flex">
            <button
              onClick={() => setActiveTab("allergies")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "allergies"
                  ? "bg-red-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-red-500 hover:bg-red-50"
              }`}
            >
              🚨 Items to Avoid ({allergies.length})
            </button>
            <button
              onClick={() => setActiveTab("safe")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "safe"
                  ? "bg-green-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-green-500 hover:bg-green-50"
              }`}
            >
              ✅ Safe Items ({Object.values(safeItems).reduce((total, category) => 
                total + Object.values(category).reduce((sum, items) => sum + items.length, 0), 0)})
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Content (2/3 width) */}
          <div className="xl:col-span-2">
            {activeTab === "allergies" ? (
              <div>
                <div className="mb-4 text-center">
                  <h2 className="text-2xl font-bold text-red-600 mb-2">⚠️ Allergic Items - AVOID THESE</h2>
                  <p className="text-gray-600">Items that cause allergic reactions in Haru</p>
                </div>
                <CategoryTables allergies={filteredAllergies} />
              </div>
            ) : (
              <div>
                <div className="mb-4 text-center">
                  <h2 className="text-2xl font-bold text-green-600 mb-2">✅ Safe Items - OKAY TO USE</h2>
                  <p className="text-gray-600">Items that have been tested and are safe for Haru</p>
                </div>
                <SafeItemsTables safeItems={safeItems} searchTerm={searchTerm} />
              </div>
            )}
          </div>

          {/* Sidebar (1/3 width) */}
          <div className="space-y-6">
            {/* Vitamin & Mineral Panel */}
            <VitaminMineralPanel vitaminData={vitaminImbalances} />
            
            {/* Quick Stats Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📊 Quick Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Tested Items:</span>
                  <span className="font-semibold text-blue-600">
                    {Object.values(testedItems).reduce((total, category) => {
                      if (typeof category === 'object' && !Array.isArray(category)) {
                        return total + Object.values(category).reduce((sum, items) => sum + (Array.isArray(items) ? items.length : 0), 0);
                      }
                      return total;
                    }, 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Allergic to:</span>
                  <span className="font-semibold text-red-600">{allergies.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Safe Items:</span>
                  <span className="font-semibold text-green-600">
                    {Object.values(safeItems).reduce((total, category) => 
                      total + Object.values(category).reduce((sum, items) => sum + items.length, 0), 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nutrients Needed:</span>
                  <span className="font-semibold text-blue-600">{Object.keys(vitaminImbalances).length}</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact Card */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-700 mb-2">🆘 Emergency Info</h3>
              <p className="text-sm text-red-600 mb-3">
                If Haru shows allergic reactions:
              </p>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Remove allergen immediately</li>
                <li>• Monitor for breathing difficulty</li>
                <li>• Contact veterinarian</li>
                <li>• Keep this list handy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Haru's Comprehensive Allergy Dashboard. 
              <span className="font-semibold text-red-600 mx-2">{allergies.length}</span> 
              known allergies managed.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Always consult with a veterinarian before making dietary or environmental changes.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
