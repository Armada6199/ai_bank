import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import DetailsTable from "./DetailsTable";
import DetailsFilterHeader from "./DetailsFilterHeader";
import FilterBeneficiaryTable from "./FilterBeneficiaryTable";

function PayrollDetails() {
  return (
    <Grid container item p={4} gap={8}>
      <DetailsTable />
      <DetailsFilterHeader/>
      <FilterBeneficiaryTable/>
    </Grid>
  );
}

export default PayrollDetails;
