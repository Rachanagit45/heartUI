import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Grid, Switch, FormControlLabel, Divider } from '@mui/material';
import { Settings, MailOutline } from '@mui/icons-material';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(true); // Start with dark mode enabled
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [inquiry, setInquiry] = useState('');

  // Handle dark mode toggle
  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  // Handle notification toggle
  const handleNotificationChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  // Handle inquiry form submission
  const handleInquirySubmit = (e) => {
    e.preventDefault();
    alert('Your inquiry has been submitted: ' + inquiry);
    setInquiry('');
  };

  return (
    <Box sx={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Container sx={{ padding: '40px 0' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px' }}>
          Settings
        </Typography>

        {/* Dark Mode Toggle */}
        <Box sx={{ marginBottom: '40px' }}>
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>
            Dark Mode
          </Typography>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={handleDarkModeChange} />}
            label={darkMode ? 'Dark Mode On' : 'Dark Mode Off'}
            sx={{ color: 'white' }}
          />
        </Box>

        {/* Notifications Settings */}
        <Box sx={{ marginBottom: '40px' }}>
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>
            Notifications
          </Typography>
          <FormControlLabel
            control={<Switch checked={notificationsEnabled} onChange={handleNotificationChange} />}
            label={notificationsEnabled ? 'Notifications Enabled' : 'Notifications Disabled'}
            sx={{ color: 'white' }}
          />
        </Box>

        <Divider sx={{ marginBottom: '40px', backgroundColor: '#444' }} />

        {/* Inquiry Form */}
        <Box component="form" onSubmit={handleInquirySubmit} sx={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px' }}>
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            Inquiry Form
          </Typography>

          <TextField
  fullWidth
  multiline
  rows={4}
  variant="outlined"
  label="Enter your inquiry"
  value={inquiry}
  onChange={(e) => setInquiry(e.target.value)}
  sx={{
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#444', // Dark background for the input
      '& fieldset': {
        borderColor: '#666', // Border color of the input field
      },
      '&:hover fieldset': {
        borderColor: '#fff', // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2196f3', // Border color when focused
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white', // Label text color
    },
    '& .MuiInputBase-input': {
      color: 'white', // Input text color
    },
    '& .MuiFormHelperText-root': {
      color: 'white', // Helper text color (if any)
    },
    '& .MuiOutlinedInput-root .MuiInputAdornment-root .MuiInputAdornment-positionStart': {
      color: 'white', // Adornment color (e.g., icon)
    },
    '& .MuiOutlinedInput-root input::placeholder': {
      color: '#888', // Placeholder (hint text) color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#2196f3', // Label color when input is focused
    },
  }}
/>


          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: '100%',
              backgroundColor: '#3f51b5',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Submit Inquiry
          </Button>
        </Box>

        <Divider sx={{ margin: '40px 0', backgroundColor: '#444' }} />

        {/* Other Settings Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            Other Settings
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Button
                variant="outlined"
                sx={{
                  width: '100%',
                  backgroundColor: '#333',
                  color: 'white',
                  borderColor: '#444',
                  '&:hover': {
                    backgroundColor: '#555',
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'white',
                  },
                }}
                startIcon={<MailOutline />}
              >
                Contact Support
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Button
                variant="outlined"
                sx={{
                  width: '100%',
                  backgroundColor: '#333',
                  color: 'white',
                  borderColor: '#444',
                  '&:hover': {
                    backgroundColor: '#555',
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'white',
                  },
                }}
                startIcon={<Settings />}
              >
                Advanced Settings
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SettingsPage;
