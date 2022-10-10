import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const Amenities = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        margin="2px"
        rowSpacing={0}
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        sx={{ display: "inline-flex", justifyContent: "space-between" }}
      >
        <Grid item xs={1}>
          <MeetingRoomIcon />
        </Grid>
        <Grid item xs={11}>
          <Typography> Description</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography> Text</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Amenities;
