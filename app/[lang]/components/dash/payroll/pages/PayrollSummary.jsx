import { Grid, Typography } from "@mui/material";
import React from "react";
import PaymentTable from "../../../tables/PaymentTable";

function PayrollSummary() {
  return (
    <Grid container item gap={4} p={4}>
      <Grid
        container
        item
        border={"1px solid"}
        borderColor={"primary.dark"}
        gap={4}
        p={2}
      >
        <Grid container item>
          <Grid item xs={6}>
            <Typography variant="h6">Payment Agreements</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" fontWeight={600}>
              PAY2042
            </Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={6}>
            <Typography variant="h6">File Id</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" fontWeight={600}>
              203320011
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight={700}>
          Payroll Payment Details
        </Typography>
      </Grid>
      <Grid
        container
        item
        p={4}
        border={"1px solid"}
        borderColor={"primary.dark"}
      >
        <PaymentTable />
      </Grid>
    </Grid>
  );
}

export default PayrollSummary;
