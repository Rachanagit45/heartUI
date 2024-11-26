import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Container, CircularProgress, Tooltip } from '@mui/material';

const PredictionPage = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol:"",
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    // Simulate a delay for prediction
    setTimeout(() => {
      console.log(formData);
      setLoading(false); // Stop loading after form submission
    }, 2000);
  };

  return (
    <Box sx={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container sx={{ width: '100%', maxWidth: '900px', padding: '40px', backgroundColor: '#1d1d1d', borderRadius: '15px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px', color: '#fff', fontWeight: 700 }}>
          Enter Details for Prediction
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {Object.keys(formData).map((key, index) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Tooltip title={`Enter the value for ${key.replace(/([A-Z])/g, ' $1')}`} placement="top" arrow>
                  <TextField
                    label={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
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
                </Tooltip>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#1976d2',
                color: '#fff',
                padding: '12px 25px',
                borderRadius: '30px',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
                transition: 'background-color 0.3s ease',
              }}
              disabled={loading} // Disable the button during loading
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Predict'}
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default PredictionPage;
