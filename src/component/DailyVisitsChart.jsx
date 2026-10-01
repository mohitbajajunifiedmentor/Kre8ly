import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChartWithFilter = () => {
  const [data, setData] = useState([]);
  const [range, setRange] = useState("day"); // day | week | month

  useEffect(() => {
    fetch(
      `https://official-website-mern-backend-1023229424452.asia-south2.run.app/api/visits/range?range=${range}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [range]);

  const labels = data.map((item) => item._id);
  const counts = data.map((item) => item.count);

  const chartData = {
    labels,
    datasets: [
      {
        label: `Visits per ${range}`,
        data: counts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 30, // 👈 Fixed bar width (in px)
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white rounded shadow space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-blue-700">Visit Stats</h2>
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>

      <div className="w-full h-[400px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChartWithFilter;
