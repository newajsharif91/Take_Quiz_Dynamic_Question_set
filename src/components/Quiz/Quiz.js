import React from "react";
import { Link } from "react-router-dom";

const Quiz = (quiz) => {
  const { id, name, logo, total } = quiz.quiz;
  // console.log(quiz)
  // console.log(id)
  return (
    <div className="rounded-lg mt-10">
      <div className="p-2">
        <img className=" bg-orange-300 rounded-lg" src={logo} alt="" />
        <div className="lg:flex lg:gap-4 w-10/12 mx-auto pb-[18px] text-lg mt-4 justify-between">
          <h3 className="text-white">{name}</h3>
          <h3 className="text-white">Questions:{total}</h3>
        </div>
        <Link to={`/quizes/${id}`}>
          <button className="p-1 bg-violet-500 w-full mt-3 mb-1 rounded-lg text-white text-xl font-bold">
            Start Practice
          </button>
        </Link>
      </div>
    </div>
  );

};

export default Quiz;
