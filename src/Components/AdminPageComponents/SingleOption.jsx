import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SingleOption = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 180,
        height: 50,
        border: "2px solid",
        borderColor: "#f6f6f6",
        borderRadius: "5px",
        mb: "10px",
        mr: "10px",
        ml: "10px",
        "&:hover": {
          boxShadow: "5px 5px 8px #888888",
        },
      }}
    >
      <Typography>{title}</Typography>
    </Box>
  );
};

export default SingleOption;
