import React from "react";

function Stopwatch(props) {
  return (
    <div>
      <span>{props.time.m}m : </span>
      <span>{props.time.s}s</span>
    </div>
  );
}

export default Stopwatch;
