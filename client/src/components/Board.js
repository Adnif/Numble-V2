import React from "react";

import Number from "./Number";
import Equal from "./Equal";

function Board(props) {
  // const { board, setBoard, currAttempt, setCurrAttempt } =
  //   useContext(appContext);
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
          tempContent.push(<Number numberPos={j} attemptVal={i} />);
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
