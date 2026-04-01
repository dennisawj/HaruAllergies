import React from 'react';
import { FiAlertTriangle, FiAlertCircle, FiGrid, FiCheckCircle } from 'react-icons/fi';
import { getStats } from '../data/allergies.js';

export default function DashboardStats() {
  const stats = getStats();

  const statCards = [
    {
      title: 'Total Tested',
      value: stats.total,
      icon: FiGrid,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: '🚨 Highly Allergic',
      value: stats.highly,
      icon: FiAlertTriangle,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: '⚠️ Allergic',
      value: stats.allergic,
      icon: FiAlertCircle,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      title: '✅ Safe',
      value: stats.safe,
      icon: FiCheckCircle,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div key={index} className="bg-white rounded-xl shadow-lg p-3 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs md:text-sm font-medium">{stat.title}</p>
                <p className="text-lg md:text-2xl font-bold text-gray-800 mt-2">
                  {stat.value}
                </p>
              </div>
              <div className={`p-2 md:p-3 ${stat.bgColor} rounded-lg`}>
                <Icon className={`w-4 h-4 md:w-6 md:h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}