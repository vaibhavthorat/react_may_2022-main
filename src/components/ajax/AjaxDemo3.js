import React, { useEffect, useState } from "react";
import client from "./Client";

export default function AjaxDemo3() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  });

  const getUsers = () => {
    client.get("/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };

  return (
    <>
      <div className="text-center">
        AjaxDemo3 - users list using Axios instance
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
