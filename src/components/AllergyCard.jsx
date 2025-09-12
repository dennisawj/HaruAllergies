import React from "react";
import { motion } from "framer-motion";

export default function AllergyCard({ allergy }) {
  const severityColors = {
    High: "text-red-600",
    Medium: "text-yellow-500",
    Low: "text-green-600",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-center justify-center border-l-4 border-indigo-500"
    >
      <div className="text-4xl mb-3">{allergy.icon}</div>
      <h2 className="text-xl font-bold mb-1">{allergy.name}</h2>
      <p className="text-gray-600 mb-1">Category: {allergy.category}</p>
      <p className={`font-semibold ${severityColors[allergy.severity]}`}>
        Severity: {allergy.severity}
      </p>
    </motion.div>
  );
}
