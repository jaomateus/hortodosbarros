import React from "react";
import "./App.css";
import {
  About,
  Plants,
  Error,
  PrivateRoute,
  Cart,
  SinglePlant,
  HomeLayout,
  Landing,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
        path: "plants",
        element: <Plants />,
      },
      {
        path: "plant",
        element: <SinglePlant />,
      },
      {
        path: "cart",
        element: <Cart />,
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
