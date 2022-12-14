import React from "react";

function MemoDemo2(props) {
  console.log("MemoDemo2 rendered...");

  return (
    <>
      <div>MemoDemo2</div>
      <div>cars from my parent are {props.cars.join(",")}</div>
    </>
  );
}
export default React.memo(MemoDemo2);
