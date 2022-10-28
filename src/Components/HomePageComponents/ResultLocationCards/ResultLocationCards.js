import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { locations as cardLocations } from "../../../Data/mock-data";
import CarouselCard from "../../Destinations/CarouselCard/CarouselCard";

const ResultLocationCards = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={12} md={6} lg={6}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ResultLocationCards;
