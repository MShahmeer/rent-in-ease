import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProfileSettings from "./ProfileSetting";
import MobileSearch from "./MobileSearch";
import { getData } from "../../api";
import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import SearchBar from "./SearchBar";
import { searchFilterContext } from "../../Context";
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../../Theme/CommonStyles";

const Header = ({ onLoad, onPlaceChanged, destination }) => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <SearchBar
              onLoad={onLoad}
              onPlaceChanged={onPlaceChanged}
              destination={destination}
            />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
