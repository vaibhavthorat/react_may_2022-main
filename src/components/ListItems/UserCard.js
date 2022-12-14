import React from "react";

export default function UserCard({ user }) {
  const { name, username, email, address } = user;

  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">userName: {username}</p>
        <p className="card-text">Email: {email}</p>
        <p className="card-text">Address {address.city}</p>
      </div>
    </div>
  );
}
