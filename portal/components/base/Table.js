import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable(props) {

  const rows = props.data.map((item, index) => {
    const cells = [];
    for (let j of Object.keys(item)) {
      if (props.rows.includes(j)) {
        cells.push(<TableCell key={Math.random()}>{item[j]}</TableCell>);
      }
    }
    return (
      <TableRow key={index}>
          {cells}
      </TableRow>
    );
  });

  const tableTitels = props.rows.map(tr => (<TableCell key={tr}>{tr}</TableCell>));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableTitels}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data && rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
