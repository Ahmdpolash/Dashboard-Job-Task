import React from "react";
import RetirementIncome from "../RetirementIncome/RetirementIncome";
import RetirementStrategy from "../RetirementStrategy/RetirementStrategy";
import { NavLink, Outlet } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import {
  CiBellOff,
  CiBellOn,
  CiChat2,
  CiHome,
  CiSearch,
  CiUser,
  CiViewList,
} from "react-icons/ci";
import logo from "../../../public/logo.png";
import { IoIosLogOut } from "react-icons/io";

import "./nav.css";
import Profile from "../Profile/Profile";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="h-screen flex flex-col lg:flex-row">
          <div className="w-20 shadow-lg border-r-2 bg-gray-50 hidden lg:block ">
            <div className="mb-10">
              <img
                className="mt-4 w-[35px] mx-auto text-center"
                src={logo}
                alt=""
              />
              <CiSearch className="text-center mx-auto text-2xl mt-4 font-semibold text-gray-600" />
            </div>
            <ul className="mx-auto flex flex-col justify-center items-center space-y-6">
              <li className=" bg-blue-700 p-2 rounded-md">
                <NavLink>
                  <CiHome className="text-2xl text-white font-bold" />
                </NavLink>
              </li>

              <li>
                <NavLink>
                  <CiChat2 className="text-3xl text-gray-600 font-bold" />
                </NavLink>
              </li>

              <li>
                <NavLink>
                  <CiViewList className="text-3xl text-gray-600 font-bold" />
                </NavLink>
              </li>

              <li>
                <NavLink>
                  <CiUser className="text-3xl text-gray-600 font-bold" />
                </NavLink>
              </li>
            </ul>

            <ul className="mx-auto absolute bottom-4 left-4 space-y-4">
              <li>
                <CiBellOn className="text-3xl absolute lg:static right-0 top-0 text-gray-700 font-bold" />
              </li>
              <li>
                <IoIosLogOut className="text-3xl text-gray-700 font-bold" />
              </li>
            </ul>
          </div>

          {/* mobile nav */}

          <div className="fixed w-full bottom-0 px-8 border shadow-lg bg-gray-50 lg:hidden h-14">
            <ul className="flex gap-4 py-1 justify-between mt-1">
              <li className=" bg-blue-700 px-3 py-2 rounded-md">

                <NavLink>
                  <CiHome className="text-xl text-white font-bold" />
                </NavLink>
              </li>

              <li>
                <NavLink>
                  <CiChat2 className="text-3xl text-gray-600 font-bold" />
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <CiViewList className="text-3xl text-gray-600 font-bold" />
                </NavLink>
              </li>

              <li>
                <NavLink>
                  <CiUser className="text-3xl text-gray-600 font-bold" />
                </NavLink>
              </li>
              <li>
                <NavLink>
                <CiSearch className="text-center mx-auto text-3xl font-semibold text-gray-600" />
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 w-full lg:w-3/12 mb-4 lg:mb-0">
            <Profile />
          </div>
          <div className="bg-gray-50 w-full lg:w-6/12 mb-4 lg:mb-0">
            <RetirementIncome />
          </div>
          <div className="bg-gray-100 w-full lg:w-3/12">
            <RetirementStrategy />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
