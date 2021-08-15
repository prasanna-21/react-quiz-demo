import React, { useContext } from "react";
import { MenuContext } from "./menuContext";
import { QuestionData } from "./questionData";

export default function ScoreMenu() {
  const { score, setScore, setMenu } = useContext(MenuContext);
  const reStart = () => {
    setMenu("main");
    setScore(0);
  };
  return (
    <div className="score">
      <h2>Score Menu</h2>
      <br />
      <h3>
        {score}/{QuestionData.length}
      </h3>
      <button onClick={reStart}>Restart</button>
    </div>
  );
}
