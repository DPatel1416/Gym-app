// Import necessary modules from React and Material-UI
import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

// Functional component for the loader
const Loader = () => (
  // Stack component to center the loader horizontally and vertically
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    {/* Loader component from react-loader-spinner */}
    <InfinitySpin color="grey" />
  </Stack>
);

// Export the Loader component as the default export
export default Loader;
