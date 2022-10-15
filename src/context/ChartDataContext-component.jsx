import { createContext, useState } from "react";

export const ChartDataContext = createContext({
  chartData: {
    Goal: 0,
    Income: 0,
    FixedExpenses: 0,
    VariableExpenses: 0,
    Investment: 0,
    Loan: 0,
    Inflation: 0,
    toReachGoal: 0,
    savingsData: [],
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
    Investment: 0,
    Loan: 0,
    Inflation: 0,
    toReachGoal: 0,
    savingsData: [],
    negative: false,
  });

  const value = { chartData, setChartData };

  return (
    <ChartDataContext.Provider value={value}>
      {children}
    </ChartDataContext.Provider>
  );
};
