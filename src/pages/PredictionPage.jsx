import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Container } from '@mui/material';

const PredictionPage = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px 0' }}>
      <Container sx={{ width: '80%', margin: '0 auto' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>
          Enter Details for Prediction
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} justifyContent="center">
            {Object.keys(formData).map((key, index) => (
              <Grid item xs={12} sm={4} key={key}>
                <TextField
                  label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  type="number"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                  sx={{
                    input: { color: '#fff' },
                    label: { color: '#fff' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff', // white border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#1976d2', // blue border on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2', // blue border when focused
                      },
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#1976d2' }}>
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default PredictionPage;
