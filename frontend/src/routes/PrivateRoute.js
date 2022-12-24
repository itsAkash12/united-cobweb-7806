import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const authState = useSelector((state) => state.auth);

  if (!authState.data.isAuthenticated) {
    alert("Please signup first");
    return <Navigate to={"/signup"} />;
  }
  return <div>{children}</div>;
}

export default PrivateRoute;
