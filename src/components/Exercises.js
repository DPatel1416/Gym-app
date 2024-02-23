// Import necessary modules from React and Material-UI
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

// Import custom utility functions for fetching data and components
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

// Functional component for displaying exercises
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  // Effect hook to fetch exercises data based on the selected body part
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      // Fetch all exercises if bodyPart is 'all', otherwise fetch exercises for the specified body part
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Calculate the index of the last and first exercise on the current page
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // Function to handle pagination
  const paginate = (event, value) => {
    setCurrentPage(value);

    // Scroll to a specific position on the page
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  // Render a loader if there are no current exercises
  if (!currentExercises.length) return <Loader />;

  // Render the exercises component
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {/* Render pagination if there are more than 9 exercises */}
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

// Export the Exercises component as the default export
export default Exercises;
