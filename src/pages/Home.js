// Import necessary modules from React
import React, {useState} from 'react';
import { Box } from '@mui/material';

// Import custom components
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

// Functional component for the home page
const Home = () => {
  // State variables to store the selected body part and the list of exercises
  const [bodyPart, setBodyPart] =  useState('all');
  const [exercises, setExercises] =  useState([]);

  // Log the selected body part to the console
  console.log(bodyPart);

  // Render the home page layout
  return (
    <Box>
      {/* Render the HeroBanner component */}
      <HeroBanner />
      {/* Render the SearchExercises component and pass necessary props */}
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      {/* Render the Exercises component and pass necessary props */}
      <Exercises 
        exercises={exercises} 
        setExercises={setExercises} 
        bodyPart={bodyPart}
      />
    </Box>
  )
}

// Export the Home component as the default export
export default Home;
