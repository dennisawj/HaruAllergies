import React, { useMemo } from 'react';
import { allergenData } from '../data/allergies.js';

export default function AllergenTables({ searchTerm, statusFilter, categoryFilter }) {
  const filteredItems = useMemo(() => {
    return allergenData.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
      const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchTerm, statusFilter, categoryFilter]);

  // Group items by category
  const itemsByCategory = useMemo(() => {
    const grouped = {};
    filteredItems.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    // Sort by category name
    return Object.keys(grouped).sort().reduce((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {});
  }, [filteredItems]);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Highly Allergic':
        return <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">🚨 Highly Allergic</span>;
      case 'Allergic':
        return <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">⚠️ Allergic</span>;
      case 'Safe':
        return <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">✅ Safe</span>;
      default:
        return <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold">{status}</span>;
    }
  };

  const getScoreColor = (score) => {
    if (score > 100) return '#dc2626'; // red-600
    if (score > 30) return '#ea580c'; // orange-600
    if (score >= 24) return '#eab308'; // yellow-500
    return '#16a34a'; // green-600
  };

  return (
    <div>
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <p className="text-lg text-gray-600">No allergens found matching your filters.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(itemsByCategory).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold">{category}</h3>
                  <span className="px-3 py-1 bg-white/30 rounded-full text-sm font-semibold">
                    {items.length} item{items.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b-2 border-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Score</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, idx) => (
                      <tr
                        key={item.id}
                        className={`border-b ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition`}
                      >
                        <td className="px-4 py-4 text-sm md:text-base font-medium text-gray-800">
                          {item.name}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-gray-200 rounded-full h-2 max-w-xs">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${Math.min((item.score / 120) * 100, 100)}%`,
                                  backgroundColor: getScoreColor(item.score)
                                }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-gray-700 min-w-fit">
                              {item.score.toFixed(2)}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          {getStatusBadge(item.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Category Footer */}
              <div className="bg-gray-50 px-6 py-3 border-t text-sm text-gray-600">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span>{items.filter(i => i.status === 'Highly Allergic').length} Highly Allergic</span>
                  <span>{items.filter(i => i.status === 'Allergic').length} Allergic</span>
                  <span>{items.filter(i => i.status === 'Safe').length} Safe</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
