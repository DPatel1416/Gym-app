// Import necessary modules from React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

// Import custom utility functions for fetching data
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
// Import custom components
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

// Functional component for displaying details of a specific exercise
const ExerciseDetail = () => {
  // State variables to store exercise details, videos, and related exercises
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  // Get the exercise ID from the route parameters
  const { id } = useParams();

  // Effect hook to fetch data when the component mounts or when the exercise ID changes
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Function to fetch exercise data from APIs
    const fetchExercisesData = async () => {
      // Base URLs for the exercise database and YouTube search APIs
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // Fetch exercise detail data from the exercise database API
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      // Fetch exercise videos data from the YouTube search API
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      // Fetch target muscle exercises data from the exercise database API
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      // Fetch equipment exercises data from the exercise database API
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    };

    // Call the fetchExercisesData function
    fetchExercisesData();
  }, [id]);

  // Render "No Data" if exerciseDetail is null or undefined
  if (!exerciseDetail) return <div>No Data</div>;

  // Render the exercise detail, videos, and related exercises components
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

// Export the ExerciseDetail component as the default export
export default ExerciseDetail;
