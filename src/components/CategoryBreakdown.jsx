import React from 'react';

export default function CategoryBreakdown({ stats }) {
  const sortedCategories = Object.entries(stats).sort((a, b) => b[1].allergic - a[1].allergic);

  return (
    <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-300/20 shadow-2xl shadow-blue-900/50">
      <div className="mb-3 sm:mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-50 mb-1 sm:mb-2">Categories Overview</h2>
        <p className="text-blue-200 text-xs sm:text-sm">{sortedCategories.length} allergen categories tested</p>
      </div>

      <div className="space-y-2 max-h-[500px] sm:max-h-[600px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
        {sortedCategories.map(([category, categoryStats]) => {
          const allergicPercent = (categoryStats.allergic / categoryStats.total) * 100;
          const safePercent = (categoryStats.nonAllergic / categoryStats.total) * 100;
          
          return (
            <div
              key={category}
              className="bg-slate-700/30 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 border border-blue-300/10 hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <h3 className="text-xs sm:text-sm font-semibold text-blue-50 flex-1 mr-2">{category}</h3>
                <div className="flex gap-2 sm:gap-4 text-[10px] sm:text-xs">
                  <span className="text-blue-200">{categoryStats.total}</span>
                  <span className="text-red-300 font-bold">{categoryStats.allergic}</span>
                  <span className="text-cyan-400 font-semibold">{categoryStats.nonAllergic}</span>
                  <span className="text-blue-100 font-semibold min-w-[35px] sm:min-w-[45px] text-right">
                    {allergicPercent.toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-slate-600/30 rounded-full h-1 sm:h-1.5 overflow-hidden flex">
                {/* Allergic portion (red) */}
                <div
                  className="h-full transition-all duration-700 bg-gradient-to-r from-red-500 to-orange-400"
                  style={{ width: `${allergicPercent}%` }}
                ></div>
                {/* Safe portion (cyan/green) */}
                <div
                  className="h-full transition-all duration-700 bg-gradient-to-r from-cyan-400 to-emerald-400"
                  style={{ width: `${safePercent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Small legend */}
      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-blue-300/10 flex gap-3 sm:gap-6 text-[10px] sm:text-xs text-blue-300/60">
        <span>Total</span>
        <span className="text-red-300/60">Allergic</span>
        <span className="text-cyan-400/70">Safe</span>
        <span>Rate</span>
      </div>
    </div>
  );
}
