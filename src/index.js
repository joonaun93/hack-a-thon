import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { InfographicProvider } from "./context/InfographicContext-component";
import { BudgetProvider } from "./context/BudgetContext-component";
import { ChartDataProvider } from "./context/ChartDataContext-component";
import { GameProvider } from "./context/GameContext-component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameProvider>
      <InfographicProvider>
        <BudgetProvider>
          <ChartDataProvider>
            <App />
          </ChartDataProvider>
        </BudgetProvider>
      </InfographicProvider>
    </GameProvider>
  </React.StrictMode>
);
