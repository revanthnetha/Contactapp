import React from "react";
import CovidMap from "../components/CovidMap";
import LineChart from "../components/LineChart";
import BarGraph from "../components/BarGraph";

const Charts: React.FC = () => {
  return (
    <div>
      <div className="text-xl align-center text-center pb-4 bg-blue-400 pt-4 font-bold text-white">
        Charts
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          COVID-19 Map Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex justify-center">
            <BarGraph />
          </div>

          <div className="flex justify-center">
            <LineChart />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-3/4 xl:w-1/2">
            <CovidMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
