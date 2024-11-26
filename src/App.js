// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import PredictionPage from './pages/PredictionPage'; // Import the PredictionPage component
import AboutUsPage from './pages/AboutUs';
import SettingsPage from './pages/Settings';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/prediction" element={<PredictionPage />}/>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/setting" element={<SettingsPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
