import React, { useState } from "react";
import QuestionList from "./QuestionList";
import { v4 as uuidv4 } from "uuid";
import "./Quiz.css";
import { Button } from "@mui/material";
import  { Link } from "react-router-dom";
import "./Results";

const Quiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [scores, setScores] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (score) => {
    if (score === 100) {
      console.log(setScores);
      setScores(scores + score);
      console.log(scores);
    } else if (score === 60) {
      setScores(scores + 60);
      console.log(scores);
    } else if (score === 40) {
      setScores(scores + 40);
      console.log(scores);
    } else {
      setScores(scores + 20);
      console.log(scores);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    if (currentQuestion < QuestionList.length - 1) {
      console.log(currentQuestion);
      setcurrentQuestion(currentQuestion + 1);
      console.log(currentQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <center>
      <div
        className="quesWrapper"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {showScore ? (
          <div>
            <p style={{ fontSize: "3.5rem", letterSpacing: 1, fontFamily:"Roboto" }}>Completed!</p>
            <Link to="/results" style={{textDecoration:"none"}}>
            <Button 
            style={{fontSize:"1.5rem", borderRadius: "31px", backgroundColor: "#49AB94"}}
            variant="contained">See Results!</Button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="questionSection">
              <div className="questionCount">
                Question{" "}
                <span style={{ color: "#49AB94" }}>{currentQuestion + 1}</span>{" "}
                of{" "}
                <span style={{ color: "#49AB94" }}>{QuestionList.length}</span>
              </div>
              <div className="question">
                {QuestionList[currentQuestion].question}
              </div>
            </div>
            <div className="ansSection">
              {QuestionList[currentQuestion].answersList.map((answerOption) => (
                <li className="answerList" key={uuidv4()}>
                  <button
                    onClick={() => handleAnswer(answerOption.score)}
                    disabled={clicked}
                    className="ansbutton"
                  >
                    {answerOption.answer}
                  </button>
                </li>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={!clicked}
              style={{
                borderRadius: "31px",
                backgroundColor: "#333333",
                height: "4rem",
                width: "10rem",
                fontSize: "2.1rem",
                paddingTop: "0rem",
                color: "white",
                marginTop: "1rem",
                cursor:"pointer",
                textDecoration:"none"
              }}
              variant="contained"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </center>
  );
};

export default Quiz;
