import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./context/filter_context";
import { PlantsProvider } from "./context/plants_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-rre3ipzaxqszb8px.us.auth0.com"
    clientId="LYnnk6XitlXsrJg36qVe6QucegqkWQG9"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <PlantsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </PlantsProvider>
  </Auth0Provider>
);
