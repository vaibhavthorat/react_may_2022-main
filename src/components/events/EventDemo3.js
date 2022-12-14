import React from "react";

export default function EventDemo3() {
  function f1() {
    console.log("I am f1...");
  }
  function add(a, b) {
    console.log(a + b);
  }
  function sub(a, b) {
    console.log(a - b);
  }
  return (
    <>
      <div>EventDemo3</div>
      <button onClick={f1}>btn-1</button>
      <button onClick={() => add(2, 3)}>btn-2</button>
      <button onClick={sub.bind(this, 10, 4)}>btn-3</button>
    </>
  );
}
