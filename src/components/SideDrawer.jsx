// src/components/SideDrawer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import profile from '../assets/profile.jpg';
import { Drawer, List, ListItem, ListItemText, Divider, Avatar, Typography } from '@mui/material';
import { Home, Info, Build, ContactMail, Settings } from '@mui/icons-material';

const SideDrawer = ({ open, onClose }) => {
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path); 
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          backgroundColor: '#121212', 
          color: '#ffffff',
          paddingTop: '40px', 
        },
      }}
    >
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <Avatar
          alt="Profile Image"
          src={profile}
          sx={{ width: 80, height: 80, marginBottom: '8px' }}
        />
        <Typography variant="h6">John Doe</Typography>
        <Typography variant="body2">johndoe@example.com</Typography>
      </div>

      <Divider sx={{ backgroundColor: '#333', margin: '10px 0' }} /> 
      <List>
        <ListItem
          button
          onClick={() => handleNavigation('/')} 
          sx={{
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          <Home sx={{ marginRight: '16px' }} />
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/about')} 
          sx={{
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          <Info sx={{ marginRight: '16px' }} />
          <ListItemText primary="About" />
        </ListItem>

        <ListItem
          button
          onClick={() => handleNavigation('/contact')} 
          sx={{
            '&:hover': {
              backgroundColor: '#333', 
            },
          }}
        >
          <ContactMail sx={{ marginRight: '16px' }} />
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation('/setting')} 
          sx={{
            '&:hover': {
              backgroundColor: '#333', 
            },
          }}
        >
          <Settings sx={{ marginRight: '16px' }} />
          <ListItemText primary="Settings" />
        </ListItem>
      </List>

      <Divider sx={{ backgroundColor: '#333', margin: '10px 0' }} /> 
    </Drawer>
  );
};

export default SideDrawer;
