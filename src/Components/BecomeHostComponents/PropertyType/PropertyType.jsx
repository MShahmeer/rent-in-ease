//This is question 1

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Stack from "@mui/material/Stack";

import SinglePropertyType from "./SinglePropertyType";

const PropertyType = () => {
  return (
    <Box
      sx={{
        width: 500,
        height: 500,
        margin: "auto",
        paddingTop: "30px",
      }}
    >
      <Typography align="center" variant="h5" sx={{ paddingBottom: "30px" }}>
        Which of these best describes your place?
      </Typography>

      <SinglePropertyType
        PropertyType={"House"}
        url={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"}
      />

      <SinglePropertyType
        PropertyType={"House"}
        url={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"}
      />

      <SinglePropertyType
        PropertyType={"House"}
        url={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"}
      />

      <SinglePropertyType
        PropertyType={"House"}
        url={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"}
      />

      <SinglePropertyType PropertyType={"home"} />

      <Stack direction="row" spacing={"auto"} sx={{ p: "20px" }}>
        <Button variant="contained" startIcon={<NavigateBeforeIcon />}>
          Back
        </Button>
        <Button variant="contained" endIcon={<NavigateNextIcon />}>
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default PropertyType;
