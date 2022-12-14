import React, { useState } from "react";
import Child1 from "../child1/Child1";
import Child2 from "../child2/Child2";

export default function Parent() {
  const [name, setName] = useState("sachin");

  return (
    <>
      <div className="container" style={{ border: "5px solid red" }}>
        <div className="row">
          <div>I am Parent Comp</div>
          <div>my own data name is: {name}</div>
          <hr />
          <div className="col-6">
            <Child1 name={name}></Child1>
          </div>
          <div className="col-6">
            <Child2 name={name} setName={setName}></Child2>
          </div>
        </div>
      </div>
    </>
  );
}
