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

import React, { useEffect, useState } from "react";
import "@styles/styles.css";
import { glassmorphismStyle } from "@styles/styles";
import CustomTableFooter from "./CustomTableFooter";
import { payrollsData } from "@public/constants";

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

function RequestsTable({ activeStatus, activeLink, tableData, setTableData }) {
  useEffect(() => {
    if (activeStatus !== "All Requests") {
      const newTableData = payrollsData.filter(
        (e) =>
          (e[4] === "Waiting Debit Date" && activeStatus === "Pending") ||
          (e[4] === "Not Submitted" && activeStatus === "Rejected")
      );
      setTableData(newTableData);
    } else {
      setTableData(payrollsData);
    }
  }, [activeStatus]);
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
      {activeLink !== "Manage Accounts" && (
        <Grid item>
          <Typography variant="h6" fontWeight={"600"}>
            Payment Agreenments
          </Typography>
        </Grid>
      )}
      {activeLink !== "Manage Accounts" && (
        <Grid container item alignItems={"center"} spacing={4} xs={12}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <Select
                defaultValue={"P2342529922"}
                labelId="paymentAgreenments"
                id="paymentAgreenments"
              >
                <MenuItem value={"P2342529922"}>P2342529922</MenuItem>
                <MenuItem value={"E2342529922"}>E2342529922</MenuItem>
                <MenuItem value={"S234252993332"}>S234252993332</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained">
              Search
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid container item xs={12}>
        <MUIDataTable data={tableData} columns={columns} options={options} />
      </Grid>
    </Grid>
  );
}

export default RequestsTable;
