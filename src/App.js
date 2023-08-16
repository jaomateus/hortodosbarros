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
  Newsletter,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as plantShopLoader } from "./pages/PlantShop";
import { loader as plantLoader } from "./pages/Plant";
import { loader as plantsFeaturedLoader } from "./pages/Landing";
import { action as newsletterAction } from "./pages/Newsletter";

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
        loader: plantsFeaturedLoader,
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
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
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
