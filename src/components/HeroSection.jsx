import React from 'react';

export default function HeroSection({ totalItems, totalAllergic, allergy_percentage }) {
  return (
    <div className="bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-5xl font-light text-stone-900 tracking-tight">
                Haru's Health
              </h1>
              <h2 className="text-4xl font-semibold text-stone-900">
                Allergy Profile
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                Comprehensive immunological assessment identifying allergenic substances with precision score analysis
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="border-l-2 border-stone-300 pl-4">
                <p className="text-stone-500 text-xs font-medium uppercase tracking-wide mb-1">Total Tested</p>
                <p className="text-3xl font-semibold text-stone-900">{totalItems}</p>
              </div>
              <div className="border-l-2 border-red-300 pl-4">
                <p className="text-stone-500 text-xs font-medium uppercase tracking-wide mb-1">Allergic</p>
                <p className="text-3xl font-semibold text-red-700">{totalAllergic}</p>
              </div>
              <div className="border-l-2 border-stone-300 pl-4">
                <p className="text-stone-500 text-xs font-medium uppercase tracking-wide mb-1">Rate</p>
                <p className="text-3xl font-semibold text-stone-900">{allergy_percentage}%</p>
              </div>
            </div>
          </div>

          {/* Right: Haru's Picture */}
          <div className="relative">
            <div className="bg-stone-100 rounded-lg overflow-hidden">
              <img
                src="/Haru.jpg"
                alt="Haru"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
