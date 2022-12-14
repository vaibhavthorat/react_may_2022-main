import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AjaxDemo2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  });

  const getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };

  return (
    <>
      <div className="text-center">AjaxDemo2 - users list using Axios</div>
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
