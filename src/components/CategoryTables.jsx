import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiAlertTriangle, FiAlertCircle } from 'react-icons/fi';

export default function CategoryTables({ allergies }) {
  const [expandedCategories, setExpandedCategories] = useState({});
  
  // Group allergies by category
  const groupedAllergies = allergies.reduce((acc, allergy) => {
    if (!acc[allergy.category]) {
      acc[allergy.category] = [];
    }
    acc[allergy.category].push(allergy);
    return acc;
  }, {});

  // Sort each category by severity (High first) then by percentage
  Object.keys(groupedAllergies).forEach(category => {
    groupedAllergies[category].sort((a, b) => {
      if (a.severity !== b.severity) {
        return a.severity === 'High' ? -1 : 1;
      }
      return b.percentage - a.percentage;
    });
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getSeverityIcon = (severity) => {
    return severity === 'High' ? 
      <FiAlertTriangle className="w-4 h-4 text-red-500" /> : 
      <FiAlertCircle className="w-4 h-4 text-yellow-500" />;
  };

  const getSeverityBadge = (severity, percentage) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1";
    if (severity === 'High') {
      return (
        <span className={`${baseClasses} bg-red-100 text-red-800`}>
          <FiAlertTriangle className="w-3 h-3" />
          High ({percentage}%)
        </span>
      );
    } else {
      return (
        <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
          <FiAlertCircle className="w-3 h-3" />
          Moderate ({percentage}%)
        </span>
      );
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Environment': '🌿',
      'Protein': '🥩',
      'Fruits': '🍎',
      'Vegetables': '🥬',
      'Fish': '🐟',
      'Seafood': '🦐',
      'Nuts & Seeds': '🥜',
      'Grains & Others': '🌾',
      'Herbs & Spices': '🌿',
      'Vitamins & Minerals': '💊'
    };
    return icons[category] || '📋';
  };

  return (
    <div className="space-y-6">
      {Object.entries(groupedAllergies).map(([category, categoryAllergies]) => {
        const isExpanded = expandedCategories[category];
        const highCount = categoryAllergies.filter(a => a.severity === 'High').length;
        const moderateCount = categoryAllergies.filter(a => a.severity === 'Moderate').length;
        
        return (
          <div key={category} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Category Header */}
            <div 
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 cursor-pointer hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
              onClick={() => toggleCategory(category)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getCategoryIcon(category)}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{category}</h3>
                    <p className="text-sm text-gray-600">
                      {categoryAllergies.length} items • 
                      {highCount > 0 && ` ${highCount} high severity`}
                      {highCount > 0 && moderateCount > 0 && ' • '}
                      {moderateCount > 0 && ` ${moderateCount} moderate severity`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {highCount > 0 && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                        {highCount} High
                      </span>
                    )}
                    {moderateCount > 0 && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                        {moderateCount} Moderate
                      </span>
                    )}
                  </div>
                  {isExpanded ? (
                    <FiChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Category Table */}
            {isExpanded && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Allergen
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sensitivity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Percentage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {categoryAllergies.map((allergy) => (
                      <tr key={allergy.id} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getSeverityIcon(allergy.severity)}
                            <span className="text-sm font-medium text-gray-900">
                              {allergy.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">{allergy.type}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getSeverityBadge(allergy.severity, allergy.percentage)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-20">
                              <div 
                                className={`h-2 rounded-full ${
                                  allergy.severity === 'High' ? 'bg-red-500' : 'bg-yellow-500'
                                }`}
                                style={{ width: `${allergy.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {allergy.percentage}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}