import "./App.css";
import React, { useState } from "react";
import MainMenu from "./component/mainMenu";
import QuizMenu from "./component/quizMenu";
import ScoreMenu from "./component/scoreMenu";
import { MenuContext } from "./component/menuContext";

function App() {
  const [menu, setMenu] = useState("main");
  const [score, setScore] = useState(0);
  return (
    <div className="menu-container">
      <h1>Quiz App</h1>
      <MenuContext.Provider value={{ menu, setMenu, score, setScore }}>
        {menu === "main" && <MainMenu />}
        {menu === "quiz" && <QuizMenu />}
        {menu === "score" && <ScoreMenu />}
      </MenuContext.Provider>
    </div>
  );
}

export default App;
