"use client";
import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import DetailsTable from "../components/DetailsTable";
import DetailsFilterHeader from "../components/DetailsFilterHeader";
import BeneficiaryiesTable from "../../../tables/BeneficiaryiesTable";
import { agreementContext } from "@/hooks/AgreementProvider";

function PayrollDetails() {
  const [activeFilter, setActiveFilter] = useState("All Beneficiary");
  const { beneficaries, setFilteredBenficaries } = useContext(agreementContext);
  useEffect(() => {
    if (activeFilter == "All Beneficiary") setFilteredBenficaries(beneficaries);
    else {
      const newData = beneficaries.filter((e) => e.status === "error");
      setFilteredBenficaries(newData);
    }
  }, [activeFilter]);
  return (
    <Grid container item p={4} gap={8}>
      <DetailsTable />
      <DetailsFilterHeader
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <BeneficiaryiesTable />
    </Grid>
  );
}

export default PayrollDetails;
