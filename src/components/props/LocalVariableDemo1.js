import React from "react";

export default function LocalVariableDemo1() {
  let count = 0;

  const increment = () => {
    count = count + 1;
    console.log(count);
  };
  console.log("component rendered....");

  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
