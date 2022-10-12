import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {

  const quizes = useLoaderData();
  // console.log(quizes)

  return <div className="home">

<div className="flex gap-4 w-10/12 mx-auto">
{
    quizes.data.map(quiz => 
    <Quiz
    key = {quiz.id}
    quiz = {quiz}
    ></Quiz>)
    }
</div>
    
    </div>;
};

export default Home;
