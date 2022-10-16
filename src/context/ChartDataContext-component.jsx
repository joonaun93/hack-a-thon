import { createContext, useState } from "react";

export const ChartDataContext = createContext({
  chartData: {
    Goal: 0,
    Income: 0,
    FixedExpenses: 0,
    VariableExpenses: 0,
    Investment: 7,
    Inflation: 3,
    toReachGoal: 0,
    savingsData: [
      { x: `10/2022`, y: 2000 },
      { x: `11/2022`, y: 1000 },
      { x: `12/2022`, y: 3000 },
      { x: `1/2023`, y: 500 },
    ],
    reset: true,
    negative: false,
  },
  setChartData: () => {},
});

export const ChartDataProvider = ({ children }) => {
  const [chartData, setChartData] = useState({
    Goal: 0,
    Income: 0,
    FixedExpenses: 0,
    VariableExpenses: 0,
    Investment: 7,
    Inflation: 3,
    toReachGoal: 0,
    savingsData: [
      { x: `10/2022`, y: 2000 },
      { x: `11/2022`, y: 1000 },
      { x: `12/2022`, y: 3000 },
      { x: `1/2023`, y: 500 },
    ],
    reset: true,
    negative: false,
  });

  const value = { chartData, setChartData };

  return (
    <ChartDataContext.Provider value={value}>
      {children}
    </ChartDataContext.Provider>
  );
};
