import React from "react";
import { Pie } from "react-chartjs-2";
import allergies from "../data/allergies.js";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SeverityChart() {
  const severityCounts = { High: 0, Medium: 0, Low: 0 };
  allergies.forEach((a) => severityCounts[a.severity]++);

  const data = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        data: [severityCounts.High, severityCounts.Medium, severityCounts.Low],
        backgroundColor: ["#dc2626", "#f59e0b", "#16a34a"],
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Severity Breakdown</h2>
      <Pie data={data} />
    </div>
  );
}
