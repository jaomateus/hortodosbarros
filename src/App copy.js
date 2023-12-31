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
import { loader as plantLoader } from "./pages/Plant";
import { loader as landingLoader } from "./pages/Landing";

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
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "plantshop",
        element: <PlantShop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "plants/:id",
        element: <Plant />,
        loader: plantLoader,
        errorElement: <SinglePageError />,
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
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
