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

  // const date = new Date();
  // const yearsToGoal = Math.ceil(toReachGoal / 12);

  // const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  // const day = date.getDate();

  // const max = `${year + yearsToGoal}-${month}-${day}`;

  const data = {
    datasets: [
      {
        data: savingsData,
        // fill: false,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "rgba(0,0,0,0.5)",
        tension: 0.4,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    elements: { point: { pointStyle: "cross" } },
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
        // type: "time",
      },
    },
  };

  // scales: {
  //   y: {
  //     title: { display: true, text: "Amount, RM" },
  //   },
  //   x: [
  //     {
  //       // grid: {
  //       //   display: true,
  //       //   drawBorder: true,
  //       //   drawOnChartArea: true,
  //       //   drawTicks: true,
  //       // },
  //       display: true,
  //       max: max,
  //       title: { display: true, text: "Date" },
  //       type: "time",
  //       // ticks: {
  //       //   display: true,
  //       //   color: "rgb(0,0,0)",
  //       //   source: "label",
  //       //   autoSkip: false,
  //       //   maxTicksLimit: savingsData.length,
  //       // },
  //       time: {
  //         minUnit: "month",
  //         unit: yearsToGoal > 0 ? "year" : "month",
  //         unitStepSize: 1,
  //         displayFormats: {
  //           millisecond: "dd MMM yy",
  //           second: "dd MMM yy",
  //           minute: "dd MMM yy",
  //           hour: "dd MMM yy",
  //           day: "dd MMM yy",
  //           week: "dd MMM yy",
  //           month: "MMM yy",
  //           quarter: "dd MMM yy",
  //           year: "MMM yy",
  //         },
  //       },
  //       // },
  //     },
  //   ],
  // },

  return (
    <div>
      <Line className="chart" options={options} type="line" data={data}></Line>
    </div>
  );
};

export default MyChart;
