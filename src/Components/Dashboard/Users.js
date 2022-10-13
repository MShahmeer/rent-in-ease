import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Host Data
function createHostData(
  hostId,
  name,
  propertyName,
  propertyType,
  publishDate,
  ratings
) {
  return {
    hostId,
    name,
    propertyName,
    propertyType,
    publishDate,
    ratings,
  };
}

const rows = [
  createHostData(
    0,
    "Shahmeer",
    "House",
    "Single Portion",
    "16 Mar, 2019",
    3.14
  ),
  createHostData(
    1,
    "Shahmeer",
    "House",
    "Single Portion",
    "16 Mar, 2019",
    3.14
  ),
  createHostData(
    2,
    "Shahmeer",
    "House",
    "Single Portion",
    "16 Mar, 2019",
    3.14
  ),
  createHostData(
    3,
    "Shahmeer",
    "House",
    "Single Portion",
    "16 Mar, 2019",
    3.14
  ),
  createHostData(
    4,
    "Shahmeer",
    "House",
    "Single Portion",
    "16 Mar, 2019",
    3.14
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Hosts List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Property Name</TableCell>
            <TableCell>Property Type</TableCell>
            <TableCell>Publish Date</TableCell>
            <TableCell align="right">Ratings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.propertyName}</TableCell>
              <TableCell>{row.propertyType}</TableCell>
              <TableCell>{row.publishDate}</TableCell>
              <TableCell align="right">{row.ratings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Hosts
      </Link>
    </React.Fragment>
  );
}
