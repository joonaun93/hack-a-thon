import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { InfographicProvider } from "./context/InfographicContext-component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InfographicProvider>
      <App />
    </InfographicProvider>
  </React.StrictMode>
);
