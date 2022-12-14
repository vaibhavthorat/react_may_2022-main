import React, { useEffect, useState } from "react";

export default function UseEffectDemo1() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  useEffect(() => {
    console.log("A changed");
  }, [a]);

  useEffect(() => {
    console.log("B changed");
  }, [b]);

  console.log("render....");
  return (
    <>
      <div>UseEffectDemo1</div>
      <h2>A value is {a}</h2>
      <h2>B value is {b}</h2>
      <h2>C value is {c}</h2>
      <button onClick={() => setA(a + 1)}>Update-A</button>
      <button onClick={() => setB(b + 1)}>Update-B</button>
      <button onClick={() => setC(c + 1)}>Update-c</button>
    </>
  );
}
