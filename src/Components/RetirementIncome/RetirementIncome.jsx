import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Barchart from "../Dashboard/Barchart";

const RetirementIncome = () => {
  const percentage = 66;
  const percentage2 = 95;
  const percentage3 = 59;

  const tealColor = "#3cf6f6";
  const black = "#111";

  return (
    <div className="px-5 lg:px-16 py-2 lg:py-8">
      <h3 className="text-blue-600 text-[14px] font-bold">Retirement Income</h3>
      <h2 className="font-semibold text-xl">Starting Year 2056</h2>

      <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-4">
        <div className="col-span-3 lg:col-span-1 border-b-2 py-2 border-blue-600">
          <h1 className="text-2xl font-bold text-gray-800">$300,000</h1>
          <p className="text-gray-500 text-[14px] font-semibold">My Goal</p>
        </div>

        <div className="col-span-1 border-b-2 py-2 border-blue-600">
          <h1 className="text-2xl font-bold text-gray-800">59%</h1>
          <p className="text-gray-500 text-[14px] font-semibold">
            Goal Achived
          </p>
        </div>

        <div className="col-span-1 border-b-2 py-2 border-blue-600">
          <h1 className="text-2xl font-bold text-gray-800">$300</h1>
          <p className="text-gray-500 text-[14px] font-semibold">
            East. Monthly Income
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-xl font-semibold ">Contribution Overtime</h1>

        <div className="h-[200px] lg:h-[290px] mt-2 ">
          <Barchart />
        </div>
      </div>

      <div className="mt-2">
        <h1 className="font-semibold text-xl text-gray-800">
          How do I compare to my peers?
        </h1>
        <p className="text-gray-500 text-[14px]">
          These numbers represent current goal achievement
        </p>
        <div className="mt-2 flex justify-between flex-col lg:flex-row gap-2">
          <div>
            <h3 className="border-b-2 flex items-center gap-1 py-2 border-gray-300">
              Age :<span className="text-gray-600">Under 30</span>{" "}
              <FaCaretDown />
            </h3>
            <h3 className="border-b-2 flex items-center gap-1 py-2 border-gray-300">
              Salary : <span className="text-gray-600">Key 20 - k 30</span>{" "}
              <FaCaretDown />
            </h3>
            <h3 className="border-b-2 flex items-center gap-1 py-2 border-gray-300">
              Gender : <span className="text-gray-600">Male</span>{" "}
              <FaCaretDown />
            </h3>
          </div>

          <div className="flex gap-4 pb-4 lg:pb-0 py-4 lg:py-0 justify-center items-center">
            <div style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: tealColor,
                  textColor: black,
                })}
                text={`${percentage}%`}
                value={78}
              />
              <p className="text-center py-2">Average</p>
            </div>
            <div style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: tealColor,
                  textColor: black,
                })}
                text={`${percentage2}%`}
                value={95}
              />
              <p className="text-center py-2">Top</p>
            </div>
            <div style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: tealColor,
                  textColor: black,
                })}
                text={`${percentage3}%`}
                value={59}
              />
              <p className="text-center py-2">Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementIncome;
