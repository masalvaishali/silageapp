import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Alert,
} from '@mui/material';

import RahuriLogo from "../../Images/Rahuri-logo.png"
import BackgroundImage from "../../Images/login-background.jpeg";
import cowpic from "../../Images/cowpic.jpg"

// const STATIC_USERNAME = "icrtc_user";
// const STATIC_PASSWORD = "icrtc@MPKV_14680U";
const STATIC_USERNAME = "admin";
const STATIC_PASSWORD = "admin123";


const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
console.log("setIsAuthenticated---",setIsAuthenticated)
  const handleLogin = (e) => {

    e.preventDefault();
    if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
      setIsAuthenticated(true);
      navigate('/home'); // Navigate to the Home page after successful login
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
    style={{
      backgroundImage: `url(${cowpic})`, // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire background
        backgroundPosition: 'center', // Center the image
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      flexDirection: 'column',
    }}
  >
    <Container   sx={{
    maxWidth: '650px', // Set a custom width
    width: '650px',     // Ensure it adjusts for smaller screens
    padding: '10px',
  }}>
    <Paper
  elevation={3}
  style={{
    padding: '30px',
    position: 'relative',
    overflow: 'visible',
    backgroundColor: 'rgba(211, 211, 211, 0.9)',
    boxShadow: '0 8px 8px rgba(0, 0, 0, 0.1)', 
    borderRadius: '20px',
    
  }}
>
  {/* MPKV Logo */}
  <Box
    style={{
      position: 'absolute',
      top: '-50px',
      left: '50%',
      transform: 'translateX(-100%)',
      zIndex: 1,
    }}
  >
    <img
      src={RahuriLogo}
      alt="MPKV Logo"
      style={{
        width: '120px', // Adjust size as needed
        height: '120px',
      }}
    />
  </Box>
  <Box>
  <Typography
        variant="h4" align="center" style={{
          width: '100%', 
          marginBottom: '30px', 
          marginTop:"50px",
          fontSize:"2.2rem",
          fontWeight:"50px",
          color: '#DA291C',
        }}
      >
        Indigenous Cattle Research Cum Training Centre(ICRTC, Pune)
      </Typography>
  </Box>
  <form onSubmit={handleLogin}>
    
    <Box mb={2} 
    display="flex"
    justifyContent="center"
    alignItems="center"
   >
      <TextField
        style={{ width: '500px' }} 
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    </Box>
    <Box mb={2}
    display="flex"
    justifyContent="center"
    alignItems="center">
      <TextField
        style={{ width: '500px' }} 
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </Box>
    {error && (
      <Box mb={2}>
        <Alert severity="error">{error}</Alert>
      </Box>
    )}
    <Box textAlign="center">
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        
      >
        Login
      </Button>
    </Box>
  </form>
</Paper>

    </Container>
    </div>
  );
};

export default Login;
