import React from "react";
import { Bar } from "react-chartjs-2";
import { useCovidData } from "../hooks/useCovidData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph: React.FC = () => {
  const { data, isLoading, isError } = useCovidData();

  // skeleton when it is loading
  if (isLoading)
    return (
      <>
        <div className="w-200px h-100px">
          <div
            role="status"
            className="w-200px p-5 border border-gray-200 rounded shadow animate-pulse"
          >
            <div className="w-80 h-4 mb-10 bg-gray-200 rounded-full"></div>
            <div className="flex items-baseline mt-4">
              <div className="w-full h-20 ms-6 bg-gray-200 rounded-t-lg"></div>
              <div className="w-full bg-gray-200 rounded-t-lg h-60 ms-6"></div>
              <div className="w-full bg-gray-200 rounded-t-lg h-52 ms-6"></div>
              <div className="w-full bg-gray-200 rounded-t-lg h-32 ms-6"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  if (isError) return <p>Error loading COVID-19 data</p>;
  // Preparing data for the bar graph
  const chartData = {
    labels: ["Total Cases", "Active Cases", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Global COVID-19 Stats",
        data: [
          data?.cases || 0,
          data?.active || 0,
          data?.recovered || 0,
          data?.deaths || 0,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)", // Color for total cases
          "rgba(255, 206, 86, 0.2)", // Color for active cases
          "rgba(54, 162, 235, 0.2)", // Color for recovered
          "rgba(255, 99, 132, 0.2)", // Color for deaths
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)", // Border color for total cases
          "rgba(255, 206, 86, 1)", // Border color for active cases
          "rgba(54, 162, 235, 1)", // Border color for recovered
          "rgba(255, 99, 132, 1)", // Border color for deaths
        ],
        borderWidth: 1,
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
        text: "Global COVID-19 Statistics",
      },
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarGraph;
