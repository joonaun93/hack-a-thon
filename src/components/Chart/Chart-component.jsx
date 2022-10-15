import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart } from "chart.js/auto";
import "chartjs-adapter-date-fns";

import { useContext } from "react";
import { ChartDataContext } from "../../context/ChartDataContext-component";

import "./Chart-styles.scss";

const MyChart = () => {
  const {
    chartData: { savingsData },
  } = useContext(ChartDataContext);

  const data = {
    labels: [],
    datasets: [
      {
        data: savingsData,
        fill: false,
        borderColor: "rgba(0,0,0,0.5)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      title: {
        text: "Time to Reach Goal",
        display: true,
      },
    },
    scales: {
      y: {
        title: { display: true, text: "Amount, RM" },
      },
      x: {
        title: { display: true, text: "Date" },

        type: "time",
        time: {
          unit: "week",
          unitStepSize: 1,
          displayFormats: {
            millisecond: "dd MMM yy",
            second: "dd MMM yy",
            minute: "dd MMM yy",
            hour: "dd MMM yy",
            day: "dd MMM yy",
            week: "dd MMM yy",
            month: "dd MMM yy",
            quarter: "dd MMM yy",
            year: "dd MMM yy",
          },
        },
      },
    },
  };

  return (
    <div>
      <Line className="chart" options={options} type="line" data={data}></Line>
    </div>
  );
};

export default MyChart;
