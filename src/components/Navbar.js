// Import necessary modules from React and React Router
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

// Import the logo image
import Logo from '../assets/images/Logo.png';

// Functional component for the Navbar
const Navbar = () => {
  return (
    // Stack component for the Navbar, with row direction and space-around justification
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none'
      }}
      px="20px"
    >
      {/* Link to the homepage with the logo */}
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px', margin: '0 20px' }}
        />
      </Link>
      {/* Stack for the navigation links */}
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        {/* Link to the homepage */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625'
          }}
        >
          Home
        </Link>
        {/* Anchor tag for the exercises section */}
        <a
          href="#exercises"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

// Export the Navbar component as the default export
export default Navbar;
