import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const RetirementStrategy = () => {
  const [rangeValue, setRangeValue] = useState(12); // Initial value
  const [rangeValue2, setRangeValue2] = useState(65); // Initial value

  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };
  const handleChange2 = (e) => {
    setRangeValue2(e.target.value);
  };
  return (
    <div className="px-5 lg:px-8 py-2  lg:py-8">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Retirement Strategy
        </h1>
        <div className="mt-3">
          <h3 className="text-[15px]">Employee Contributions</h3>
          <div className="flex mb-4 items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={rangeValue}
              onChange={handleChange}
              className="mr-4 w-full"
            />
            <div className="text-lg">{rangeValue}%</div>
          </div>
          <h3 className="text-[16px]">Retirement Age</h3>
          <div className="flex items-center ">
            <input
              type="range"
              min="0"
              max="100"
              value={rangeValue2}
              onChange={handleChange2}
              className="mr-4 w-full"
            />
            <div className="text-lg">{rangeValue2}</div>
          </div>
          <div className="h-[1px] w-[82%] mt-4 bg-gray-300 "></div>
          <div className="space-y-3">
            <div className="flex justify-between mt-3">
              <h1 className="font-semibold text-gray-700">
                Employer Contribution
              </h1>
              <p className="font-semibold text-gray-700">8.4%</p>
            </div>
            <div className="flex justify-between mt-3">
              <h1 className="font-semibold text-gray-700">Interest Rate</h1>
              <p className="font-semibold text-gray-700">5%</p>
            </div>

            <button className="text-white bg-blue-700 px-4 pb-2 py-2 rounded-lg w-full">
              Update
            </button>
            <p className="hidden lg:flex items-center gap-1 text-blue-700 font-semibold justify-center pt-2">
              View Help Docs <FaAngleRight />{" "}
            </p>

            <div className=" pt-6 hidden lg:block">
              <div className="border-l-2 border-blue-600 px-4 space-y-1">
                <h2 className="font-semibold text-gray-700">
                  Are you considering a
                </h2>
                <h3 className="font-bold text-gray-800">Housing Advance?</h3>
                <p className="font-normal text-gray-500">
                  Limited time reduced Interest{" "}
                </p>
                <h4 className="flex gap-1 font-semibold text-blue-600">
                  Learn More <FaAngleRight />{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementStrategy;
