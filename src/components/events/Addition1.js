import React, { useState } from "react";

export default function Addition1() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  //   const changeHandler1 = (event) => {
  //     setNum1(event.target.value);
  //   };
  //   const changeHandler2 = (event) => {
  //     setNum2(event.target.value);
  //   };
  const add = () => {
    setTotal(+num1 + +num2);
  };

  return (
    <>
      <div>Addition1</div>
      <input onChange={(e) => setNum1(e.target.value)} /> 
      <br />
      <input onChange={(e) => setNum2(e.target.value)} />
      <br />
      <button onClick={add}>Add</button>
      Total is {total}
    </>
  );
}
