import React, { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
