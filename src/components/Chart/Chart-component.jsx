import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart } from "chart.js/auto";

import "./Chart-styles.scss";

const MyChart = () => {
  const data = {
    labels: ["item1", "item2", "item3"],
    datasets: [
      {
        label: "first dataset",
        data: [1, 4, 2],
        fill: false,
        borderColor: "rgba(0,0,0,0.5)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <Line className="chart" type="line" data={data}></Line>
    </div>
  );
};

export default MyChart;
