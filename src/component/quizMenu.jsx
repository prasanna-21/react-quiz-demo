import React, { useState, useContext } from "react";
import { MenuContext } from "./menuContext";

import { QuestionData } from "./questionData";

export default function QuizMenu() {
  const { setMenu, score, setScore } = useContext(MenuContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (QuestionData[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setCurrQuestion(currQuestion + 1);
  };
  const finishQuiz = () => {
    if (QuestionData[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setMenu("score");
  };

  return (
    <div className="quiz">
      <div className="header">
        <p>
          attempted : {currQuestion}/{QuestionData.length}
        </p>
        <h2>{QuestionData[currQuestion].question}</h2>
      </div>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {QuestionData[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {QuestionData[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {QuestionData[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {QuestionData[currQuestion].optionD}
        </button>
      </div>
      <div>
        {currQuestion === QuestionData.length - 1 ? (
          <button className="btn" onClick={finishQuiz}>
            Finish quiz
          </button>
        ) : (
          <button className="btn" onClick={nextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
