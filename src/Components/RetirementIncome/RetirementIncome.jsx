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
    <div className="px-5 lg:px-14 py-2 lg:py-6">
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
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="flex items-center space-y-1 gap-2">
            <span className=" bg-blue-800 h-[8px] w-[13px] rounded-md"></span>
            <p className="text-gray-500 text-[14px]">
              Employer :{" "}
              <span className="font-bold text-gray-800">K 73,500</span>{" "}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className=" bg-blue-800 h-[8px] w-[13px] rounded-md"></span>
            <p className="text-gray-500 text-[14px]">
              Employee :{" "}
              <span className="font-bold text-gray-800">K 52,200</span>{" "}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className=" bg-blue-400 h-[8px] w-[13px] rounded-md"></span>
            <p className="text-gray-500 text-[14px]">
              Total Interest :{" "}
              <span className="font-bold text-gray-800">K 244,313</span>{" "}
            </p>
          </div>
        </div>

        <div className="h-[220px] lg:h-[290px] mt-2 ">
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
        <div className="mt-2  flex justify-between flex-col lg:flex-row gap-2">
          <div>
            {/* <h3 className="border-b-2 flex items-center gap-1 py-1 border-gray-300">
              Age :<span className="text-gray-600">Under 30</span>{" "}
              <FaCaretDown />
            </h3> */}
            <h3 className="border-b-2  flex items-center gap-1 py-1 border-gray-300">
              Age :
              <div className="relative z-50 inline-block text-left">
                <div className="group">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center w-full px-4 text-sm font-medium "
                  >
                    Under 30 <FaCaretDown />
                  </button>

                  <div className="absolute left-0 w-40 borde origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Under 25
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Under 20
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
            <h3 className="border-b-2 flex items-center gap-1 py-1 border-gray-300">
              Salary :
              <div className="relative z-30 inline-block text-left">
                <div className="group">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center w-full px-4 text-sm font-medium "
                  >
                    Key 20 - k 30 <FaCaretDown />
                  </button>

                  <div className="absolute left-0 w-40 border origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Key 10 - k 20
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </h3>

            <h3 className="border-b-2 flex items-center gap-1 py-1 border-gray-300">
              Gender :
              <div className="relative z-20 inline-block text-left">
                <div className="group">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center w-full px-4 text-sm font-medium "
                  >
                   Male <FaCaretDown />
                  </button>

                  <div className="absolute left-0 w-40 border origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Female
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
