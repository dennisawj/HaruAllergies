import React, { useState } from "react";
import allergies from "../data/allergies.js";

export default function AllergyTable() {
  const [search, setSearch] = useState("");

  const filtered = allergies.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Allergy List</h2>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Severity</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="hover:bg-gray-100">
                <td className="border p-2">{a.name}</td>
                <td className="border p-2">{a.category}</td>
                <td
                  className={`border p-2 font-semibold ${
                    a.severity === "High"
                      ? "text-red-600"
                      : a.severity === "Medium"
                      ? "text-yellow-500"
                      : "text-green-600"
                  }`}
                >
                  {a.severity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-3">No allergies found.</p>
        )}
      </div>
    </div>
  );
}
