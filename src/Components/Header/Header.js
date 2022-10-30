import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProfileSettings from "./ProfileSetting";
import MobileSearch from "./MobileSearch";
import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import SearchBar from "./SearchBar";
import { searchFilterContext } from "../../Context";
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../../Theme/CommonStyles";

const Header = () => {
  const [bound, setBound] = useState({});
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [autocomplete, setAutocomplete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);

  const { destination, setDestination } = useContext(searchFilterContext);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    setDestination(autocomplete.getPlace().formatted_address);
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  // useEffect(() => {
  //   setIsLoading(true);
  //   getData(bound, "hotels").then((data) => {
  //     setPlaces(data?.filter((place) => place.name));
  //     setIsLoading(false);
  //   });
  //   console.log(places);
  // }, [bound]);

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
