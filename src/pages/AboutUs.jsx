import React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import aboutUs from '../assets/aboutUs.jpg';
import saurav from "../assets/saurav.jpg";
import sulav from "../assets/sulav.jpg";
import rachana from "../assets/rachana.jpg";
const AboutUsPage = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Box
        sx={{
          backgroundImage: `url(${aboutUs})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >

      </Box>

      <Box sx={{ padding: '40px 0', backgroundColor: '#121212', color: 'white' }}>
        <Container>
          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '24px' }}>
            Empowering your health with cutting-edge AI predictions
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            We are dedicated to providing accurate and timely predictions for heart disease and diabetes using the power of AI. 
            Our mission is to help individuals make informed decisions about their health and take preventive measures early on.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ marginTop: '40px' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Card sx={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '16px' }}>
              <CardContent>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '16px' }}>
                  We are dedicated to providing accurate and timely predictions for heart disease and diabetes using the power of AI. 
                  Our mission is to help individuals make informed decisions about their health and take preventive measures early on.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '16px' }}>
              <CardContent>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '16px' }}>
                  To revolutionize healthcare through technology, providing people with tools to predict, prevent, and manage their health conditions. 
                  We aim to bring accessible, AI-driven healthcare to everyone, everywhere.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ marginTop: '60px' }} />

      {/* Meet Our Team */}
      <Box sx={{ backgroundColor: '#222', padding: '40px 0' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'white', marginBottom: '32px' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Avatar alt="Sulav Karki" src={sulav} sx={{ width: 120, height: 120, margin: '0 auto' }} />
            <Typography variant="h6" sx={{ marginTop: '16px' }}>Sulav Karki</Typography>
            <Typography variant="body2" sx={{ marginTop: '8px' }}>
            A data scientist who brings advanced AI knowledge to our prediction algorithms.
             
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Avatar alt="Rachana Shrestha" src={rachana} sx={{ width: 120, height: 120, margin: '0 auto' }} />
            <Typography variant="h6" sx={{ marginTop: '16px' }}>Rachana Shrestha</Typography>
            <Typography variant="body2" sx={{ marginTop: '8px' }}>
            An engineer focused on making the technology behind our app seamless and user-friendly.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Avatar alt="Saurav Kathayat" src={saurav} sx={{ width: 120, height: 120, margin: '0 auto' }} />
            <Typography variant="h6" sx={{ marginTop: '16px' }}>Surav Kathayeat</Typography>
            <Typography variant="body2" sx={{ marginTop: '8px' }}>
            A passionate healthcare professional who plays a vital role in shaping our mission.
             
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Our Story */}
      <Container sx={{ marginTop: '40px' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '32px' }}>
          Our Story
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '32px' }}>
          The idea for the Heart Disease & Diabetes Prediction App was born from the increasing demand for accessible health tools that empower individuals to take control of their health. 
          Our founders, driven by a passion for healthcare and technology, set out to create an app that would not only predict potential health risks but also provide users with meaningful insights to improve their lifestyle.
        </Typography>
 
      </Container>
      <Box sx={{ backgroundColor: '#121212', padding: '20px 0', marginTop: '40px' }}>
          <Container sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'white' }}>
              © 2024 Heart Disease & Diabetes Prediction System | All Rights Reserved
            </Typography>
          </Container>
        </Box>


    </Box>
  );
};

export default AboutUsPage;
