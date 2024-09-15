import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, element }) => {
  return isLoggedIn ? element : <Navigate to="/signIn" />;
};

export default PrivateRoute;
