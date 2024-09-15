import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SignIn from "./signIn";
import SignUp from "./signUp";
import { useLocalStorageState } from "@toolpad/core";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Navigate } from "react-router-dom";


const App = () => {
  const [errorMessage, setErrorMessage] = useState(""); // Message to display
  const [isLoading, setLoading] = useState(null);
  const [userData, setUserData] = useLocalStorageState("user-data", null);
  const isLoggedIn = Boolean(userData);

  const authUser = (username, password) => {
    //start loading
    setLoading(true);
    axios
      .post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
        expiresInMins: 30,
      })
      .then((res) => {
        console.log("Login successful", res?.data);
        setErrorMessage("");
        setUserData(JSON.stringify(res?.data));
      })
      .catch((err) => {
        console.error("Login failed", err?.message);
        setErrorMessage("Login failed. Please check your credentials.");
      })
      .finally(() => {
        //stop loading
        setLoading(false);
      });

  };
 
  useEffect(() => {
    console.log(userData, "userdata");
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/signIn"
          element={
            <SignIn
              authUser={authUser}
              isLoading={isLoading}
              errorMessage={errorMessage}
            />
          }
        />
        <Route
          path="/signUp"
          element={
            <SignUp
             // registerUser={registerUser}
              isLoading={isLoading}
              errorMessage={errorMessage}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              element={<Dashboard userData={userData} setUserData={setUserData} />}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
            />
          }
        />
        {/* Add a route for not found pages */}
        <Route path="*" element={<Navigate to="/signIn" />} />
      </Routes>
    </Router>
  );
};

export default App;
