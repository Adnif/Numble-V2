import React, { useContext, useState } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Equal from "./Equal";
import { boardDefault } from "../calculate";
import { appContext } from "./Game";

function Board({difficult}) {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(appContext);
  const attemp = [0,1,2,3,4,5];
  const getAttemp = attemp => {
    let content = [];
    for(let i = 0; i < difficult+1;i++){
      let conten = [];
      for(let j = 0;j < 4;j++){
        if(j==1){
          conten.push(<Number numberPos={j} attemptVal={i} op />);
        }
        else if(j==3){
          conten.push(<Equal />)
          conten.push(<Number numberPos={j} attemptVal={i} />);
        }
        else{
          conten.push(<Number numberPos={j} attemptVal={i} />);
        }
        
      }
      content.push(<div className="row">{conten}</div>);
    }
    return content;
  };
  if(difficult == 5){
    return (
      <div className="board">
        {getAttemp(attemp)}
      </div>
    );
  }
  else if(difficult == 4){
    return (
      <div className="board">
        {getAttemp(attemp)}
      </div>
    );
  }
  else if(difficult == 3){
    return (
      <div className="board">
        {getAttemp(attemp)}      
      </div>
    );
  }
}

export default Board;
