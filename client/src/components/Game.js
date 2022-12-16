import React from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "../calculate";

export const appContext = createContext();

function Game() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, numberPos: 0 });
  const [difficulty, setDifficulty] = useState(0);
  /* const [lastboardstatus, setlastboardstatus] = useState([1,1,1,1,1]) fix bug lastboard */
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function setDifficult(){
    return (
      <div>
        <h1>Select Difficulty</h1>
        <button onClick={()=>setDifficulty(5)}>Easy</button>
        <button onClick={()=>setDifficulty(4)}>Medium</button>
        <button onClick={()=>setDifficulty(3)}>Hard</button>
      </div>
    );
  }

  const answer = randomNumberInRange(100, 1000);
  const [num, setNum] = useState(answer);

  let score;
  
  if (currAttempt.numberPos === 0 && currAttempt.attempt > 0) {

    score = board[currAttempt.attempt - 1][3] === num ? true : null;
  }

  return (
    <div className="App">
      <nav>
        <h1>Numble</h1>
      </nav>
      <h1>{num}</h1>
      <h1>
        {score ? "You Win!" : currAttempt.attempt > difficulty ? "You Lose!" : null}
      </h1>
      {difficulty === 0 ? setDifficult() : null}


      <appContext.Provider
        value={{ board, setBoard, currAttempt, setCurrAttempt}} fix bug lastboard
        // value={{ board, setBoard, currAttempt, setCurrAttempt, lastboardstatus, setlastboardstatus}} fix bug lastboard
        // value={{ board, setBoard, currAttempt, setCurrAttempt, score }} fix bug finish game
      >
        <div className="game">
          <Board difficult={difficulty}/>
          <Keyboard />
        </div>
      </appContext.Provider>
    </div>
  );
}

export default Game;
