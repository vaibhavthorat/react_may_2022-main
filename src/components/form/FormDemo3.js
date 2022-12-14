import React, { useState } from "react";

export default function FormDemo3() {
  const [isValid, setIsValid] = useState(true);
  const initialState = {
    fname: ["sachin", ""],
    lname: ["tendulkar", ""],
  };
  const [user, setUser] = useState(initialState);

  const f1 = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={f1}>
      First Name:
      <input
        name="fname"
        value={user.fname[0]}
        onChange={(e) => {
          user.fname[0] = e.target.value;
          if (user.fname[0].length === 0) {
            user.fname[1] = "Please fill fName";
            setIsValid(false);
          } else if (user.fname[0].length < 5) {
            user.fname[1] = "minimum 5 characters required";
            setIsValid(false);
          } else {
            user.fname[1] = "";
            setIsValid(true);
          }
          setUser({ ...user });
        }}
      />
      <span className="text-danger">{user.fname[1]}</span>
      Last Name:
      <input
        name="lname"
        value={user.lname[0]}
        onChange={(e) => {
          user.lname[0] = e.target.value;
          if (user.lname[0].length === 0) {
            user.lname[1] = "Please fill lName";
            setIsValid(false);
          } else if (user.lname[0].length < 5) {
            user.lname[1] = "minimum 5 characters required";
            setIsValid(false);
          } else {
            user.lname[1] = "";
            setIsValid(true);
          }
          setUser({ ...user });
        }}
      /> <span className="text-danger">{user.lname[1]}</span>
      <br />
      <br />
      state data: {user.fname[0] + " " + user.lname[0]}
      <button disabled={!isValid}>submit</button>
    </form>
  );
}
