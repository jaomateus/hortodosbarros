import React from "react";
import "./App.css";
import {
  About,
  PlantShop,
  BookShop,
  Error,
  PrivateRoute,
  Cart,
  SinglePlant,
  HomeLayout,
  Landing,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as plantShopLoader } from "./pages/PlantShop";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "plantshop",
        element: <PlantShop />,
        loader: plantShopLoader,
      },
      {
        path: "bookshop",
        element: <BookShop />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
