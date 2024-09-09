import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [usersName, setUsersName] = useState();
  const [usersPassword, setUsersPassword] = useState();
  //ON LOad

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
  //     console.log("result ==> ", result?.data);
  //     if (result?.data?.length) {
  //       setUsers(result?.data);
  //     }
  //   });
  // }, []);

  //On Btn Click
  const loadUser = (e) => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
      console.log("result ==> ", result?.data);
      if (result?.data?.length) {
        setUsers(result?.data);
      }
    });
  };
  const authUser = (e) => {
   axios.post('https://dummyjson.com/auth/login', {
        
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, // optional, defaults to 60
  })
    .then(res => {console.log(res)})
    
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Home Page Branch : Prashant</p>
        <button onClick={authUser}>{"Load User"}</button>
        {/* {users?.map((userObj) => {
          return <div>{userObj?.name}</div>;
        })} */}
        <ol>
          {users?.map((userObj) => {
            return <li>{userObj?.name}</li>;
          })}
        </ol>
      </header>
    </div>
  );
};

export default App;
