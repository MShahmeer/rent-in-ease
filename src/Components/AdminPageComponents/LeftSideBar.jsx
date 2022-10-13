import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SingleOption from "./SingleOption";

const LeftSideBar = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: "100vh",
        borderRight: "2px solid #f6f6f6",
      }}
    >
      <Typography variant="body1" color="initial" align="center" p="10px">
        Admin Panel
      </Typography>

      <SingleOption title="Listing Requests" />
      <SingleOption title="Delete Listings" />
    </Box>
  );
};

export default LeftSideBar;
