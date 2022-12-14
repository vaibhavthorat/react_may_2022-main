import React, { useState } from "react";

export default function FormDemo2() {
  const [user, setUser] = useState({
    fname: "sachin",
    lname: "tendulkar",
    profile: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        First Name:
        <input
          name="fname"
          value={user.fname}
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
        />
        Last Name:
        <input
          name="lname"
          value={user.lname}
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
        />
        Upload File:
        <input
          type="file"
          name="profile"
          value={user.profile}
          onChange={(e) => setUser({ ...user, profile: e.target.value })}
        />
        <br />
        <br />
        state data: {user.fname + " " + user.lname + " " + user.profile}
        <button>submit</button>
      </form>
    </>
  );
}
