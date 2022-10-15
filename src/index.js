import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { InfographicProvider } from "./context/InfographicContext-component";
import { BudgetProvider } from "./context/BudgetContext-component";
import { ChartDataProvider } from "./context/ChartDataContext-component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InfographicProvider>
      <BudgetProvider>
        <ChartDataProvider>
          <App />
        </ChartDataProvider>
      </BudgetProvider>
    </InfographicProvider>
  </React.StrictMode>
);
