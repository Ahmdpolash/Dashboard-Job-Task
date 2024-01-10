import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="px-4">
      <div>
        <div className="flex gap-3 mt-3 py-1 md:justify-center lg:justify-center items-center">
          <img
            className="w-[60px] h-[60px] lg:w-[50px] lg:h-[50px] rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
            alt=""
          />
          <div>
            <h1 className="font-bold text-xl">Hi Mike,</h1>
            <p className="text-gray-500">Welcome back.</p>
          </div>
        </div>

        <div className=" space-y-1 mt-8 ml-2  lg:ml-6">
          <div>
            <h3 className="font-semibold text-gray-800 text-[18px]">Today</h3>
            <h1 className="font-bold lg:font-semibold text-3xl text-gray-900">
              $19,892
            </h1>
            <p className="text-gray-600 pb-1">Account Balance</p>
          </div>

          <div className="flex flex-row gap-7 lg:gap-0 pt-4 lg:pt-0  lg:flex-col ">
            <div>
              <h1 className="font-semibold text-xl text-gray-900">$4000</h1>
              <p className="text-gray-600 pb-3">Year to Data Contribution</p>
            </div>
            
            <div>
              <h1 className="font-semibold text-xl text-gray-900">$1892</h1>
              <p className="text-gray-600 ">Total Internet</p>
            </div>
          </div>

          <div className="pt-3 px-2 lg:px-0">
            <button className="bg-blue-800 w-full mx-auto justify-center  text-white px-28 font-semibold lg:px-5 py-2 rounded-md flex items-center gap-2">
              I want to <FaCaretDown />{" "}
            </button>
          </div>

          <div className="pt-2 lg:pt-4">
            <h3 className="text-gray-900 font-semibold pt-5 text-xl">
              Recent Transaction
            </h3>
            <div className="pt-2 ">
              <p className="text-gray-600">2020-08-07</p>
              <h2 className="font-semibold text-[16px] text-gray-800">
                Withdrawal Transfer to Bank -xxx11
              </h2>
              <div className="bg-gray-300 h-[1px] mt-2 w-64"></div>
            </div>
            <div className="pt-4 ">
              <p className="text-gray-600">2020-08-07</p>
              <h2 className="font-semibold text-[16px] text-gray-800">
                Withdrawal Transfer to Bank -xxx11
              </h2>
              <div className="bg-gray-300 h-[1px] mt-2 w-64"></div>
            </div>
            <div className="pt-4 ">
              <p className="text-gray-600">2020-08-07</p>
              <h2 className="font-semibold text-[16px] text-gray-800">
                Withdrawal Transfer to Bank -xxx11
              </h2>
              <div className="bg-gray-300 h-[1px] mt-2 w-64"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
