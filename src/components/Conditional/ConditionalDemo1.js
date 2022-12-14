import React from "react";

export default function ConditionalDemo1() {
  let num = 4;
  let style1 = { color: "blue" };
  let style2 = { color: "red" };
  return (
    <div>
      <div style={num % 2 === 0 ? style1 : style2}>
        Number {num} is {num % 2 === 0 ? "Even" : "Odd"}
      </div>
      <button className={`btn ${num % 2 === 0 ? "btn-success" : "btn-danger"}`}>
        add a class dynamically
      </button>
    </div>
  );
}
