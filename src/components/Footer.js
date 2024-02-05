import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px" direction="row" justifyContent="center">
      <img src={Logo} alt="logo" style={{ width: '41px', height: '41px' }} /> 
      <Typography sx={{ fontSize: { lg: '35px', xs: '25px' } }} color="#FF2625">EpicFit Zone</Typography>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Dhruv patel</Typography>
  </Box>
);

export default Footer;