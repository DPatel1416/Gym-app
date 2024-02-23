// Import necessary modules from React and Material-UI
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
// Import Logo image
import Logo from '../assets/images/Logo.png';

// Functional component for the footer section
const Footer = () => (
  // Container for the footer with a white background
  <Box mt="80px" bgcolor="#FFF3F4">
    {/* Stack for aligning items and wrapping */}
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px" direction="row" justifyContent="center">
      {/* Logo image */}
      <img src={Logo} alt="logo" style={{ width: '41px', height: '41px' }} />
      {/* Title of the footer */}
      <Typography sx={{ fontSize: { lg: '35px', xs: '25px' } }} color="#FF2625">EpicFit Zone</Typography>
    </Stack>
    {/* Text in the footer */}
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Dhruv patel</Typography>
  </Box>
);

// Export the Footer component as the default export
export default Footer;
