import React, { useEffect } from "react";
import { renderChart } from "./chart.tsx";

const DashboardContent = ({ t, darkMode, language }) => {
  useEffect(() => {
    renderChart("salesChart", language);
    renderChart("purchaseChart", language);
    renderChart("distributionChart", language);
    renderChart("chart4", language);
    renderChart("chart5", language);
    renderChart("chart6", language);
    renderChart("chart7", language);
    renderChart("chart8", language);
    renderChart("chart9", language);
  }, [darkMode, language]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{t.dashboard}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 rounded-lg shadow-lg h-[250px]`}>
          <h2 className="text-lg font-semibold mb-4">{t.salesOverview}</h2>
          <div className="h-full w-full">
            <canvas id="salesChart"></canvas>
          </div>
        </div>
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 rounded-lg shadow-lg h-[250px]`}>
          <h2 className="text-lg font-semibold mb-4">{t.purchaseOverview}</h2>
          <div className="h-full w-full">
            <canvas id="purchaseChart"></canvas>
          </div>
        </div>
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 rounded-lg shadow-lg h-[250px]`}>
          <h2 className="text-lg font-semibold mb-4">{t.financialDistribution}</h2>
          <div className="h-full w-full">
            <canvas id="distributionChart"></canvas>
          </div>
        </div>
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 rounded-lg shadow-lg h-[250px]`}>
          <h2 className="text-lg font-semibold mb-4">Chart 4</h2>
          <div className="h-full w-full">
            <canvas id="chart4"></canvas>
          </div>
        </div>
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 rounded-lg shadow-lg h-[250px]`}>
          <h2 className="text-lg font-semibold mb-4">Chart 5</h2>
          <div className="h-full w-full">
            <canvas id="chart5"></canvas>
          </div>
        </div>
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 rounded-lg shadow-lg h-[250px]`}>
          <h2 className="text-lg font-semibold mb-4">Chart 6</h2>
          <div className="h-full w-full">
            <canvas id="chart6"></canvas>
          </div>
        </div>
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 rounded-lg shadow-lg h-[250px]`}>
          <h2 className="text-lg font-semibold mb-4">Chart 7</h2>
          <div className="h-full w-full">
            <canvas id="chart7"></canvas>
          </div>
        </div>
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 rounded-lg shadow-lg h-[250px]`}>
          <h2 className="text-lg font-semibold mb-4">Chart 8</h2>
          <div className="h-full w-full">
            <canvas id="chart8"></canvas>
          </div>
        </div>
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 rounded-lg shadow-lg h-[250px]`}>
          <h2 className="text-lg font-semibold mb-4">Chart 9</h2>
          <div className="h-full w-full">
            <canvas id="chart9"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;