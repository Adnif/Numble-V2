import React, { useContext, useState } from "react";
import { appContext } from "./Game";

function Key({ keyVal, bigKey, ope }) {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(appContext);
  const pos = currAttempt.numberPos;
  let decision;

  if (ope == "number") {
    pos == 1 ? (decision = false) : (decision = true);
  } else if (ope == "operator") {
    pos == 1 ? (decision = true) : (decision = false);
  } else {
    decision = true;
  }

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      if (currAttempt.numberPos !== 3) return;
      const newBoard = { ...board };

      if (board[currAttempt.attempt][1] === "+") {
        const result =
          parseInt(board[currAttempt.attempt][0]) +
          parseInt(board[currAttempt.attempt][2]);

        if (result != 0) {
          // if (result >= 0) { <-- If you want to prevent negative value
          newBoard[currAttempt.attempt][3] = result;
          setBoard(newBoard);
          setCurrAttempt({ attempt: currAttempt.attempt + 1, numberPos: 0 });
        }
      } else if (board[currAttempt.attempt][1] === "-") {
        const result =
          parseInt(board[currAttempt.attempt][0]) -
          parseInt(board[currAttempt.attempt][2]);

        if (result != 0) {
          // if (result >= 0) { <-- If you want to prevent negative value
          newBoard[currAttempt.attempt][3] = result;
          setBoard(newBoard);
          setCurrAttempt({ attempt: currAttempt.attempt + 1, numberPos: 0 });
        }
      } else if (board[currAttempt.attempt][1] === "*") {
        const result =
          parseInt(board[currAttempt.attempt][0]) *
          parseInt(board[currAttempt.attempt][2]);

        if (result != 0) {
          // if (result >= 0) { <-- If you want to prevent negative value
          newBoard[currAttempt.attempt][3] = result;
          setBoard(newBoard);
          setCurrAttempt({ attempt: currAttempt.attempt + 1, numberPos: 0 });
        }
      } else if (board[currAttempt.attempt][1] === "/") {
        const result = Math.round(
          parseInt(board[currAttempt.attempt][0]) /
            parseInt(board[currAttempt.attempt][2])
        );

        if (result != 0) {
          // if (result >= 0) { <-- If you want to prevent negative value
          newBoard[currAttempt.attempt][3] = result;
          setBoard(newBoard);
          setCurrAttempt({ attempt: currAttempt.attempt + 1, numberPos: 0 });
        }
      }
    } else if (keyVal === "DELETE") {
      if (currAttempt.numberPos === 0) return;
      const newBoard = { ...board };
      newBoard[currAttempt.attempt][currAttempt.numberPos - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, numberPos: currAttempt.numberPos - 1 });
    } else {
      if (currAttempt.numberPos > 2) return;
      const newBoard = { ...board };
      newBoard[currAttempt.attempt][currAttempt.numberPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, numberPos: currAttempt.numberPos + 1 });
    }
  };
  return (
    <div
      className="key"
      id={bigKey && "big"}
      onClick={decision == true ? selectLetter : null}
    >
      {keyVal}
    </div>
  );
}

export default Key;
