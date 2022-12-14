import React from "react";

export default function EventDemo1() {
  function f1() {
    console.log("I am f1...");
  }
  return (
    <>
      <div>EventDemo1</div>
      <button onClick={f1}>btn-1</button>
      {/* <button onClick={f1()}>btn-2</button> */}
    </>
  );
}
