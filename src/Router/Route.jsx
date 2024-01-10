import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../Components/Dashboard/Dashboard";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export default Route;
