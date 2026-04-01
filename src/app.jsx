import React, { useState, useMemo } from "react";
import Header from "./components/Header.jsx";
import DashboardStats from "./components/DashboardStats.jsx";
import AllergenTables from "./components/AllergenTables.jsx";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All"); // All, Allergic, Highly, Safe
  const [categoryFilter, setCategoryFilter] = useState("All");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <div className="max-w-7xl mx-auto p-6">
        {/* Dashboard Statistics */}
        <DashboardStats />

        {/* Main Content */}
        <AllergenTables
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          categoryFilter={categoryFilter}
        />

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Haru's Allergy Report - PAX Complete Test
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Based on veterinary allergen testing. Always consult with your veterinarian.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
