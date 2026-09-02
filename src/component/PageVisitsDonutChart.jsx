import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://official-website-mern-backend-1023229424452.asia-south2.run.app/api/visits/by-page"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const labels = data.map((item) => item._id);
  const counts = data.map((item) => item.count);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Page Visits",
        data: counts,
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#6B8E23",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold text-center text-indigo-600 mb-2">
        Visits by Page
      </h2>
      <Doughnut data={chartData} />
    </div>
  );
};

export default DonutChart;
