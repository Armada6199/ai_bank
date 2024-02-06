"use client";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import MUIDataTable from "mui-datatables";

import React from "react";
import "@styles/styles.css";
import { glassmorphismStyle } from "@styles/styles";
import CustomTableFooter from "./CustomTableFooter";

const options = {
  elevation: 0,
  pagination: true,
  rowsPerPage: 5,
  border: "none",
  viewColumns: false,
  selectableRowsHeader: true,
  responsive: "vertical",

  customFooter: (
    count,
    page,
    rowsPerPage,
    changeRowsPerPage,
    changePage,
    textLabels
  ) => {
    return (
      <CustomTableFooter
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        changeRowsPerPage={changeRowsPerPage}
        changePage={changePage}
        textLabels={textLabels}
      />
    );
  },
};

function RequestsTable() {
  const data = [
    [1245667, "42000", "24", "Approved", "Debited"],
    [1245667, "2000", "12", "Processing", "Waiting Debit Date "],
    [1245667, "2000", "12", "Rejected", "Not Submitted"],
    [1245667, "50000", "24", "Approved", "Waiting Debit Date "],
    [1245667, "42000", "24", "Approved", "Debited"],
    [1245667, "2000", "12", "Processing", "Waiting Debit Date "],
    [1245667, "2000", "12", "Rejected", "Not Submitted"],
    [1245667, "50000", "24", "Approved", "Waiting Debit Date "],
    [1245667, "42000", "24", "Approved", "Debited"],
    [1245667, "2000", "12", "Processing", "Waiting Debit Date "],
    [1245667, "2000", "12", "Rejected", "Not Submitted"],
    [1245667, "50000", "24", "Approved", "Waiting Debit Date "],
    [1245667, "42000", "24", "Approved", "Debited"],
    [1245667, "2000", "12", "Processing", "Waiting Debit Date "],
    [1245667, "2000", "12", "Rejected", "Not Submitted"],
    [1245667, "50000", "24", "Approved", "Waiting Debit Date "],
    [1245667, "42000", "24", "Approved", "Debited"],
    [1245667, "2000", "12", "Processing", "Waiting Debit Date "],
    [1245667, "2000", "12", "Rejected", "Not Submitted"],
    [1245667, "50000", "24", "Approved", "Waiting Debit Date "],
  ];
  const columns = [
    {
      name: "requestId",
      label: "Request Id",
      options: {
        filter: false,
        customBodyRender: (loanTypeObj, tableMeta, updateValue) => (
          <Grid container alignItems={"center"} gap={2} item>
            <Typography>12321</Typography>
          </Grid>
        ),
        customHeadLabelRender: (value) => (
          <Grid item textAlign={"start"}>
            <Typography variant="body1" fontWeight={600}>
              Request Id
            </Typography>
          </Grid>
        ),
      },
    },
    {
      name: "payrollAmount",
      label: "Payroll Amount",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Grid item>
            <Typography variant="body1" fontWeight={600}>
              2000 EGP
            </Typography>
          </Grid>
        ),
        customHeadLabelRender: (value) => (
          <Grid item textAlign={"start"}>
            <Typography variant="body1" fontWeight={600}>
              Payroll Amount
            </Typography>
          </Grid>
        ),
      },
    },
    {
      name: "fundingAccount",
      label: "Funding Amount",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Grid item>
              <Typography variant="body1" fontWeight={600}>
                {value}
              </Typography>
            </Grid>
          );
        },
        customHeadLabelRender: (value) => (
          <Grid item textAlign={"start"}>
            <Typography variant="body1" fontWeight={600}>
              Funding Amount
            </Typography>
          </Grid>
        ),
      },
    },
    {
      name: "proccessPayrollOn",
      label: "Proccess Payroll On ",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <Grid item>{value}</Grid>;
        },
        customHeadLabelRender: (value) => (
          <Grid item textAlign={"start"}>
            <Typography variant="body1" fontWeight={600}>
              Proccess Payroll On
            </Typography>
          </Grid>
        ),
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Grid item>
              <Typography>{value}</Typography>
            </Grid>
          );
        },
        customHeadLabelRender: (value) => (
          <Grid item textAlign={"start"}>
            <Typography variant="body1" fontWeight={600}>
              Status
            </Typography>
          </Grid>
        ),
      },
    },
  ];

  return (
    <Grid container sx={glassmorphismStyle} item xs={12} gap={4} p={4}>
      <Grid item>
        <Typography variant="h6" fontWeight={"600"}>
          Payment Agreenments
        </Typography>
      </Grid>
      <Grid container item alignItems={"center"} spacing={4} xs={12}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <Select labelId="paymentAgreenments" id="paymentAgreenments">
              <MenuItem>P2342529922</MenuItem>
              <MenuItem>E2342529922</MenuItem>
              <MenuItem>S234252993332</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth variant="contained">
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Grid>
    </Grid>
  );
}

export default RequestsTable;
