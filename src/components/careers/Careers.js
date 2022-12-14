import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Careers() {
  return (
    <>
      <div>Careers</div>

      <div className="courses-nav">
        <Link to="/careers/permanent">permanent</Link>&nbsp;
        <Link to="/careers/contract">Contract</Link>
      </div>
      <Outlet />
    </>
  );
}
