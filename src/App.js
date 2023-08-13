import React from "react";
import "./App.css";
import {
  About,
  PlantShop,
  BookShop,
  Error,
  PrivateRoute,
  Cart,
  Plant,
  HomeLayout,
  Landing,
  SinglePageError,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as plantShopLoader } from "./pages/PlantShop";
import { loader as plantLoader } from "./pages/Plant";

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
        errorElement: <SinglePageError />,
      },
      {
        path: "plant/:id",
        errorElement: <SinglePageError />,
        loader: plantLoader,
        element: <Plant />,
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
