import { createContext, useState } from "react";

export const ChartDataContext = createContext({
  chartData: {
    Goal: "",
    Income: "",
    FixedExpenses: "",
    VariableExpenses: "",
    Investment: "",
    Loan: "",
    Inflation: "",
  },
  setChartData: () => {},
});

export const ChartDataProvider = ({ children }) => {
  const [chartData, setChartData] = useState({
    Goal: "",
    Income: "",
    FixedExpenses: "",
    VariableExpenses: "",
    Investment: "",
    Loan: "",
    Inflation: "",
  });

  const value = { chartData, setChartData };

  return (
    <ChartDataContext.Provider value={value}>
      {children}
    </ChartDataContext.Provider>
  );
};
