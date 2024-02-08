import { Grid, Typography } from "@mui/material";
import React from "react";
import PaymentAgreements from "../dash/payrollPages/PaymentAgreements";
import { glassmorphismStyle } from "@styles/styles";
import PayrollNavigation from "../dash/payrollPages/PayrollNavigation";
function Payroll() {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent={"center"}
      gap={4}
      sx={{ ...glassmorphismStyle, borderRadius: "0", p: 0 }}
    >
      <Grid
        container
        alignItems={"center"}
        px={2}
        item
        height={"65px"}
        bgcolor={"primary.main"}
      >
        <Typography variant="h5">New Payroll Request</Typography>
      </Grid>
      {/* <PaymentAgreements /> */}
      <PayrollNavigation />
    </Grid>
  );
}

export default Payroll;
