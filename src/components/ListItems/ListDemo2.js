import React from "react";

export default function ListDemo2() {
  const employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "deepak", sal: 8000, gender: "male" },
    { eId: 103, name: "reena", sal: 7000, gender: "female" },
    { eId: 102, name: "manoj", sal: 9000, gender: "male" },
  ];
  const allKeys = Object.keys(employees[0]);
  return (
    <>
      <h2 className="text-center">Employee List</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Sl. no.</th>
            {allKeys.map((k, i) => (
              <th key={i}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, ind) => (
            <tr key={emp.eId}>
              <td>{ind + 1}</td>
              <td>{emp.eId}</td>
              <td>{emp.name}</td>
              <td>{emp.sal}</td>
              <td>{emp.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
