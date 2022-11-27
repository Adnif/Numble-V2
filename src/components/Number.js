import React, { useContext } from 'react'
import { appContext } from '../App'

function Number({numberPos, attemptVal, op}) {
    const { board, setBoard, currAttempt, setCurrAttempt } = useContext(appContext);
    const number = board[attemptVal][numberPos];

    const selectLastBoard = () => {
      //if(currAttempt.attempt > 2) return;
      const newBoard = {...board};
      newBoard[currAttempt.attempt][currAttempt.numberPos] = board[attemptVal][3];
      setBoard(newBoard);
      setCurrAttempt({...currAttempt, numberPos: currAttempt.numberPos + 1});
    }

  return (
    <div className='number' id = {op && "operator"} onClick = { selectLastBoard }>{number}</div>
  )
}

export default Number