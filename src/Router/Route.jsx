import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Dashboard/Dashboard";
import Dashboard from "../Components/Dashboard/Dashboard";
import Profile from "../Components/Profile/Profile";
import RetirementIncome from "../Components/RetirementIncome/RetirementIncome";
import RetirementStrategy from "../Components/RetirementStrategy/RetirementStrategy";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Profile />,
    //   },
    //   {
    //     path: "/",
    //     element: <RetirementIncome />,
    //   },
    //   {
    //     path: "/",
    //     element: <RetirementStrategy />,
    //   },
    // ],
  },
]);

export default Route;
