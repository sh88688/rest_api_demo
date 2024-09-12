import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SignIn from "./signIn";
import { useLocalStorageState } from "@toolpad/core";

const App = () => {
  const [errorMessage, setErrorMessage] = useState(""); // Message to display
  const [userData, setUserData] = useLocalStorageState("user-data", {});

  /*const loadUser = (e) => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
      console.log("result ==> ", result?.data);
      if (result?.data?.length) {
        setUsers(result?.data);
      }
    });
  };*/
  const authUser = (username, password) => {
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
      });
  };
  useEffect(() => {
    console.log(userData, "userdata");
  }, []);
  return (
    <div>
      <SignIn authUser={authUser} errorMessage={errorMessage} />
    </div>
  );
};

export default App;
