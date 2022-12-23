import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const authState = useSelector((state) => state.auth);

  if (!authState.data.isAuthenticated) {
    return <Navigate to={"/signup"} />;
  }
  return { children };
};

export default PrivateRoute;
