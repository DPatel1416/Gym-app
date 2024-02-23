// Import necessary modules from React and Material-UI
import React from "react";
import { Typography, Box, Stack } from "@mui/material";

// Import HorizontalScrollbar component and Loader component
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

// Functional component for displaying similar exercises
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
    {/* Title for similar target muscle exercises */}
    <Typography
      sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </Typography>
    {/* Stack for displaying horizontal scrollbar */}
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {/* Render horizontal scrollbar if target muscle exercises data is available, otherwise render loader */}
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    {/* Title for similar equipment exercises */}
    <Typography
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        ml: "20px",
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </Typography>
    {/* Stack for displaying horizontal scrollbar */}
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {/* Render horizontal scrollbar if equipment exercises data is available, otherwise render loader */}
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

// Export the SimilarExercises component as the default export
export default SimilarExercises;
