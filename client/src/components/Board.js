import React, { useContext, useState } from "react";
import { appContext } from "./Game";
import Number from "./Number";
import Equal from "./Equal";

function Board(props) {
  const { board, setBoard, currAttempt, setCurrAttempt, lastBoardStatus, setLastBoardStatus } = useContext(appContext);

  function lastClicked(index){
      const check = lastBoardStatus.map(
        (c, i) => {
          if(i == index){
            return c = board[index][3];
          }else{
            return c;
          }
        }
      );
      setLastBoardStatus(check);
    }

    const selectLastBoard = (attemptVal) => {
  
      const numberPosIndex = [0, 2];
      if(lastBoardStatus[attemptVal] == 1){
        if (numberPosIndex.includes(currAttempt.numberPos)) {
          const newBoard = { ...board };
          newBoard[currAttempt.attempt][currAttempt.numberPos] =
            board[attemptVal][3];
          setBoard(newBoard);
          setCurrAttempt({ ...currAttempt, numberPos: currAttempt.numberPos + 1 });
          lastClicked(attemptVal)
        }
      }
      
    }; 

  const attempt = [0, 1, 2, 3, 4, 5];

  const getAttempt = (attempt) => {
    let content = [];

    for (let i = 0; i < props.difficulty + 1; i++) {
      let tempContent = [];

      for (let j = 0; j < 4; j++) {
        if (j === 1) {
          tempContent.push(<Number numberPos={j} attemptVal={i} op />);
        } else if (j === 3) {
          tempContent.push(<Equal />);
          tempContent.push(<Number numberPos={j} attemptVal={i} onClick={board[currAttempt.attempt][currAttempt.numberPos] !=board[i][3] ? ()=>selectLastBoard(i): null}/>);
        } else {
          tempContent.push(<Number numberPos={j} attemptVal={i} />);
        }
      }
      content.push(<div className="row">{tempContent}</div>);
    }

    return content;
  };

  if (props.difficulty === 5) {
    return <div className="board">{getAttempt(attempt)}</div>;
  } else if (props.difficulty === 4) {
    return <div className="board">{getAttempt(attempt)}</div>;
  } else if (props.difficulty === 3) {
    return <div className="board">{getAttempt(attempt)}</div>;
  }
}

export default Board;
