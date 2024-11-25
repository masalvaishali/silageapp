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

const STATIC_USERNAME = "admin";
const STATIC_PASSWORD = "admin123";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      flexDirection: 'column',
    }}
  >
    {/* Top-left and top-right images */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '10px 20px',
        position: 'absolute',
        top: '10px',
      }}
    >
      <img
        src={RahuriLogo}
        alt="Left Logo"
        style={{
          width: '150px',
          height: '150px',
        }}
      />
      <Typography
        // variant="h4"
        // component="h2"
        // style={{
        //   textAlign: 'center',
        //   flexGrow: 1,
        //   margin: '0 20px',
        //   color: '#333',
        //   fontWeight: 'bold',
        // }}
        variant="h3" align="center" style={{
          marginBottom: '20px', fontWeight: 'bold',
          color: '#1976d2',
        }}
      >
        Sensor Dashboard
      </Typography>
      <img
        src={RahuriLogo}
        alt="Right Logo"
        style={{
          width: '150px',
          height: '150px',
        }}
      />
    </div>
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '30px' }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h5" component="h1">
            Login
          </Typography>
        </Box>
        <form onSubmit={handleLogin}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
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
              fullWidth
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
