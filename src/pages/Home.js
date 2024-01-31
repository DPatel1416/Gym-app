import React, {useState} from 'react' ;
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner' ;
import Exercises from '../components/Exercises' ;
import SearchExercise from '../components/SearchExercises' ;

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  )
}

export default Home