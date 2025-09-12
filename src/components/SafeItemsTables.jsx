import React, { useState } from 'react';
import { FiCheck, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function SafeItemsTables({ safeItems, searchTerm }) {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Environment': '🌿',
      'Food': '🍽️'
    };
    return icons[category] || '✅';
  };

  const getSubCategoryIcon = (subCategory) => {
    const icons = {
      'Trees': '🌳',
      'Common Flowers & Vines': '🌸',
      'Houseplants': '🪴',
      'Shrubs & Bushes': '🌿',
      'Grasses & Groundcovers': '🌱',
      'Fibres & Materials': '🧵',
      'Dust & Particles': '💨',
      'Synthetic Materials & Plastics': '🔧',
      'Grains, Flour & Others': '🌾',
      'Dairy': '🥛',
      'Vegetables': '🥬',
      'Herbs & Spices': '🌿',
      'Oils': '🫒',
      'Seasoning': '🧂',
      'Nuts & Seeds': '🥜',
      'Legumes': '🫘',
      'Protein': '🥩',
      'Fishes': '🐟',
      'Seafood': '🦐',
      'Fruits': '🍎'
    };
    return icons[subCategory] || '✅';
  };

  // Filter safe items based on search term
  const filteredSafeItems = {};
  Object.keys(safeItems).forEach(mainCategory => {
    filteredSafeItems[mainCategory] = {};
    Object.keys(safeItems[mainCategory]).forEach(subCategory => {
      const items = safeItems[mainCategory][subCategory];
      const filtered = items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        filteredSafeItems[mainCategory][subCategory] = filtered;
      }
    });
    // Remove empty main categories
    if (Object.keys(filteredSafeItems[mainCategory]).length === 0) {
      delete filteredSafeItems[mainCategory];
    }
  });

  if (Object.keys(filteredSafeItems).length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <FiCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">No Safe Items Found</h3>
        <p className="text-gray-600">Try adjusting your search terms to find safe items for Haru.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {Object.entries(filteredSafeItems).map(([mainCategory, subCategories]) => {
        const totalItems = Object.values(subCategories).reduce((sum, items) => sum + items.length, 0);
        const isExpanded = expandedCategories[mainCategory];
        
        return (
          <div key={mainCategory} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Main Category Header */}
            <div 
              className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 cursor-pointer hover:from-green-100 hover:to-emerald-100 transition-all duration-200"
              onClick={() => toggleCategory(mainCategory)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getCategoryIcon(mainCategory)}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Safe {mainCategory} Items
                    </h3>
                    <p className="text-sm text-gray-600">
                      {totalItems} safe items • {Object.keys(subCategories).length} subcategories
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    ✅ {totalItems} Safe
                  </span>
                  {isExpanded ? (
                    <FiChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Subcategories */}
            {isExpanded && (
              <div className="p-4 space-y-4">
                {Object.entries(subCategories).map(([subCategory, items]) => (
                  <div key={subCategory} className="border border-gray-100 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getSubCategoryIcon(subCategory)}</span>
                        <h4 className="font-semibold text-gray-800">{subCategory}</h4>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          {items.length} items
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                        {items.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center gap-2 p-2 bg-green-50 rounded-md hover:bg-green-100 transition-colors duration-150"
                          >
                            <FiCheck className="w-3 h-3 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700 truncate" title={item}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}