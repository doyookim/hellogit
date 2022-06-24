import React, { memo } from "react";

import { Chart as ChartJS } from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register();

const LineChartView = memo((chartData) => {
  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14,
    },
  };

  const options = {
    title: {
      display: true,
      text: "Chart Title",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      ],
    },
  };

  const data = {
    labels: chartData.active,
    datasets: [
      {
        label: "명",
        borderColor: "#0066ff",
        fill: false,
        data: chartData.active,
      },
    ],
  };

  return (
    <div>
      <Line data={data} legend={legend} options={options} />
    </div>
  );
});

LineChartView.defalutProps = {
  chartData: {
    active: [],
    confirmed_acc: [],
    death_acc: [],
    released_acc: [],
    confirmed: [],
    death: [],
  },
};

export default LineChartView;
