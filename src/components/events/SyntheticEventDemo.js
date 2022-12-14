import React from "react";

export default function SyntheticEventDemo() {
  const f1 = () => {
    console.log("div-1 clicked");
  };
  const f2 = () => {
    console.log("div-2 clicked");
  };
  const f3 = () => {
    console.log("div-3 clicked");
  };
  return (
    <>
      <div onClickCapture={f1}>
        div-1
        <div onClickCapture={f2}>
          div-2
          <div onClickCapture={f3}>div-3</div>
        </div>
      </div>
    </>
  );
}
