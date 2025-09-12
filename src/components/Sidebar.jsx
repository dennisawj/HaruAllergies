import React from "react";
import { FaHome, FaList } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-indigo-700 text-white min-h-screen p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Haru Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-indigo-600 transition">
          <FaHome /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-indigo-600 transition">
          <FaList /> Allergies
        </a>
      </nav>
    </div>
  );
}
