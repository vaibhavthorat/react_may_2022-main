import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  const doSomethingAndGoToHome = () => {
    console.log("Doing Something.....");
    navigate("/home");
  };
  return (
    <>
      <div>AboutUs Component</div>
      <a href="/home">Go To Home</a> &nbsp;
      <Link to="/home">Go To Home</Link> &nbsp;
      <button onClick={doSomethingAndGoToHome}>
        Do Something & Go To Home
      </button>
      <br/>
      <button onClick={() => navigate(-1)}>Previous</button>
      <button onClick={() => navigate(1)}>Next</button>
    </>
  );
}
