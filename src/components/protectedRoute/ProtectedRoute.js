import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const role = "teacher"; // role should be colled when user logs in
  if (role !== "teacher") {
    alert("you are not allowed to go to this route");
    return <Navigate to="/home" replace />;
  }
  return children;
}
