import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartDetails = ({ quiz }) => {
  const { name, total } = quiz;
  // console.log(total)

  return (
    <div>
      <LineChart width={500} height={400}>
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default ChartDetails;
