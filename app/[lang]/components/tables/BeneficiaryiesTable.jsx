"use client";
import { Grid } from "@mui/material";
import MUIDataTable from "mui-datatables";

import React, { useContext, useEffect, useState } from "react";
import "/styles/styles.css";
import CustomTableFooter from "./CustomTableFooter";
import { agreementContext } from "@/hooks/AgreementProvider";

function BeneficiaryiesTable({}) {
  const { filterdBenficaries } = useContext(agreementContext);
  const [forceUpdate, seForceUpdate] = useState(false);
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
      name: "beneficiaryName",
      label: "Beneficiary",
    },
    {
      name: "beneficiaryId",
      label: "Account  ",
    },
    {
      name: "bankName",
      label: "Bank ",
    },
    {
      name: "amount",
      label: "Amount ",
    },
    {
      name: "remarks",
      label: "Remarks ",
    },
  ];

  useEffect(() => {
    seForceUpdate((prev) => !prev);
  }, [filterdBenficaries]);
  return (
    <Grid container item xs={12} gap={4} p={4}>
      <MUIDataTable
        data={filterdBenficaries}
        columns={columns}
        options={options}
      />
    </Grid>
  );
}

export default BeneficiaryiesTable;
