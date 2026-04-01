import React, { useState, useRef, useEffect } from 'react';
import { FiTarget } from 'react-icons/fi';

export default function VitaminMineralPanel({ vitaminData }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef({});

  const getVitaminIcon = (name) => {
    if (name.includes('Vitamin')) return '💊';
    if (name === 'Calcium') return '🦴';
    if (name === 'Glutamine') return '🧬';
    if (name === 'Lecithin') return '🥚';
    if (name === 'Silica') return '🔬';
    return '💊';
  };

  const calculateTooltipPosition = (buttonElement) => {
    const rect = buttonElement.getBoundingClientRect();
    const tooltipWidth = 320;
    const tooltipHeight = 150;
    const margin = 10;

    let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    let top = rect.top - tooltipHeight - margin;

    // Check if tooltip goes off the right edge
    if (left + tooltipWidth > window.innerWidth - margin) {
      left = window.innerWidth - tooltipWidth - margin;
    }
    
    // Check if tooltip goes off the left edge
    if (left < margin) {
      left = margin;
    }

    // Check if tooltip goes off the top
    if (top < margin) {
      top = rect.bottom + margin; // Show below instead
    }

    return { top, left };
  };

  const handleMouseEnter = (nutrient, event) => {
    const position = calculateTooltipPosition(event.currentTarget);
    setTooltipPosition(position);
    setHoveredItem(nutrient);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 md:p-4">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-xl md:text-2xl">💊</span>
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-800">Vitamin & Mineral Imbalances</h3>
            <p className="text-xs md:text-sm text-gray-600">
              Nutrients that Haru needs
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-3 md:p-6 relative">
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {Object.entries(vitaminData).map(([nutrient, advice]) => (
            <div
              key={nutrient}
              className="relative"
              ref={el => buttonRefs.current[nutrient] = el}
              onMouseEnter={(e) => handleMouseEnter(nutrient, e)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-2 p-2 md:p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-150 cursor-pointer border border-blue-200 hover:border-blue-300">
                <span className="text-base md:text-lg flex-shrink-0">{getVitaminIcon(nutrient)}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-xs md:text-sm font-medium text-blue-800 block leading-tight">
                    {nutrient}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Smart Positioned Tooltip */}
        {hoveredItem && (
          <div 
            className="fixed z-50 bg-gray-900 text-white rounded-xl p-4 shadow-2xl max-w-80 pointer-events-none"
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl">{getVitaminIcon(hoveredItem)}</span>
              <h4 className="font-bold text-blue-300">{hoveredItem}</h4>
            </div>

            {/* Content */}
            <div className="flex items-start gap-2">
              <FiTarget className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-300 text-sm mb-1">Food Sources:</p>
                <p className="text-gray-200 text-xs leading-relaxed">
                  {vitaminData[hoveredItem]}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}