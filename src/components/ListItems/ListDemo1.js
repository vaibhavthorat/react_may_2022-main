import React from "react";

export default function ListDemo1() {
  const cars = ["tata", "honda", "maruti", "hundai", "toyota"];

  return (
    <>
      <h2>List Of cars</h2>
      <ul>
        {cars.map((car, ind) => (
          <li key={ind}>{car}</li>
        ))}
      </ul>
    </>
  );
}
