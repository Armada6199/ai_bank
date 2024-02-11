"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DetailsTable from "../components/DetailsTable";
import DetailsFilterHeader from "../components/DetailsFilterHeader";
import BeneficiaryiesTable from "../../../tables/BeneficiaryiesTable";

function PayrollDetails() {
  const [tableData, setTableData] = useState([]);
  const [filteredTableData, setFilteredTableData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Beneficiary");
  useEffect(() => {
    if (activeFilter == "All Beneficiary") setFilteredTableData(tableData);
    else {
      const newData = filteredTableData.filter((e) => e.status === "error");
      setFilteredTableData(newData);
    }
  }, [activeFilter]);
  return (
    <Grid container item p={4} gap={8}>
      <DetailsTable
        setTableData={setTableData}
        setFilteredTableData={setFilteredTableData}
        filteredTableData={filteredTableData}
      />
      <DetailsFilterHeader
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <BeneficiaryiesTable
        setTableData={filteredTableData}
        tableData={tableData}
      />
    </Grid>
  );
}

export default PayrollDetails;
