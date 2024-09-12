import React,{useState} from 'react';
import { TextField, Button, Box, Typography, Container, Avatar, Paper, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignIn = ({authUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

   authUser(username,password);
    };
  

  return (
    
    <Box 
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 4 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ backgroundColor: 'white', borderRadius: 1 }}
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
                autoComplete="current-password"
                sx={{ backgroundColor: 'white', borderRadius: 1 }}
                value={password} // passing password here
                onChange={(e) => setPassword(e.target.value)} // for changing the current pass input
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
              >
                Sign In
              </Button>
              <Box display="flex" justifyContent="space-between">
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
    
  );
};

export default SignIn;

