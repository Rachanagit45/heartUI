import React from 'react';
import { Box, Button, Typography, Grid, Container, Card, CardContent, IconButton } from '@mui/material';
import { Search, Spellcheck, FitnessCenter, Favorite, AccessibilityNew } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import doctorpic from '../assets/heartdoc.avif';

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Box
        sx={{
          marginLeft: '20px', 
          borderRadius: '12px',
          backgroundColor: 'black',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '60vh',
            borderRadius: '12px', // Added border-radius
          }}
        >
          <Box
            sx={{
              width: '50%',
              backgroundImage: `url(${doctorpic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '12px',  // Added border-radius
            }}
          >
            {/* Floating Effect with Gaps */}
            <Box
              sx={{
                width: '80%',
                height: '90%',
                backgroundImage: `url(${doctorpic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
                margin: '20px',
                backgroundColor: 'black',
              }}
            />
          </Box>

          <Box
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              textAlign: 'center',
              borderRadius: '12px',  // Added border-radius
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white' }}>
              Heart Disease Prediction
            </Typography>
            <Typography variant="h5" sx={{ marginTop: '16px', color: 'white' }}>
              Accurate predictions to help you live healthier
            </Typography>
            <Button
              component={Link}
              to="/prediction"
              variant="contained"
              sx={{
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50px',
                padding: '12px 24px',
                margin: '0 10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  backgroundColor: 'lightgreen',
                  transform: 'translateY(-6px)',
                  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
                },
                marginTop: '30px',
              }}
            >
              Start Prediction
            </Button>
          </Box>
        </Box>

        {/* Key Features */}
        <Container sx={{ marginTop: '40px' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '32px' }}>
            Key Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: '#333', color: 'white' }}>
                <CardContent>
                  <Spellcheck sx={{ fontSize: '48px', color: '#ff1744' }} />
                  <Typography variant="h6" sx={{ marginTop: '16px' }}>Accurate Prediction</Typography>
                  <Typography variant="body2" sx={{ marginTop: '8px' }}>
                    Predicts heart disease with high accuracy.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: '#333', color: 'white' }}>
                <CardContent>
                  <Favorite sx={{ fontSize: '48px', color: '#ff4081' }} />
                  <Typography variant="h6" sx={{ marginTop: '16px' }}>Easy to Use</Typography>
                  <Typography variant="body2" sx={{ marginTop: '8px' }}>
                    Simple interface for quick and easy predictions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: '#333', color: 'white' }}>
                <CardContent>
                  <FitnessCenter sx={{ fontSize: '48px', color: '#76ff03' }} />
                  <Typography variant="h6" sx={{ marginTop: '16px' }}>Instant Results</Typography>
                  <Typography variant="body2" sx={{ marginTop: '8px' }}>
                    Get results in seconds after entering the data.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* How It Works */}
        <Box sx={{ backgroundColor: '#222', padding: '40px 0', marginTop: '60px' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', color: 'white', marginBottom: '32px' }}>
            How It Works
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <IconButton sx={{ fontSize: '60px', color: '#ff1744' }}>
                <Search />
              </IconButton>
              <Typography variant="h6" sx={{ marginTop: '16px' }}>Step 1: Enter Your Data</Typography>
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
                Input basic health information for an accurate prediction.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <IconButton sx={{ fontSize: '60px', color: '#ff4081' }}>
                <AccessibilityNew />
              </IconButton>
              <Typography variant="h6" sx={{ marginTop: '16px' }}>Step 2: Analyze</Typography>
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
                Our AI model will analyze your data using advanced algorithms.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <IconButton sx={{ fontSize: '60px', color: '#76ff03' }}>
                <Spellcheck />
              </IconButton>
              <Typography variant="h6" sx={{ marginTop: '16px' }}>Step 3: Get Results</Typography>
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
                Receive instant results and recommendations based on your input.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Footer Section */}
        <Box sx={{ backgroundColor: '#121212', padding: '20px 0', marginTop: '40px' }}>
          <Container sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'white' }}>
              © 2024 Heart Disease & Diabetes Prediction System | All Rights Reserved
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
