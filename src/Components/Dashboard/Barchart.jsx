import React from "react";
import './chart.css'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const Barchart = () => {
  const data = [
    {
      name: "20",
      uv: 6,
      pv: 6,
      amt: 6,
      nv: 6,
    },
    {
      uv: 7,
      pv: 7,
      amt: 7,
      nv: 7,
    },
    {
      name: "25",
      uv: 8,
      pv: 8,
      amt: 8,
      nv: 8,
    },
    {
      uv: 9,
      pv: 9,
      amt: 9,
      nv: 9,
    },
    {
      name: "30",
      uv: 10,
      pv: 10,
      amt: 10,
      nv: 10,
    },
    {
      uv: 11,
      pv: 11,
      amt: 11,
      nv: 11,
    },
    {
      name: "35",
      uv: 12,
      pv: 12,
      amt: 12,
      nv: 12,
    },
    {
      uv: 14,
      pv: 14,
      amt: 14,
      nv: 14,
    },
    {
      name: "40",
      uv: 16,
      pv: 16,
      amt: 16,
      nv: 16,
    },
    {
      uv: 18,
      pv: 18,
      amt: 18,
      nv: 18,
    },
    {
      name: "60",
      uv: 19,
      pv: 19,
      amt: 19,
      nv: 19,
    },

    {
      uv: 21,
      pv: 20,
      amt: 20,
      nv: 20,
    },

    {
      name: "65",
      uv: 23,
      pv: 21,
      amt: 21,
      nv: 21,
    },
  ];

  return (
    <div className="chart-container -ml-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 2,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#3939e5" stackId="stack" />
          <Bar dataKey="uv" fill="#6767e1" stackId="stack" />
          <Bar dataKey="nv" fill="#a8a8f5" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
