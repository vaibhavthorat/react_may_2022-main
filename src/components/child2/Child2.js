import React from "react";

export default function Child2({ name, setName }) {
  return (
    <>
      <div>Child2</div>
      <div>my parent's data name is: {name}</div>
      <button onClick={() => setName("Rahul")}>update Name</button>
    </>
  );
}
