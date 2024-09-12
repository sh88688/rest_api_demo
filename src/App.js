import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SignIn from './signIn';
import { Alert} from '@mui/material';


const App = () => {
  const [message, setMessage] = useState(""); // Message to display
  const [alertType, setAlertType] = useState(""); // Alert type: "success" or "error"
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
      setMessage("Login successful!"); 
      setAlertType("success"); 
      
    })
    .catch(err => {
      console.error("Login failed", err.message);
      setMessage("Login failed. Please check your credentials."); 
      setAlertType("error");
      
    });
  };
  return (
      <div>
       <SignIn authUser={authUser} />
       {/* Conditionally render Alert only if there's a 'message' (truthy(not null or undef))*/}
      {message && (
        <Alert severity={alertType}>
          {message}
        </Alert>
      )}
      </div>
  );
};

export default App;
