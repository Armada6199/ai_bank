import { Grid, Typography } from "@mui/material";
import React from "react";
import PaymentTable from "../../tables/PaymentTable";

function PayrollSummary() {
  return (
    <Grid container item gap={4} p={4}>
      <Grid container item border={"1px solid lightgray"} gap={4} p={2}>
        <Grid container item>
          <Grid item xs={6}>
            <Typography>Payment Agreements</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>PAY2042</Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={6}>
            <Typography>File Id</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>203320011</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Payroll Payment Details</Typography>
      </Grid>
      <Grid container item>
      <PaymentTable/>
      </Grid>
    </Grid>
  );
}

export default PayrollSummary;
