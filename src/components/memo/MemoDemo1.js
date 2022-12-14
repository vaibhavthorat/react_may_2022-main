import React, { useState } from "react";
import MemoDemo2 from "./MemoDemo2";
import MemoDemo3 from "./MemoDemo3";

export default function MemoDemo1() {
  console.log('MemoDemo1 rendered...');

  const [counter, setCounter] = useState(0);
  const [cars, setCars] = useState(["tata", "honda", "maruti"]);

  return (
    <>
      <div>MemoDemo1</div>
      <div>Counter is {counter}</div>
      <div>cars are {cars.join(',')}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <button onClick={() =>{setCars([...cars,'hundai'])}}>add a new car</button>
      <br />
      =====================================================================
      <MemoDemo2 cars={cars}></MemoDemo2>
      =====================================================================
      <MemoDemo3 counter={counter}></MemoDemo3>
    </>
  );
}
