import React, { useContext } from 'react'
import { appContext } from './Game'

function Number({ numberPos, attemptVal, op }) {
  const { board, setBoard, currAttempt, setCurrAttempt, score } =
    useContext(appContext);
  const number = board[attemptVal][numberPos];

  const selectLastBoard = () => {

    const numberPosIndex = [0, 2];

    if (numberPosIndex.includes(currAttempt.numberPos)) {
      const newBoard = { ...board };
      newBoard[currAttempt.attempt][currAttempt.numberPos] =
        board[attemptVal][3];
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, numberPos: currAttempt.numberPos + 1 });
    }
  };

  return (
    <div className="number" id={op && "operator"} onClick={/*score ? null: codingan alif*/ selectLastBoard}>
      {number}
    </div>
  );
}

export default Number;
