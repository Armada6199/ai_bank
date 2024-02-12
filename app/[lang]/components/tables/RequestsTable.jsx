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
import "/styles/styles.css";
import { glassmorphismStyle } from "/styles/styles";
import CustomTableFooter from "./CustomTableFooter";
import { payrollsData } from "/public/constants";
import axios from "axios";
import { useFormContext } from "react-hook-form";

function RequestsTable({ activeStatus, activeLink, tableData, setTableData }) {
  const [payrollData, setPayrollData] = useState([]);
  const { getValues, register } = useFormContext();
  let agreenment = getValues("paymentAgreenmentFilter");
  useEffect(() => {
    const getPayrollData = async () => {
      try {
        const result = await axios.get(`/api/payrolls`);
        setPayrollData(result.data.payrolls);
      } catch (error) {
        console.log(error);
      }
    };
    getPayrollData();
  }, []);
  const options = {
    elevation: 0,
    pagination: true,
    rowsPerPage: 5,
    border: "none",
    viewColumns: false,
    selectableRowsHeader: true,
    responsive: "vertical",
    customToolbar: () => {
      return (
        <Grid container gap={1} item xs={12}>
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
                    {...register("paymentAgreenmentFilter")}
                    labelId="paymentAgreenments"
                    id="paymentAgreenments"
                    defaultValue={"All"}
                  >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"P2342529922"}>P2342529922</MenuItem>
                    <MenuItem value={"E2342529922"}>E2342529922</MenuItem>
                    <MenuItem value={"S234252993332"}>S234252993332</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth variant="contained">
                  Search
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      );
    },
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
    },
    {
      name: "payrollAmount",
      label: "Payroll Amount",
    },
    {
      name: "fundingAccount",
      label: "Funding Amount",
    },
    {
      name: "proccessPayrollOn",
      label: "Proccess Payroll On ",
    },
    {
      name: "status",
      label: "Status",
    },
  ];

  return (
    <Grid container sx={glassmorphismStyle} item xs={12} gap={4} p={4}>
      <MUIDataTable data={payrollData} columns={columns} options={options} />
    </Grid>
  );
}

export default RequestsTable;
