import React, { useContext } from "react";
import { MenuContext } from "./menuContext";

export default function MainMenu() {
  const { setMenu } = useContext(MenuContext);
  return (
    <div className="main">
      <h2>Main Menu</h2>
      <div>
        <button onClick={() => setMenu("quiz")}>Start Quiz</button>
      </div>
    </div>
  );
}
