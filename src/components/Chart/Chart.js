import React from "react";
import { useLoaderData } from "react-router-dom";
import ChartDetails from "../ChartDetails/ChartDetails";
import './Chart.css';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart,} from 'recharts';



const Chart = () => {

  const quizes = useLoaderData();
  const quizData = quizes.data;
  // console.log(quizData)

  return <div className="chart">

      <div>
      {
      quizData.map(quiz => 
      <ChartDetails
      key={quiz.id}
      quiz = {quiz}
      ></ChartDetails>
      )}
      </div>

  </div>;
};

export default Chart;
