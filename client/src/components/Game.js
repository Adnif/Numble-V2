import React from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "../calculate";

export const appContext = createContext();

function Game() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, numberPos: 0 });

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const answer = randomNumberInRange(100, 1000);
  //const answer = 10;
  const [num, setNum] = useState(answer);

  let score;

  if (currAttempt.numberPos === 0 && currAttempt.attempt > 0) {
    // board[currAttempt.attempt - 1][3] === num ? (score = true) : null;

    score = board[currAttempt.attempt - 1][3] === num ? true : null;
    //  if(board[5][3] !== num){
    //    score = false;
    //  }
  }

  return (
    <div className="App">
      <nav>
        <h1>Numble</h1>
      </nav>

      <h1>{num}</h1>
      <h1>
        {score ? "You Win!" : currAttempt.attempt > 5 ? "You Lose!" : null}
      </h1>

      <appContext.Provider
        value={{ board, setBoard, currAttempt, setCurrAttempt }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </appContext.Provider>
    </div>
  );
}

export default Game;
