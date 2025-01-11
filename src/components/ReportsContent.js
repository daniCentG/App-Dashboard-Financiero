import React from "react";
import { Bar } from "react-chartjs-2";

const ReportsContent = ({ t, darkMode, reportType, currency }) => {
  const exchangeRates = {
    USD: 1,
    PYG: 7000,
    EUR: 0.85
  };

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: `Sales 2024 (${currency})`,
      data: [12000, 19000, 3000, 5000, 2000, 3000].map(value => value * exchangeRates[currency]),
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1
    }]
  };

  const purchaseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: `Purchases 2024 (${currency})`,
      data: [8000, 15000, 5000, 7000, 3000, 4000].map(value => value * exchangeRates[currency]),
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1
    }]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{reportType === "sales" ? t.salesReport : t.purchaseReport}</h1>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg h-[500px]`}>
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <input type="date" className="border rounded p-2" />
            <input type="date" className="border rounded p-2" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">{t.applyFilter}</button>
          </div>
        </div>
        {reportType === "sales" ? (
          <Bar data={salesData} />
        ) : (
          <Bar data={purchaseData} />
        )}
      </div>
    </div>
  );
};

export default ReportsContent;
