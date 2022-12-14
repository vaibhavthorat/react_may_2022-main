import React from "react";

export default function Child1({ name }) {
  return (
    <>
      <div>Child1</div>
      <div>my parent's data name is: {name}</div>
    </>
  );
}
