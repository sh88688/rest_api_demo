import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SignIn from "./signIn";
import { useLocalStorageState } from "@toolpad/core";
import Dashboard from "./dashboard";

const App = () => {
  const [errorMessage, setErrorMessage] = useState(""); // Message to display
  const [isLoading, setLoading] = useState(null);
  const [userData, setUserData] = useLocalStorageState("user-data", null);
  const isLoggedIn = JSON.parse(userData);

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
  const logoutUser = () => {
    setLoading(true);
    setTimeout(() => {
      setUserData(null);
      setLoading(false);
    }, 1500);
  };
  useEffect(() => {
    console.log(userData, "userdata");
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <Dashboard logoutUser={logoutUser} userInfo={isLoggedIn} isLoading={isLoading}/>
      ) : (
        <SignIn
          authUser={authUser}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default App;
