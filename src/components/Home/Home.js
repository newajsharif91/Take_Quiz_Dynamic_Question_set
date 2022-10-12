import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {

  const quizes = useLoaderData();
  // console.log(quizes)

  return (
    <div className="home">
      <div>
        {" "}
        <h2 className="text-5xl lg:py-20 py-5 font-bold animation-text">
          Let's Explore Yourself{" "}
          <span className="text-7xl text-red-500">With Quiz-Munia</span>
        </h2>
      </div>
      <div className="lg:flex lg:gap-4 w-10/12 mx-auto pb-20">
        {quizes.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
