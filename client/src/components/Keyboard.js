import React, { useContext, useState } from "react";
import { appContext } from "./Game";
import Key from "./Key";

function Keyboard() {
  const keys1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const keys2 = ["+", "-", "*", "/"];

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyVal={key} ope={"number"} />;
        })}
      </div>
      <div className="line2">
        <Key keyVal={"ENTER"} bigKey ope={"button"} />
        {keys2.map((key) => {
          return <Key keyVal={key} ope={"operator"} />;
        })}
        <Key keyVal={"DELETE"} bigKey ope={"button"} />
      </div>
    </div>
  );
}

export default Keyboard;
