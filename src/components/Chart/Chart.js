import React from "react";
import { useLoaderData } from "react-router-dom";
import ChartDetails from "../ChartDetails/ChartDetails";
import './Chart.css';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart,} from 'recharts';



const Chart = () => {

  const quizes = useLoaderData();
  const quizData = quizes.data;
  // console.log(quizData)

  return (
    <div className="chart">
      <div className="flex justify-center items-center h-screen">
        <LineChart width={500} height={450} data={quizData}>
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
