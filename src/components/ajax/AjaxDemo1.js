import React, { useEffect, useState } from "react";

export default function AjaxDemo1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  });

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  };

  return (
    <>
      <div className="text-center">AjaxDemo1 - users list</div>
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
