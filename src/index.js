import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./context/filter_context";
import { PlantsProvider } from "./context/plants_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PlantsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </PlantsProvider>
);
