import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const SinglePropertyType = () => {
  return (
    <Box
      sx={{
        width: 442,
        height: 87,
        backgroundColor: "#fffff",
        border: "2px solid",
        borderColor: "#f2f2f2",
        borderRadius: "10px",
        "&:hover": {
          borderColor: "black",
        },
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "20px",
        paddingLeft: "20px",
      }}
    >
      <Typography>Property Type</Typography>

      <Avatar
        sx={{
          width: 60,
          height: 60,
          borderRadius: "5px",
        }}
        variant="square"
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      />
    </Box>
  );
};

export default SinglePropertyType;
