import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// react icons
import { FaAirbnb } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { flexCenter } from "../../Theme/CommonStyles";
import { pink } from "@mui/material/colors";

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <BiBuildingHouse size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: "20px",
          fontWeight: "bold",
        }}
        component="h3"
      >
        RentInEase
      </Typography>
    </Box>
  );
};

export default Logo;
