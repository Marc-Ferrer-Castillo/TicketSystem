// src/components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import logo from '../logo.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{ padding: 3 }}
      >
        <Box position="absolute" top={16} left={16}>
          <img src={logo} className="App-logo" alt="logo" style={{ width: '50px', height: '50px' }}/>
        </Box>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#ffffff', textAlign: 'center' }}>
            Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputLabelProps={{
              style: { color: '#ffffff' },
            }}
            InputProps={{
              style: { color: '#ffffff' },
              sx: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1e88e5',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1e88e5',
                },
              },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputLabelProps={{
              style: { color: '#ffffff' },
            }}
            InputProps={{
              style: { color: '#ffffff' },
              sx: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1e88e5',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1e88e5',
                },
              },
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
