import React from "react";
import UserCard from "./UserCard";
import users from "./users.json";

export default function ListDemo3() {
  return (
    <>
      <h3 className="text-center">Users List</h3>

      <div className="container">
        <div className="row">
          {users.map((user, ind) => {
            return (
              <div className="col-3" key={ind}>
                <UserCard user={user}></UserCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
