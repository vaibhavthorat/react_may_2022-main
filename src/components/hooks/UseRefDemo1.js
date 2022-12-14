import React, { useRef, useState } from "react";

export default function UseRefDemo1() {
  const [res, setRes] = useState(0);
  const myRef1 = useRef();
  const myRef2 = useRef();

  const addition = () => {
    const val1 = +myRef1.current.value;
    const val2 = +myRef2.current.value;
    setRes(val1 + val2);
  };

  return (
    <>
      <div>UseRefDemo1</div>
      <input ref={myRef1} />
      <input ref={myRef2} />
      <button onClick={addition}>Add</button>
      <h3>Addition result is {res}</h3>
    </>
  );
}
