import React from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "../calculate";
import Stopwatch from "./Stopwatch";

import "../css/Popup.css";
import Popup from "./Popup";

export const appContext = createContext();

function Game() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, numberPos: 0 });
  const [difficulty, setDifficulty] = useState(0);
  const [diffType, setDiffType] = useState("");

  // Start : Variable dan Method untuk Timer
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
  const [interv, setInterv] = useState();

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m;

  const startTimer = () => {
    runTimer();
    setInterv(setInterval(runTimer, 10));
  };

  const runTimer = () => {
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM });
  };

  const stopTimer = () => {
    clearInterval(interv);
  };
  // End : Variable dan Method untuk Timer

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Start : Popup untuk Choose Difficulty
  function chooseDificulty() {
    return (
      <div className="popup">
        <div className="popup-inner">
          <h1 className="heading-1">Select Difficulty</h1>
          <div className="row mt-4">
            <div className="col-md-4">
              <button
                className="btn btn-lg btn-success w-100 mt-3"
                onClick={() => {
                  setDifficulty(5);
                  setDiffType("easy");
                  startTimer();
                }}
              >
                Easy
              </button>
              &nbsp;
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-lg btn-warning w-100 mt-3"
                onClick={() => {
                  setDifficulty(4);
                  setDiffType("medium");
                  startTimer();
                }}
              >
                Medium
              </button>
              &nbsp;
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-lg btn-danger w-100 mt-3"
                onClick={() => {
                  setDifficulty(3);
                  setDiffType("hard");
                  startTimer();
                }}
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // End : Popup untuk Choose Difficulty

  const answer = randomNumberInRange(100, 1000);
  const [num] = useState(answer);

  // Start : Check win/lose condition
  let finished = false;

  if (currAttempt.numberPos === 0 && currAttempt.attempt > 0) {
    finished = board[currAttempt.attempt - 1][3] === num ? true : null;
  }

  let msg = "";
  let status = "";
  if (finished) {
    stopTimer();
    msg = "You Win!";
    status = "win";
    finished = true;
  } else if (currAttempt.attempt > difficulty) {
    stopTimer();
    msg = "You Lose!";
    status = "lose";
    finished = true;
  }

  function result(condition) {
    if (condition) {
      return (
        <Popup>
          <h1 className="fw-bold" style={{ fontSize: "50px" }}>
            {msg}
          </h1>
          <h2 className="mt-3" style={{ fontSize: "35px" }}>
            Total Score : {totalScore}
          </h2>
          <h2 className="mt-3" style={{ fontSize: "35px" }}>
            Finished in {time.m}m {time.s}s
          </h2>
          <a className="btn btn-primary mt-5" href="/game">
            Play Again
          </a>
        </Popup>
      );
    }
  }
  // End : Check win/lose condition

  // Start : Scoring
  let totalScore = 0;
  if (diffType === "easy") {
    totalScore += 500;
  } else if (diffType === "medium") {
    totalScore += 1000;
  } else if (diffType === "hard") {
    totalScore += 2000;
  }

  const timeScore = 36000 - time.m * 600 - time.s * 10 - time.ms;
  if (status === "win") {
    totalScore += timeScore;
  } else {
    totalScore -= 500;
  }

  const attemptScore = 6000 - currAttempt.attempt * 1000;
  totalScore += attemptScore;
  // End : Scoring

  return (
    <div className="App my-3">
      <h1 style={{ fontSize: "50px" }}>{num}</h1>
      <Stopwatch time={time} />

      {difficulty === 0 ? chooseDificulty() : null}

      {/* <button onClick={() => setShowModal(!showModal)}>OPEN</button> */}
      {/* {showModal && <Popup>{msg}</Popup>} */}
      {result(finished)}

      <appContext.Provider
        value={{ board, setBoard, currAttempt, setCurrAttempt }}
      >
        <div className="game">
          <Board difficulty={difficulty} />
          <Keyboard />
        </div>
      </appContext.Provider>
    </div>
  );
}

export default Game;
