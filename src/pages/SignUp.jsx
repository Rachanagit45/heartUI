// src/components/SignUp.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Box, Grid, Divider } from '@mui/material';
import { Google, Phone } from '@mui/icons-material';

const SignUp = () => {
  const [name, setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
    } else {
      console.log('Signed up with:', email, password);
    }
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
      {/* Sign-Up Container */}
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
          Sign Up
        </Typography>

        <form onSubmit={handleSignUp} style={{ width: '100%' }}>
        <TextField
            label="Full Name"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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

          {/* Sign-Up Button */}
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
            Sign Up
          </Button>
        </form>

        <Divider sx={{ margin: '16px 0', backgroundColor: '#333' }} />

        <Typography variant="body2" sx={{ color: '#ffffff' }}>
          Already have an account?{' '}
          <Link
            href="/signin" 
            sx={{ color: '#3f51b5', textDecoration: 'none' }}
          >
            Sign In
          </Link>
        </Typography>

  


      </Box>
    </Box>
  );
};

export default SignUp;
