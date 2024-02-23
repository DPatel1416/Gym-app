// Importing necessary modules from React and React Router
import React from 'react';
import { Route, Routes} from 'react-router-dom';
// Importing Box component from Material-UI
import {Box} from '@mui/material';

// Importing CSS file for additional styling
import './App.css';
// Importing custom components
import ExerciseDetail from './pages/ExerciseDetail.js';
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

// Functional component representing the main App
const App = () => {
  return (
    // Using Box component for layout styling
    <Box width="400px" sx={{ width: { x1: '1488px'}}} m="auto">
        {/* Rendering Navbar component */}
        <Navbar/>
        {/* Using React Router's Routes and Route components for routing */}
        <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home />} />
            {/* Route for the ExerciseDetail page with dynamic ID */}
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        {/* Rendering Footer component */}
        <Footer/>
    </Box>
  )
}

// Exporting the App component as the default export
export default App;
