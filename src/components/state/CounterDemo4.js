import React, { useState } from "react";

export default function CounterDemo4() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const increment10 = () => {
    // setCount((prevCount) => prevCount + 10);
    setCount(count + 10); // this is fine aswell
  };
  const increment5 = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
  };
  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={increment10}>Increment 10 </button>
      <button onClick={increment5}>Increment 5</button>
    </>
  );
}
