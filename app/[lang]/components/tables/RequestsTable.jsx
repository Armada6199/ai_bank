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
import { filterPayrolls, handleFilterStatus } from "/utils/apiRequests";
import React, { useContext, useEffect } from "react";
import "/styles/styles.css";
import { glassmorphismStyle } from "/styles/styles";
import CustomTableFooter from "./CustomTableFooter";
import { useFormContext } from "react-hook-form";
import { agreementContext } from "/hooks/AgreementProvider.js";
function RequestsTable({ activeStatus, activeLink }) {
  const { getValues, register } = useFormContext();
  let agreenment = getValues("paymentAgreenmentFilter");
  const { setFilteredPayrolls, agreements, filteredPayrolls } =
    useContext(agreementContext);
  useEffect(() => {
    handleFilterStatus(activeStatus, agreements, setFilteredPayrolls);
  }, [activeStatus]);
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
                    sx={{ textAlign: "start" }}
                  >
                    <MenuItem value={"All"}>All</MenuItem>
                    {agreements.map((agreement) => (
                      <MenuItem value={agreement.agreementId}>
                        {agreement.agreementId}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Button
                  onClick={() =>
                    filterPayrolls(agreements, setFilteredPayrolls, agreenment)
                  }
                  fullWidth
                  variant="contained"
                >
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
  // useEffect(() => {
  //   if (activeStatus !== "All Requests") {
  //     const newTableData = payrollsData.filter(
  //       (e) =>
  //         (e[4] === "Waiting Debit Date" && activeStatus === "Pending") ||
  //         (e[4] === "Not Submitted" && activeStatus === "Rejected")
  //     );
  //     setTableData(newTableData);
  //   } else {
  //     setTableData(payrollsData);
  //   }
  // }, [activeStatus]);
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
      name: "processPayrollOn",
      label: "Proccess Payroll On ",
    },
    {
      name: "status",
      label: "Status",
    },
  ];

  return (
    <Grid
      container
      sx={glassmorphismStyle}
      id={"payrollsTable"}
      item
      xs={12}
      gap={4}
      p={4}
      minHeight={"60vh"}
    >
      <MUIDataTable
        data={filteredPayrolls}
        columns={columns}
        options={options}
      />
    </Grid>
  );
}

export default RequestsTable;
