// Import necessary modules from React and React Router
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

// Functional component for displaying an exercise card
const ExerciseCard = ({ exercise }) => {
  return (
    // Link to the exercise detail page
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      {/* Display exercise GIF */}
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      {/* Stack for displaying buttons and exercise name */}
      <Stack direction='row'>
        {/* Button for body part */}
        <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', 
                       borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        {/* Button for target */}
        <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', 
                       borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>
      {/* Exercise name */}
      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="20px">
        {exercise.name}
      </Typography>
    </Link>
  )
}

// Export the ExerciseCard component as the default export
export default ExerciseCard;
