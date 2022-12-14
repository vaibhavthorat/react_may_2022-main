import React from "react";
import CounterHOC from "./CounterHOC";
function HoverCounterWithHOC(props) {
  return (
    <button onMouseOver={props.increment}> Clicked {props.count} Times</button>
  );
}
export default CounterHOC(HoverCounterWithHOC);
