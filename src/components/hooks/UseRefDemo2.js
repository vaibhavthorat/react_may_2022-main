import React from "react";
export default function UseRefDemo2() {
  let inputRef1,inputRef2;
  const add = () => {
    const val1 = +inputRef1.value;
    const val2 = +inputRef2.value;
    alert(val1 + val2);
  };
  return  <div>
      num1: <input ref={x => { inputRef1 = x; }} />
      num2: <input ref={x => { inputRef2 = x; }} />
      <button onClick={add}>Add</button>
    </div>
}
