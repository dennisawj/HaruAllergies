import React, { useState } from 'react';

export default function AllergicItemsList({ items }) {
  const [expandedSeverity, setExpandedSeverity] = useState({
    CRITICAL: false,  // Changed to false - all collapsed by default
    HIGH: false,
    MEDIUM: false,
    LOW: false
  });

  // Group items by severity
  const groupedBySeverity = items.reduce((acc, item) => {
    let severity;
    if (item.score >= 30) severity = 'CRITICAL';
    else if (item.score >= 24) severity = 'HIGH';
    else if (item.score >= 20) severity = 'MEDIUM';
    else severity = 'LOW';

    if (!acc[severity]) acc[severity] = [];
    acc[severity].push(item);
    return acc;
  }, {});

  const severityOrder = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
  
  const severityConfig = {
    CRITICAL: { text: 'text-red-300', range: '30+' },
    HIGH: { text: 'text-orange-300', range: '24-29' },
    MEDIUM: { text: 'text-yellow-300', range: '20-23' },
    LOW: { text: 'text-cyan-300', range: '<20' }
  };

  const toggleSeverity = (severity) => {
    setExpandedSeverity(prev => ({
      ...prev,
      [severity]: !prev[severity]
    }));
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {severityOrder.map(severity => {
        const itemsInSeverity = groupedBySeverity[severity];
        if (!itemsInSeverity || itemsInSeverity.length === 0) return null;

        const config = severityConfig[severity];
        const isExpanded = expandedSeverity[severity];

        return (
          <div key={severity} className="bg-slate-800/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-blue-300/20 shadow-2xl shadow-blue-900/50 overflow-hidden">
            {/* Header - Clickable */}
            <button
              onClick={() => toggleSeverity(severity)}
              className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-slate-700/30 transition-all"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-200 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <h2 className={`text-lg sm:text-xl font-bold ${config.text}`}>{severity}</h2>
                  <p className="text-blue-200/70 text-xs sm:text-sm mt-0.5">{itemsInSeverity.length} item{itemsInSeverity.length !== 1 ? 's' : ''}</p>
                </div>
              </div>
              <div className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-slate-700/40 border border-blue-300/20 text-blue-100 text-sm sm:text-base font-semibold">
                {config.range}
              </div>
            </button>

            {/* Collapsible Content */}
            {isExpanded && (
              <div className="px-3 sm:px-6 pb-3 sm:pb-6 pt-2 sm:pt-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {itemsInSeverity.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-300/10 hover:border-blue-300/30 transition-all hover:bg-slate-700/50"
                    >
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-blue-50 text-sm sm:text-base leading-tight">{item.name}</h3>
                          <p className="text-blue-300/70 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{item.category}</p>
                        </div>
                        <div className="text-right ml-2">
                          <div className={`text-xl sm:text-2xl font-bold ${config.text}`}>{item.score.toFixed(1)}</div>
                        </div>
                      </div>

                      <div className="relative w-full bg-slate-600/30 rounded-full h-1.5 sm:h-2 overflow-hidden border border-blue-300/10">
                        <div
                          className={`h-full transition-all duration-500 bg-gradient-to-r ${
                            severity === 'CRITICAL' ? 'from-red-500 to-pink-500' :
                            severity === 'HIGH' ? 'from-orange-400 to-amber-500' :
                            severity === 'MEDIUM' ? 'from-yellow-400 to-amber-400' :
                            'from-cyan-400 to-blue-400'
                          }`}
                          style={{ width: `${Math.min((item.score / 50) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
