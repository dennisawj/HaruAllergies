import React from 'react';
import { FiAlertTriangle, FiAlertCircle, FiGrid, FiTrendingUp } from 'react-icons/fi';

export default function DashboardStats({ allergies, filteredAllergies }) {
  const highSeverityCount = allergies.filter(a => a.severity === 'High').length;
  const moderateSeverityCount = allergies.filter(a => a.severity === 'Moderate').length;
  const categoriesCount = [...new Set(allergies.map(a => a.category))].length;
  const averageSeverity = allergies.reduce((sum, a) => sum + a.percentage, 0) / allergies.length;

  const stats = [
    {
      title: 'Total Allergies',
      value: allergies.length,
      filtered: filteredAllergies.length,
      icon: FiGrid,
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'High Sensitivity',
      value: highSeverityCount,
      filtered: filteredAllergies.filter(a => a.severity === 'High').length,
      icon: FiAlertTriangle,
      color: 'red',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Moderate Sensitivity',
      value: moderateSeverityCount,
      filtered: filteredAllergies.filter(a => a.severity === 'Moderate').length,
      icon: FiAlertCircle,
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Categories',
      value: categoriesCount,
      filtered: [...new Set(filteredAllergies.map(a => a.category))].length,
      icon: FiTrendingUp,
      color: 'green',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const isFiltered = filteredAllergies.length !== allergies.length;
        
        return (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-2xl font-bold text-gray-800">
                    {isFiltered ? stat.filtered : stat.value}
                  </p>
                  {isFiltered && (
                    <span className="text-sm text-gray-500">/ {stat.value}</span>
                  )}
                </div>
              </div>
              <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                <Icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}