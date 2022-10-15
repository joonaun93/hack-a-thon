import { createContext, useState } from "react";

export const BudgetContext = createContext({
  budgetState: {
    unactive: ["Investment", "Loan", "Inflation"],
    active: ["Goal", "Income", "Fixed Expenses", "Variable Expenses"],
    enterPosition: "",
    startPosition: "",
  },
  setBudgetState: () => {},
});

export const BudgetProvider = ({ children }) => {
  const [budgetState, setBudgetState] = useState({
    unactive: ["Investment", "Loan", "Inflation"],
    active: ["Goal", "Income", "Fixed Expenses", "Variable Expenses"],
    enterPosition: "",
    startPosition: "",
  });

  const value = { budgetState, setBudgetState };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
