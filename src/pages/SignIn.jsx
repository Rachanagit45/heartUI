// src/components/SignIn.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Box, Grid, Divider } from '@mui/material';
import { Google, Phone } from '@mui/icons-material';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Signed in with:', email, password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#121212',
        color: '#ffffff',
        padding: '16px',
      }}
    >
      {/* Sign-In Container */}
      <Box
        sx={{
          backgroundColor: '#1f1f1f',
          padding: '32px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '16px', color: '#ffffff' }}>
          Sign In
        </Typography>

        <form onSubmit={handleSignIn} style={{ width: '100%' }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: '#333',
              borderRadius: '4px',
              color: '#fff',
              '& .MuiInputLabel-root': {
                color: '#ffffff', // White label color
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#fff',
                },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              backgroundColor: '#333',
              borderRadius: '4px',
              color: '#fff',
              '& .MuiInputLabel-root': {
                color: '#ffffff', // White label color
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#fff',
                },
              },
            }}
          />

          {/* Sign-In Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#3f51b5',
              color: '#ffffff',
              padding: '12px',
              marginTop: '16px',
              '&:hover': {
                backgroundColor: '#303f9f',
              },
            }}
          >
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <Divider sx={{ margin: '16px 0', backgroundColor: '#333' }} />

        {/* Sign-Up Text and Links */}
        <Typography variant="body2" sx={{ color: '#ffffff' }}>
          Don't have an account?{' '}
          <Link
            href="/signup" // Link to the Sign-Up page (this should match the route you have for Sign-Up)
            sx={{ color: '#3f51b5', textDecoration: 'none' }}
          >
            Sign Up
          </Link>
        </Typography>




           

      </Box>
    </Box>
  );
};

export default SignIn;
