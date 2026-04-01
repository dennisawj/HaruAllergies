import React, { useMemo } from 'react';

export default function ScoreVisualization({ allergyData }) {
  const distribution = useMemo(() => {
    const bins = {
      "Below 20 (Low)": 0,
      "20-23 (Medium)": 0,
      "24-29 (High)": 0,
      "30+ (Critical)": 0,
    };

    allergyData.forEach(item => {
      if (item.score < 20) bins["Below 20 (Low)"]++;
      else if (item.score < 24) bins["20-23 (Medium)"]++;
      else if (item.score < 30) bins["24-29 (High)"]++;
      else bins["30+ (Critical)"]++;
    });

    const total = allergyData.length;
    return Object.entries(bins).map(([range, count]) => ({
      range,
      count,
      percentage: ((count / total) * 100).toFixed(1),
    }));
  }, [allergyData]);

  const maxCount = Math.max(...distribution.map(d => d.count));

  const getColorForRange = (range) => {
    if (range.includes("Critical")) return { gradient: 'from-red-600 to-red-500', text: 'text-red-500' };
    if (range.includes("High")) return { gradient: 'from-orange-500 to-red-500', text: 'text-orange-500' };
    if (range.includes("Medium")) return { gradient: 'from-yellow-500 to-orange-500', text: 'text-yellow-500' };
    return { gradient: 'from-cyan-400 to-blue-500', text: 'text-blue-400' };
  };

  return (
    <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-blue-300/20 shadow-2xl shadow-blue-900/50">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-50 mb-1 sm:mb-2">Score Distribution</h2>
        <p className="text-blue-200 text-xs sm:text-sm">Analysis of allergy severity across all tested items</p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {distribution.map((bin, idx) => {
          const colors = getColorForRange(bin.range);
          return (
            <div key={idx} className="group">
              <div className="flex justify-between items-end mb-1.5 sm:mb-2">
                <span className={`text-sm sm:text-base font-semibold ${colors.text}`}>
                  {bin.range}
                </span>
                <span className="text-blue-200 text-xs sm:text-sm">
                  {bin.count} items • {bin.percentage}%
                </span>
              </div>

              <div className="relative w-full bg-slate-700/30 rounded-full h-2 sm:h-3 overflow-hidden border border-blue-300/20">
                <div
                  className={`h-full transition-all duration-700 ease-out bg-gradient-to-r ${colors.gradient}`}
                  style={{ width: `${(bin.count / maxCount) * 100}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-blue-300/10 grid grid-cols-2 gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <p className="text-blue-400 text-[10px] sm:text-xs">Low (&lt;20)</p>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
          <p className="text-yellow-500 text-[10px] sm:text-xs">Medium (20-23)</p>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
          <p className="text-orange-500 text-[10px] sm:text-xs">High (24-29)</p>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-red-600 to-red-500"></div>
          <p className="text-red-500 text-[10px] sm:text-xs">Critical (30+)</p>
        </div>
      </div>
    </div>
  );
}
