import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Avatar,
  Paper,
  Link,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { Alert } from "@mui/material";
import backgroundImage from "./assets/background4.jpg";

const SignUp = ({ registerUser, isLoading, errorMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    registerUser(username, password);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container component="main" maxWidth="xs" className="sign-up-form">
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
              <PersonAddOutlinedIcon />
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
                style={{ width: "56px", height: "56px" }}
                src="https://cryptologos.cc/logos/uniswap-uni-logo.png"
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                sx={{ backgroundColor: "white" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="off"
                sx={{ backgroundColor: "white" }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                  "Sign Up"
                )}
              </Button>
              <Box display="flex" justifyContent="space-between">
                {errorMessage && (
                  <Alert severity={"error"}>{errorMessage}</Alert>
                )}
              </Box>
              <Typography variant="body2" align="center">
                Already a user? <Link to="/signIn">Sign In</Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;
