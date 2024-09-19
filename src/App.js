import React from "react";
import SignIn from "./pages/signin/signIn";
import SignUp from "./pages/signup/signUp";
import Dashboard from "./pages/dashboard/dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "./utils/utility";
import "./App.css";

const App = () => {
  const isLoggedIn = getLocalStorageItem("user-data", true);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <SignIn />}
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        {/* Add a route for not found pages */}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/dashboard" : "/"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
