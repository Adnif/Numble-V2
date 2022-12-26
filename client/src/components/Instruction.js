import React from "react";
import "../css/Popup.css";

function Instruction(props) {
  return props.trigger ? (
    <div className="popup text-dark">
      <div className="popup-inner">
        <button
          className="btn btn-danger btn-sm close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>
        <h1 className="mb-4">Instruction</h1>
        <p className="text-start">
        You have to make the number at the top and every most-right square is usable once, even the answers to your own equations.
        </p>
        <p className="text-start">
          Donec faucibus imperdiet augue at cursus. Sed semper enim vel orci
          placerat, vitae pharetra nibh ullamcorper. Duis volutpat vitae lorem
          ac posuere. Nam placerat turpis eu ex pulvinar volutpat. Aliquam
          rutrum luctus velit in malesuada. Etiam nunc nulla, condimentum quis
          dignissim eget, aliquet a libero. Phasellus sed nunc eu ligula aliquet
          volutpat a ut urna. Morbi auctor pharetra est at volutpat.
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Instruction;
