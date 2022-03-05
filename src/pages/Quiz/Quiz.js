import React, { useState } from "react";
import QuestionList from "./QuestionList";
import { v4 as uuidv4 } from "uuid";

const Quiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [scores, setScores] = useState(0);
  const [clicked, setClicked] = useState(false);

const handleAnswer = (score) => {
    console.log("dcdece");
// // if(score===100){
// //     setScores(scores +100);
// //     console.log("vfg");
// //     console.log(scores);
// // }
// setClicked(true);
}

  return (
    <div className="quesWrapper">
      <div>
        <div className="questionSection">
          <div className="questionCount">
            Question {currentQuestion + 1} of {QuestionList.length}
          </div>
          <div className="question">
            {QuestionList[currentQuestion].question}
          </div>
        </div>
        <div className="ansSection">
          {QuestionList[currentQuestion].answersList.map((answerOption) => (
            <li className="answerList" key={uuidv4()}>
              <button onClick={handleAnswer(answerOption.score)}>{answerOption.answer}</button>
            </li>
          ))}
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Quiz;
