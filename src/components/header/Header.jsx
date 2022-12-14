import React from "react";
import "./Header.css";

export default function Header() {
  console.log("Header rendered....");
  return (
    <h1
      style={{
        textAlign: "center",
        backgroundColor: "purple",
        color: "white",
        margin: 0,
      }}
      className="myBorder"
    >
      This is my Header
    </h1>
  );
}
