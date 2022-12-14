import React, { useEffect, useState } from "react";

export default function CounterDemo2() {
  console.log("render called...");
  // const [val,setVal] = useState(Initial value) hook - JS function
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); //async
    console.log(count);
  };
  useEffect(() => {
    console.log("after update ", count); // to see updated value
  });
  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
