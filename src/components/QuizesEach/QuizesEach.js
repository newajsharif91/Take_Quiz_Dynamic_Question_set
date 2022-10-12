import React from "react";
import Modal from "../Modal/Modal";
import OptionCart from "../OptionCart/OptionCart";

const QuizesEach = ({ qui, index }) => {
  const { id, question, options, correctAnswer } = qui;
    // console.log(correctAnswer);

  const handleForShowAnd = () => {
    alert("show this");
  };

  return (
    <div className="bg-white w-3/5 mx-auto rounded-2xl">
      <div className="w-full mx-auto mt-14 tex-left p-5">
        <h3 className="text-left text-xl font-bold">
          <span className="mr-3">Question-{index + 1}:</span>
          {question.slice(3, -4)}
        </h3>

        <div className="text-left mx-auto grid grid-cols-2 mt-5 gap-10 ">
          {options.map((opti, idx) => (
            <OptionCart
              key={idx}
              opti={opti}
              correctAnswer={correctAnswer}
            ></OptionCart>
          ))}
        </div>


        <div>
          <Modal correctAnswer={correctAnswer}></Modal>
        </div>
        
      </div>
    </div>
  );
};

export default QuizesEach;
