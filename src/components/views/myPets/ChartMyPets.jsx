import { Chart } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

const ChartMyPets = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const chart = chartRef.current;
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Pet's Weight",
          backgroundColor: "#FFC0B3",
          borderColor: "#FFC0B3",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return value + " Kg";
              },
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return (
                  tooltipItem.dataset.label +
                  " : " +
                  tooltipItem.parsed.y +
                  " Kg "
                );
              },
            },
          },
        },
      },
    };

    new Chart(chart, config);
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartMyPets;
