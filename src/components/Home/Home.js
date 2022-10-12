import React from "react";
import { useLoaderData } from "react-router-dom";
import HeaderDeatils from "../HeaderDetails.js/HeaderDeatils";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {
  const quizes = useLoaderData();
  // console.log(quizes)

  return (
    <div className="home pt-20">
      <div>
        <HeaderDeatils></HeaderDeatils>
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
