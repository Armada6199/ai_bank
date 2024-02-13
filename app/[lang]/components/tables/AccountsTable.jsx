"use client";
import { Grid } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { useContext } from "react";
import "/styles/styles.css";
import { glassmorphismStyle } from "/styles/styles";
import CustomTableFooter from "./CustomTableFooter";
import { agreementContext } from "/hooks/AgreementProvider.js";
function AccountsTable({ activeLink }) {
  const { accounts } = useContext(agreementContext);
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

  const columns = [
    {
      name: "accountID",
      label: "Account Id",
    },
    {
      name: "accountName",
      label: "Account Name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "accountType",
      label: "Account Type",
    },
    {
      name: "status",
      label: "Status",
    },
  ];

  return (
    <Grid container sx={glassmorphismStyle} item xs={12} gap={4} p={4}>
      <MUIDataTable data={accounts} columns={columns} options={options} />
    </Grid>
  );
}

export default AccountsTable;
