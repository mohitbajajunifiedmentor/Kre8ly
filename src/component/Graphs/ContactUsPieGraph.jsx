import React, { useEffect, useState } from "react";
import { MdIncompleteCircle } from "react-icons/md";
import { IoCheckmarkDoneCircle, IoInformationCircle } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
const NotesImage = "/assets/NotesImage.png";
ChartJS.register(ArcElement, Tooltip, Legend);

const ContactUsPieGraph = ({ data }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [totalDataLength, setTotalDataLength] = useState(0);

  const getData = (filterName) =>
    data?.filter((item) => item.status === filterName)?.length || 0;

  const CardDetails = [
    {
      title: "No Action Taken",
      value: getData("select-status"),
      bgColor: "#9E9E9E",
    },
    {
      title: "Resolved Queries",
      value: getData("resolved"),
      bgColor: "#3d8c40",
    },
    {
      title: "Pending Queries",
      value: getData("pending"),
      bgColor: "#F1C40F",
    },

    {
      title: "Rejected Queries",
      value: getData("rejected"),
      bgColor: "#E63946",
    },
  ];

  useEffect(() => {
    if (data) {
      setTotalDataLength(data.length);

      const newLabels = CardDetails?.map((data) => data?.title);
      const newDatasets = CardDetails?.map((data) => data?.value);
      const newColors = CardDetails?.map((data) => data?.bgColor);

      setChartData({
        labels: [...newLabels],
        datasets: [
          {
            data: [...newDatasets],
            backgroundColor: [...newColors],
            borderColor: [...newColors],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  // const centerTextPlugin = {
  //   id: "centerText",
  //   beforeDraw: function (chart) {
  //     const { width, height, ctx, options } = chart;
  //     const total = options.plugins.centerText.total || 0;

  //     ctx.restore();
  //     ctx.font = `${height / 10}px sans-serif`;
  //     ctx.textBaseline = "middle";
  //     ctx.textAlign = "center";
  //     ctx.fillStyle = "#fff";

  //     const textX = width / 2;
  //     const textY = height / 2;

  //     ctx.font = `${height / 20}px sans-serif`;
  //     ctx.fillText("Total Queries", textX, textY - 30);
  //     ctx.font = `${height / 10}px sans-serif`;
  //     ctx.fillText(total, textX, textY);
  //     ctx.save();
  //   },
  // };

  return (
    <div className="flex flex-col md:flex-row w-full gap-4">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
        {CardDetails.map((item, i) => (
          <Cards key={i} details={item} />
        ))}
      </div>

      {/* Chart Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center md:items-stretch bg-cardColor p-3 rounded-md">
        <div className="w-full max-w-lg">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
              },
              scales: {
                x: {
                  grid: { display: false },
                  ticks: {
                    color: "#FFFFFF",
                    font: { size: 10 },
                  },
                },
                y: {
                  grid: { color: "#606060" },
                  ticks: {
                    color: "#FFFFFF",
                    font: { size: 10 },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Cards = ({ details }) => {
  return (
    <div className="w-full min-h-24 bg-cardColor rounded-md flex justify-start items-center gap-5 p-4">
      <figure
        style={{
          backgroundColor: details?.bgColor,
        }}
        className="w-16 h-16 flex justify-center items-center rounded-full"
      >
        <img src={NotesImage} alt="" className="w-8 h-8" />
      </figure>
      <div className="flex flex-col gap-1 text-white text-sm">
        <p className="text-base font-semibold text-white/70">
          {details?.title}
        </p>
        <p className="font-semibold text-xl">{details?.value}</p>
      </div>
    </div>
  );
};

export default ContactUsPieGraph;
