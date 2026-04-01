import React from 'react';

export default function Legend() {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
      <h2 className="text-2xl font-bold text-white mb-6">📚 Understanding the Classification</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Allergic */}
        <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-lg p-4 border border-red-500/50">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🚨</span>
            <h3 className="text-lg font-bold text-red-300">ALLERGIC</h3>
          </div>
          <p className="text-slate-200 text-sm mb-3">Score ≥ 24 or ≤ 26</p>
          <p className="text-slate-300 text-xs leading-relaxed">
            Items that Haru has tested positive for in the immunological assessment. These items should be avoided.
          </p>
        </div>

        {/* Safe */}
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-lg p-4 border border-green-500/50">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">✅</span>
            <h3 className="text-lg font-bold text-green-300">SAFE</h3>
          </div>
          <p className="text-slate-200 text-sm mb-3">Score {`<`} 24 or {`>`} 26</p>
          <p className="text-slate-300 text-xs leading-relaxed">
            Items that tested negative and are generally safe for Haru to consume or be exposed to.
          </p>
        </div>

        {/* Score System */}
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg p-4 border border-blue-500/50">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📊</span>
            <h3 className="text-lg font-bold text-blue-300">SCORE SCALE</h3>
          </div>
          <p className="text-slate-200 text-sm mb-3">0 - 200</p>
          <p className="text-slate-300 text-xs leading-relaxed">
            Higher scores indicate stronger allergic response. Threshold at 25 ±1 determines classification.
          </p>
        </div>
      </div>
    </div>
  );
}
