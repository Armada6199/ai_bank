import { Grid, Typography } from "@mui/material";
import React from "react";
import PaymentTable from "../../../tables/PaymentTable";
import { useFormContext } from "react-hook-form";

function PayrollSummary() {
  const { getValues } = useFormContext();
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
            <Typography variant="h6" fontWeight={600}>
              Payment Agreements
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" fontWeight={600}>
              {getValues("paymentAgreement")}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight={600}>
              File Id
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" fontWeight={600}>
              {getValues("fileId")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item>
        <PaymentTable />
      </Grid>
    </Grid>
  );
}

export default PayrollSummary;
