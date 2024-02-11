import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MUIDataTable from "mui-datatables";
import "./paymentTable.css";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
const cellContainerStyle = {
  "& > *:not(:last-child)": {
    borderTop: "1px solid",
    borderTopColor: "primary.main",
    borderBottom: "1px solid",
    borderBottomColor: "primary.main",
    borderRight: "1px solid",
    borderRightColor: "primary.main",
    padding: "8px",
    textAlign: "left",
  },
  "& > *:last-child": {
    borderTop: "1px solid",
    borderTopColor: "primary.main",
    borderBottom: "1px solid",
    borderBottomColor: "primary.main",
    borderRight: "none",
  },
};
const columns = [
  "Payment Referance ",
  "Employee Name",
  "Account #",
  "Amount",
  "Address",
  "Payment Info",
  "Payment Status",
];

const data = [
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
];

const options = {
  filterType: "none",
  elevation: 0,
  pagination: false,
  rowsPerPage: 5,
  border: "collapse",
  search: false,
  sort: false,
  viewColumns: false,
  selectableRowsHeader: false,
  responsive: "vertical",
  selectableRows: "none",
  rowHover: false,
  sort: false,
  sortFilterList: false,
  customToolbar: () => {
    return (
      <TableContainer>
        <Table
          sx={{
            minWidth: 650,
            borderCollapse: "collapse",
            ...cellContainerStyle,
          }}
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow sx={cellContainerStyle}>
              <TableCell>Value Date</TableCell>
              <TableCell>10/5/2022</TableCell>
              <TableCell>Paid Amount</TableCell>
              <TableCell>4.00</TableCell>
            </TableRow>
            <TableRow sx={cellContainerStyle}>
              <TableCell>Late Fees</TableCell>
              <TableCell>0.0</TableCell>
              <TableCell>No. Of Transactions</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow sx={cellContainerStyle}>
              <TableCell>Payment Amount</TableCell>
              <TableCell>4.00</TableCell>
              <TableCell>Unpaid Amount</TableCell>
              <TableCell>0.00</TableCell>
            </TableRow>
            <TableRow sx={cellContainerStyle}>
              <TableCell>File Status</TableCell>
              <TableCell>File Validation Completed successfully</TableCell>
              <TableCell>Paid Transactions</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow sx={cellContainerStyle}>
              <TableCell>Account No</TableCell>
              <TableCell>20558984526</TableCell>
              <TableCell>Rejected Transactions </TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow sx={{ ...cellContainerStyle, height: "40px" }}></TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    );
  },
  customFooter: () => <></>,
};

export default function PaymentTable() {
  return (
    <Grid container item>
      <MUIDataTable data={data} columns={columns} options={options} />
    </Grid>
  );
}
