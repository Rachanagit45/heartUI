import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, InputBase } from '@mui/material';
import { Menu, Search, RssFeed } from '@mui/icons-material';
import SideDrawer from './SideDrawer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#121212', boxShadow: 'none' }}>
        <Toolbar>
          {/* Menu Icon */}
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => toggleDrawer(true)}>
            <Menu sx={{ fontSize: 30 }} />
          </IconButton>

          {/* Navigation links */}
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
            <Button sx={{ color: 'white' }}>Features</Button>
            <Button sx={{ color: 'white' }}>Highlights</Button>
            <Button sx={{ color: 'white' }}>FAQ</Button>
          </Box>

          {/* Search bar */}
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#333', borderRadius: '20px', padding: '5px' }}>
            <InputBase sx={{ color: 'white' }} placeholder="Search..." />
            <IconButton sx={{ color: 'white' }}>
              <Search />
            </IconButton>
          </Box>

          {/* Sign in / Sign up buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Button component={Link} to="/signin" variant="outlined" sx={{ color: 'white', borderColor: 'white', mr: 1 }}>
              Sign In
            </Button>
            <Button component={Link} to="/signup" variant="contained" sx={{ backgroundColor: '#1976d2' }}>
              Sign Up
            </Button>
          </Box>

          {/* RSS Icon */}
          <IconButton sx={{ color: 'white', ml: 2 }}>
            <RssFeed />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* SideDrawer Component */}
      <SideDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </>
  );
};

export default Navbar;
