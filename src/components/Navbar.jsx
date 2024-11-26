import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, InputBase } from '@mui/material';
import { SupervisorAccountRounded, Search,  } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../assets/logos.webp';
const Navbar = () => {


  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#121212', boxShadow: 'none' }}>
        <Toolbar>
        <Link to="/">
    <img
      src={logo} 
      alt="Logo"
      style={{
        height: '80px',
        width: 'auto',
        cursor: 'pointer', 
      }}
    />
  </Link>

          {/* Navigation links */}
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', padding: '16px' }}>
  <Button
    component={Link}
    to="/"
    sx={{
      color: 'white',
      backgroundColor: 'black', // Black background
      borderRadius: '50px',
      padding: '12px 24px',
      margin: '0 10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      '&:hover': {
        backgroundColor: '#333', // Darker black on hover
      },
    }}
  >
    Home
  </Button>
  <Button
    component={Link}
    to="/prediction"
    sx={{
      color: 'white',
      backgroundColor: 'black', // Black background
      borderRadius: '50px',
      padding: '12px 24px',
      margin: '0 10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      '&:hover': {
        backgroundColor: '#333', // Darker black on hover
      },
    }}
  >
    Predict
  </Button>
  <Button
    component={Link}
    to="/about"
    sx={{
      color: 'white',
      backgroundColor: 'black', // Black background
      borderRadius: '50px',
      padding: '12px 24px',
      margin: '0 10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      '&:hover': {
        backgroundColor: '#333', // Darker black on hover
      },
    }}
  >
    About Us
  </Button>
  <Button
    component={Link}
    to="/setting"
    sx={{
      color: 'white',
      backgroundColor: 'black', // Black background
      borderRadius: '50px',
      padding: '12px 24px',
      margin: '0 10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      '&:hover': {
        backgroundColor: '#333', // Darker black on hover
      },
    }}
  >
    Settings
  </Button>
</Box>

          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#333', borderRadius: '20px', padding: '5px' }}>
            <InputBase sx={{ color: 'white' }} placeholder="Search..." />
            <IconButton sx={{ color: 'white' }}>
              <Search />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Button component={Link} to="/signin" variant="outlined" sx={{ color: 'white', borderColor: 'white', mr: 1 }}>
              Sign In
            </Button>
            <Button component={Link} to="/signup" variant="contained" sx={{ backgroundColor: '#1976d2' }}>
              Sign Up
            </Button>
          </Box>

          <IconButton sx={{ color: 'white', ml: 2 }}>
            <SupervisorAccountRounded />
          </IconButton>
        </Toolbar>
      </AppBar>

      
    </>
  );
};

export default Navbar;
