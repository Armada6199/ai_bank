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
import CustomTableFooter from "../CustomTableFooter";
import { payrollsData } from "@public/constants";

function RequestsTable({ activeStatus, activeLink, tableData, setTableData }) {
  const options = {
    elevation: 0,
    pagination: true,
    download: false,
    print: false,
    download: false,
    search: false,
    filter: false,
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
  //   useEffect(() => {
  //     if (activeStatus !== "All Requests") {
  //       const newTableData = payrollsData.filter(
  //         (e) =>
  //           (e[4] === "Waiting Debit Date" && activeStatus === "Pending") ||
  //           (e[4] === "Not Submitted" && activeStatus === "Rejected")
  //       );
  //       setTableData(newTableData);
  //     } else {
  //       setTableData(payrollsData);
  //     }
  //   }, [activeStatus]);
  const columns = [
    {
      name: "beneficiary",
      label: "Beneficiary",
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
      name: "account",
      label: "Account",
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
      name: "bank",
      label: "Bank",
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
      name: "remarks",
      label: "Remarks ",
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
  ];

  return (
    <Grid container sx={glassmorphismStyle} item xs={12} gap={4} p={4}>
      <MUIDataTable data={tableData} columns={columns} options={options} />
    </Grid>
  );
}

export default RequestsTable;
