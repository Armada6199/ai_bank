"use client";
import { Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useFormContext } from "react-hook-form";
const cellContainerStyle = {
  border: "1px solid",
  "& > *": {
    border: "1px solid",
    borderColor: "primary.main",
  },
};
function PayrollsToolBar() {
  const { getValues } = useFormContext();

  return (
    <Grid container item gap>
      <Typography variant="h4" fontWeight={700}>
        Payroll Payment Details
      </Typography>
      <Grid container item sx={{ marginTop: 4 }}>
        <TableContainer>
          <Table
            sx={{
              minWidth: 650,
              borderCollapse: "collapse",
              ...cellContainerStyle,
            }}
          >
            <TableHead>
              <TableRow sx={cellContainerStyle}>
                <TableCell>Value Date</TableCell>
                <TableCell>10/5/2022</TableCell>
                <TableCell>Paid Amount</TableCell>
                <TableCell>{getValues("totalPayrollAmount")}</TableCell>
              </TableRow>
              <TableRow sx={cellContainerStyle}>
                <TableCell>Late Fees</TableCell>
                <TableCell>0.0</TableCell>
                <TableCell>No. Of Transactions</TableCell>
                <TableCell>{getValues("totalPayrollRecords")}</TableCell>
              </TableRow>
              <TableRow sx={cellContainerStyle}>
                <TableCell>Payment Amount</TableCell>
                <TableCell>{getValues("totalPayrollAmount")}</TableCell>
                <TableCell>Unpaid Amount</TableCell>
                <TableCell>0.00</TableCell>
              </TableRow>
              <TableRow sx={cellContainerStyle}>
                <TableCell>File Status</TableCell>
                <TableCell>File Validation Completed successfully</TableCell>
                <TableCell>Paid Transactions</TableCell>
                <TableCell>{getValues("totalPayrollRecords")}</TableCell>
              </TableRow>
              <TableRow sx={cellContainerStyle}>
                <TableCell>Account No</TableCell>
                <TableCell>{getValues("accountId")}</TableCell>
                <TableCell>Rejected Transactions </TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow sx={{ height: "40px" }}></TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default PayrollsToolBar;
