import React, { useMemo } from 'react';

export default function ScoreVisualization({ allergyData }) {
  const distribution = useMemo(() => {
    const bins = {
      "0-10": 0,
      "10-15": 0,
      "15-20": 0,
      "20-25": 0,
      "25-30": 0,
      "30+": 0,
    };

    allergyData.forEach(item => {
      if (item.score < 10) bins["0-10"]++;
      else if (item.score < 15) bins["10-15"]++;
      else if (item.score < 20) bins["15-20"]++;
      else if (item.score < 25) bins["20-25"]++;
      else if (item.score < 30) bins["25-30"]++;
      else bins["30+"]++;
    });

    const total = allergyData.length;
    return Object.entries(bins).map(([range, count]) => ({
      range,
      count,
      percentage: ((count / total) * 100).toFixed(1),
    }));
  }, [allergyData]);

  const maxCount = Math.max(...distribution.map(d => d.count));

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
      <h2 className="text-2xl font-bold text-white mb-6">📈 Score Distribution</h2>

      <div className="space-y-6">
        {distribution.map((bin, idx) => {
          const isAllergicRange = parseFloat(bin.range.split('-')[0]) >= 24;
          return (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <span className={`font-semibold ${isAllergicRange ? 'text-red-400' : 'text-blue-400'}`}>
                  Score {bin.range}
                </span>
                <span className="text-slate-300">
                  {bin.count} items ({bin.percentage}%)
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    isAllergicRange
                      ? 'bg-gradient-to-r from-red-500 to-red-600'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`}
                  style={{ width: `${(bin.count / maxCount) * 100}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Threshold indicator */}
      <div className="mt-8 pt-6 border-t border-slate-600">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full bg-red-500"></span>
            <span className="text-red-400">Allergic Threshold ({`≥`}24 or {`≤`}26)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full bg-blue-500"></span>
            <span className="text-blue-400">Safe Threshold ({`<`}24 or {`>`}26)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
