import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SignIn from './signIn';

const App = () => {

  /*const loadUser = (e) => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
      console.log("result ==> ", result?.data);
      if (result?.data?.length) {
        setUsers(result?.data);
      }
    });
  };*/
  const authUser = (username, password) => {
    axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password,
        expiresInMins: 30, 
    })
    .then(res => {
      console.log("Login successful", res.data);
      // Handle successful login
    })
    .catch(err => {
      console.error("Login failed", err.message);
      // Handle error 
    });
  };
  return (
      <div>
       <SignIn authUser={authUser} />
      </div>
  );
};

export default App;
