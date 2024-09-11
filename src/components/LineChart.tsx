// src/components/LineGraph.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import { useHistoricData } from "../hooks/useHistoricData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FC = () => {
  const { data, isLoading, isError } = useHistoricData();

  if (isLoading)
    return (
      <p>
        <div
          role="status"
          className="flex items-center justify-center h-80 max-w-md bg-gray-200 rounded-lg animate-pulse "
        >
          <div className="w-80 h-60 text-gray-200"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </p>
    );
  if (isError) return <p>Error loading historical data</p>;

  // Extract cases from the data
  const cases = data?.cases || {};

  // Get dates and case numbers
  const dates = Object.keys(cases);
  const caseNumbers = Object.values(cases);

  const chartData = {
    labels: dates, // Dates for the x-axis
    datasets: [
      {
        label: "COVID-19 Cases Over Time",
        data: caseNumbers, // Case numbers for the y-axis
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1, // For smooth curve
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "COVID-19 Case Fluctuations Over Time",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#666",
        },
      },
      y: {
        ticks: {
          color: "#666",
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
