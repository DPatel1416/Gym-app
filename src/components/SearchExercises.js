// Import necessary modules from React and Material-UI
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

// Import fetchData function and exerciseOptions object
import { fetchData, exerciseOptions } from '../utils/fetchData';

// Import HorizontalScrollbar component
import HorizontalScrollbar from './HorizontalScrollbar';

// Functional component for searching exercises
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // State for search input value
  const [search, setSearch] = useState('');
  
  // State for storing body parts
  const [bodyParts, setBodyParts] = useState([]);

  // Fetch body parts data on component mount
  useEffect(() => {
    const fetchExercisesData = async () => {
      // Fetch body parts list
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      // Set body parts state with 'all' option included
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  // Function to handle search
  const handleSearch = async () => {
    if (search) {
      // Fetch exercises data
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
      
      // Filter exercises based on search query
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      // Scroll to the exercises section
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      // Reset search input value and update exercises state with filtered exercises
      setSearch('');
      setExercises(searchedExercises);
    }
  };

  // Return the JSX for the search section
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      {/* Title for the search section */}
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises you <br />
        Should know
      </Typography>
      {/* Search input field */}
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        {/* Search button */}
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      {/* Horizontal scrollbar for selecting body parts */}
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};

// Export the SearchExercises component as the default export
export default SearchExercises;
