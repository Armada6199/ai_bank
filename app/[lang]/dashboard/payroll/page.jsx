"use client";
import {
  Box,
  Grid,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  stepConnectorClasses,
} from "@mui/material";
[];
import React from "react";
import PaymentAgreements from "../../components/dash/payrollPages/PaymentAgreements";
import { glassmorphismStyle, stepStyle } from "@styles/styles";
import PayrollNavigation from "../../components/dash/payrollPages/PayrollNavigation";
import styled from "@emotion/styled";
import PayrollHOC from "../../components/dash/payrollPages/PayrollHOC";
export default Payroll;

function Payroll() {
  return (
    <Grid
      container
      item
      xs={12}
      gap={4}
      sx={{ ...glassmorphismStyle, borderRadius: "0", p: 0 }}
    >
      {/* <PaymentAgreements /> */}

      <PayrollHOC activeStep={activeStep} />
    </Grid>
  );
}
