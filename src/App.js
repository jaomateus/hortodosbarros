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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// loaders
import { loader as singlePlantLoader } from "./pages/Plant";
import { loader as landingLoader } from "./pages/Landing";
import { loader as plantShopLoader } from "./pages/PlantShop";

// actions
import { action as newsletterAction } from "./pages/Newsletter";

import Checkout from "./pages/Checkout";

// This line sets the default staleTime for queries. The staleTime option determines how long a query result is considered "fresh" before it becomes "stale." In this case, it's set to 5 minutes (1000 milliseconds * 60 seconds * 5 minutes), meaning that if the data is requested within 5 minutes of the last request, the cached data will be considered fresh and no background refetch will be triggered.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      // cacheTime: 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "plants/:id",
        element: <Plant />,
        loader: singlePlantLoader(queryClient),
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
