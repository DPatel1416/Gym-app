// Import necessary modules from Material-UI
import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

// Import icons for body part, target, and equipment
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

// Functional component for displaying exercise details
const Detail = ({ exerciseDetail }) => {
  // Destructure exerciseDetail object to get necessary details
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  // Array containing extra details (body part, target, equipment)
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  // Render exercise details
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      {/* Display exercise GIF image */}
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      {/* Stack for displaying exercise details */}
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        {/* Exercise name */}
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        {/* Exercise description */}
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your {' '}
          <br /> mood and gain energy.
        </Typography>
        {/* Display extra details (body part, target, equipment) */}
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            {/* Button with icon for extra detail */}
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            {/* Display extra detail name */}
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

// Export the Detail component as the default export
export default Detail;
