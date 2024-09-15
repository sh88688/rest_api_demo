import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "./utils/utility";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = getLocalStorageItem("user-data", true);
  return isLoggedIn ? element : <Navigate to="/signIn" />;
};

export default PrivateRoute;
