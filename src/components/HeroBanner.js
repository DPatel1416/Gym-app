// Import necessary modules from React and Material-UI
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

// Import HeroBannerImage
import HeroBannerImage from "../assets/images/banner.png";

// Functional component for the hero banner section
const HeroBanner = () => {
  return (
    <Box
      // Set margin top and margin left using responsive values
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      // Set position to relative and padding
      position="relative"
      p="20px"
    >
      {/* Title of the fitness club */}
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      {/* Main heading of the hero banner */}
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Endure, Cheer
        <br /> and Revise
      </Typography>
      {/* Subtitle of the hero banner */}
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      {/* Button to explore exercises */}
      <Button variant="contained" color="error" href="#exercises"
        sx={{ backgroundColor: 'ff2625', padding: '10px' }}
      >
        Explore Exercises
      </Button>
      {/* Placeholder text with low opacity */}
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: {
            lg: 'block',
            xs: 'none'
          }
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      {/* Image for the hero banner */}
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

// Export the HeroBanner component as the default export
export default HeroBanner;
