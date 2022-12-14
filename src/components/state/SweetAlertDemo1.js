import React from "react";
import Swal from "sweetalert2";

export default function SweetAlertDemo1() {
  const f1 = () => {
    alert("hello.....");
  };
  const f2 = () => {
    Swal.fire("The Title", "The message", "success");
  };
  return (
    <>
      <div>SweetAlertDemo1</div>
      <button onClick={f1}>click me </button>
      <button onClick={f2}>click me </button>
    </>
  );
}
