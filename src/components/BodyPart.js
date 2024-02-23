// Import necessary modules from Material-UI
import React from "react";
import { Stack, Typography } from "@mui/material";
// Import gym icon
import Icon from "../assets/icons/gym.png";

// Functional component for displaying a body part card
const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    // Use Stack as a button
    type="button"
    // Align items and justify content to center
    alignItems="center"
    justifyContent="center"
    // Apply styles based on whether the body part is selected or not
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
    }
    // On click, set the selected body part and scroll to a specific position on the page
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    {/* Display the gym icon */}
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    {/* Display the body part name */}
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

// Export the BodyPart component as the default export
export default BodyPart;
