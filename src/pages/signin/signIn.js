import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Avatar,
  Paper,
} from "@mui/material";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Alert } from "@mui/material";
import logo from "../../assets/logodesign2.png";

import { Link, useNavigate } from "react-router-dom";
import { setLocalStorageItem } from "../../utils/utility";

const SignIn = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // Message to display
  const [isLoading, setLoading] = useState(null);

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
        setLocalStorageItem("user-data", res?.data, true);
        navigate("/dashboard");
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    authUser(username, password);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: " ",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container component="main" maxWidth="xs" className="sign-in-form">
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                background:
                  "linear-gradient(145deg, rgba(242,33,33,0.9277836134453782) 9%, rgba(88,159,255,0.905374649859944) 100%)",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "50px", height: "50px" }}
                src={logo}
                alt="NA"
              />
              <Typography
                variant="h6"
                noWrap
                sx={{ fontFamily: "Playwrite CU, cursive" }}
              >
                {"Stella"}
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                autoComplete="off"
                sx={{ backgroundColor: "white" }}
                value={username} // passing username here
                onChange={(e) => setUsername(e.target.value)} // for changing the current input
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                sx={{ backgroundColor: "white", borderRadius: 1 }}
                value={password} // passing password here
                onChange={(e) => setPassword(e.target.value)} // for changing the current pass input
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  color: "white",
                  borderRadius: "30px",
                  background:
                    "linear-gradient(145deg, rgba(242,33,33,0.9277836134453782) 9%, rgba(88,159,255,0.905374649859944) 100%)",
                }}
              >
                {isLoading ? (
                  <CircularProgress size={25} color="inherit" />
                ) : (
                  "Sign In"
                )}
              </Button>
              <Box display="flex" justifyContent="space-between">
                {errorMessage && (
                  <Alert severity={"error"}>{errorMessage}</Alert>
                )}
              </Box>
              <Typography variant="body2" align="center">
                Don't have an account? <Link to="/signUp">Sign Up</Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignIn;
