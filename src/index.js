import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./context/filter_context";
import { PlantsProvider } from "./context/plants_context";
import { CartProvider } from "./context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PlantsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </PlantsProvider>
);
