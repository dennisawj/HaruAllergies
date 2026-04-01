import React from 'react';

export default function CategoryBreakdown({ stats, onSelectCategory }) {
  const sortedCategories = Object.entries(stats).sort((a, b) => b[1].allergic - a[1].allergic);

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
      <h2 className="text-2xl font-bold text-white mb-6">📂 Allergy by Category</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedCategories.map(([category, stats]) => (
          <div
            key={category}
            className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg p-4 border border-slate-500 hover:border-orange-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-orange-900/50 transform hover:scale-102"
            onClick={() => onSelectCategory(category)}
          >
            <h3 className="font-bold text-white text-lg mb-3">{category}</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-300">Total:</span>
                <span className="font-semibold text-white">{stats.total}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-red-300">Allergic:</span>
                <span className="font-semibold text-red-400">{stats.allergic}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-green-300">Safe:</span>
                <span className="font-semibold text-green-400">{stats.nonAllergic}</span>
              </div>

              {/* Progress bar */}
              <div className="mt-3">
                <div className="w-full bg-slate-500 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-500 to-red-600 h-full transition-all"
                    style={{ width: `${(stats.allergic / stats.total) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {((stats.allergic / stats.total) * 100).toFixed(1)}% allergic
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
