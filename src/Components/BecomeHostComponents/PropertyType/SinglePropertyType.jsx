import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const SinglePropertyType = ({ PropertyType, url }) => {
  if (typeof url === "string") {
    console.log("string");
  }

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
      <Typography>{PropertyType}</Typography>
      {typeof url === "string" ? (
        <Avatar
          sx={{
            width: 60,
            height: 60,
            borderRadius: "5px",
          }}
          variant="square"
          alt="Remy Sharp"
          src={url}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default SinglePropertyType;
