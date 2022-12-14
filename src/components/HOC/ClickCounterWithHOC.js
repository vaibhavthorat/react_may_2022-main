import React from "react";
import CounterHOC from "./CounterHOC";
function ClickCounterWithHOC(props) {
  return (
    <button onClick={props.increment}> Clicked {props.count} Times</button>
  );
}
export default CounterHOC(ClickCounterWithHOC);
