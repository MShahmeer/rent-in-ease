import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@react-google-maps/api";
import {
  Box,
  InputBase,
  TextField,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { searchFilterContext } from "../../Context";
import PersonIcon from "@mui/icons-material/Person";

const SearchBar = ({ onLoad, onPlaceChanged }) => {
  let isMedium = useMediaQuery("(max-width:900px)");
  let isMobile = useMediaQuery("(max-width:750px)");

  //   const [autocomplete, setAutocomplete] = useState(null);
  //   const { destination, setDestination } = useContext(searchFilterContext);
  //   const [coordinates, setCoordinates] = useState({});
  //   const onLoad = (autoC) => setAutocomplete(autoC);

  //   const onPlaceChanged = () => {
  //     setDestination(autocomplete.getPlace().formatted_address);
  //     const lat = autocomplete.getPlace().geometry.location.lat();
  //     const lng = autocomplete.getPlace().geometry.location.lng();
  //     setCoordinates({ lat, lng });
  //   };

  const {
    destination,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guests,
    setGuests,
  } = useContext(searchFilterContext);

  localStorage.setItem("destination", JSON.stringify(destination));
  localStorage.setItem("checkIn", checkIn);
  localStorage.setItem("checkOut", checkOut);
  localStorage.setItem("guests", guests);

  const navigate = useNavigate();

  const styles = {
    searchFields: {
      backgroundColor: "#ffff",
      height: "65px",
      borderRadius: "100rem",
      border: "1px solid #f6f6f6",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      paddingLeft: "30px",
      width: "45rem",

      ...(isMedium && {
        position: "absolute",
        top: "15rem",

        width: "80vw",
      }),
      ...(isMobile && {
        position: "absolute",
        top: "10rem",
        p: 1,
        width: "70vw",
        flexDirection: "column",
        height: "45vh",
        borderRadius: "1rem",
      }),
    },
    inputs: {
      fontSize: "12px",
      fontWeight: "bold",
      mt: "10px",
      width: "10rem",
      ...(isMobile && {
        width: "80%",
      }),
    },
    vl: {
      position: "relative",
      top: "15",
      height: "20%",
      backgroundColor: "rgb(228, 228, 228)",
      width: "1.5px",
      marginRight: "20px",
      paddingBottom: "15px",
    },
    hl: {
      position: "relative",
      top: "20px",

      backgroundColor: "rgb(228, 228, 228)",
      width: "100%",
      mt: "-2rem",
      mb: "1rem",
      paddingBottom: "1px",
    },
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box sx={styles.searchFields}>
        <Box
          style={{
            marginTop: "-5px",
            fontSize: "12px",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            ...(isMobile && {
              width: "80%",
            }),
          }}
        >
          <Box sx={styles.inputs}>
            Location
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <TextField
                variant="standard"
                autoFocus
                sx={{
                  "&::placeholder": {
                    color: "gray",
                  },
                }}
                placeholder="Where are you going?"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </Autocomplete>
          </Box>
        </Box>
        <Box sx={isMobile ? styles.hl : styles.vl} />

        <Box sx={styles.inputs}>
          Check In
          <TextField
            variant="standard"
            type="date"
            fullWidth
            InputProps={{ disableUnderline: true }}
            onChange={(e) => {
              setCheckIn(e.target.value);
            }}
            value={checkIn}
          />
        </Box>
        <Box sx={isMobile ? styles.hl : styles.vl} />
        <Box sx={styles.inputs}>
          Check Out
          <TextField
            id="outlined-basic"
            type="date"
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            onChange={(e) => {
              setCheckOut(e.target.value);
            }}
            value={checkOut}
          />
        </Box>

        <Box sx={isMobile ? styles.hl : styles.vl} />
        <Box sx={styles.inputs}>
          Guests
          {isMobile && <br />}
          <InputBase
            defaultValue={2}
            type="number"
            fullWidth
            inputProps={{ min: 1 }}
            onChange={(e) => setGuests(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#EB4E5F",
            padding: "5px",
            borderRadius: "60%",
            marginRight: "5px",

            visibility: "hidden",
            ...(destination &&
              checkIn &&
              checkOut &&
              guests && {
                visibility: "visible",
              }),
            ...(isMobile && {
              width: "60vw",
              borderRadius: "0.5rem",
              justifyContent: "center",

              cursor: "pointer",
            }),
          }}
          onClick={() => navigate("/places")}
        >
          <IconButton onClick={() => navigate("/places")}>
            <SearchIcon
              sx={{
                color: "white",
                ...(isMobile && {
                  mr: 2,
                }),
              }}
            />
            {isMobile && (
              <Typography variant="body1" color="white">
                Search
              </Typography>
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
