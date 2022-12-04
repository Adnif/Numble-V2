import React, { useContext, useState } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Equal from "./Equal";
import { boardDefault } from "../calculate";
import { appContext } from "./Game";

function Board() {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(appContext);
  return (
    <div className="board">
      <div className="row">
        <Number numberPos={0} attemptVal={0} />
        <Number numberPos={1} attemptVal={0} op />
        <Number numberPos={2} attemptVal={0} />
        <Equal />
        <Number numberPos={3} attemptVal={0} />
      </div>
      <div className="row">
        <Number numberPos={0} attemptVal={1} />
        <Number numberPos={1} attemptVal={1} op />
        <Number numberPos={2} attemptVal={1} />
        <Equal />
        <Number numberPos={3} attemptVal={1} />
      </div>
      <div className="row">
        <Number numberPos={0} attemptVal={2} />
        <Number numberPos={1} attemptVal={2} op />
        <Number numberPos={2} attemptVal={2} />
        <Equal />
        <Number numberPos={3} attemptVal={2} />
      </div>
      <div className="row">
        <Number numberPos={0} attemptVal={3} />
        <Number numberPos={1} attemptVal={3} op />
        <Number numberPos={2} attemptVal={3} />
        <Equal />
        <Number numberPos={3} attemptVal={3} />
      </div>
      <div className="row">
        <Number numberPos={0} attemptVal={4} />
        <Number numberPos={1} attemptVal={4} op />
        <Number numberPos={2} attemptVal={4} />
        <Equal />
        <Number numberPos={3} attemptVal={4} />
      </div>
      <div className="row">
        <Number numberPos={0} attemptVal={5} />
        <Number numberPos={1} attemptVal={5} op />
        <Number numberPos={2} attemptVal={5} />
        <Equal />
        <Number numberPos={3} attemptVal={5} />
      </div>
    </div>
  );
}

export default Board;
