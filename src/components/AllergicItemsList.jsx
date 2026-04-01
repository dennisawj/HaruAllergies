import React from 'react';

export default function AllergicItemsList({ items }) {
  const groupedByCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const getScoreColor = (score) => {
    if (score > 100) return 'from-purple-600 to-purple-500';
    if (score > 50) return 'from-red-600 to-red-500';
    if (score > 30) return 'from-orange-600 to-orange-500';
    return 'from-yellow-600 to-yellow-500';
  };

  const getSeverityLabel = (score) => {
    if (score > 100) return '🔴 CRITICAL';
    if (score > 50) return '🔴 HIGH';
    if (score > 30) return '🟠 MODERATE';
    return '🟡 LOW';
  };

  return (
    <div className="space-y-8">
      {Object.entries(groupedByCategory).map(([category, categoryItems]) => (
        <div key={category} className="bg-slate-800 rounded-lg p-6 border border-slate-600 overflow-hidden">
          <h3 className="text-2xl font-bold text-white mb-2">{category}</h3>
          <p className="text-red-400 mb-6 font-semibold">
            {categoryItems.length} allergic item{categoryItems.length !== 1 ? 's' : ''}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg p-4 border-l-4 border-red-500 hover:border-red-400 transition-all hover:shadow-lg hover:shadow-red-900/30"
              >
                {/* Item Name */}
                <h4 className="font-bold text-lg text-white mb-2">{item.name}</h4>

                {/* Score Display */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-300">Score</span>
                    <span className={`text-lg font-bold bg-gradient-to-r ${getScoreColor(item.score)} bg-clip-text text-transparent`}>
                      {item.score.toFixed(2)}
                    </span>
                  </div>

                  {/* Score bar */}
                  <div className="w-full bg-slate-500 rounded-full h-2 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${getScoreColor(item.score)} h-full transition-all`}
                      style={{ width: `${Math.min((item.score / 200) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Severity Badge */}
                <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: item.score > 100 ? '#991b1b' : item.score > 50 ? '#dc2626' : item.score > 30 ? '#ea580c' : '#ca8a04',
                    color: 'white',
                  }}
                >
                  {getSeverityLabel(item.score)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
