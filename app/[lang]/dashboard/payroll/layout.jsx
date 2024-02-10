"use client";
import PayrollHOC from "@app/[lang]/components/dash/payrollPages/PayrollHOC";
import PayrollNavigation from "@app/[lang]/components/dash/payrollPages/PayrollNavigation";
import styled from "@emotion/styled";
import {
  Grid,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  stepConnectorClasses,
} from "@mui/material";
import { glassmorphismStyle } from "@styles/styles";
import React from "react";
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#162645",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#96C11F",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    margin: "0 10px 0 10px",
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  border: "1px solid",
  borderColor: "primary.main",
  zIndex: 1,
  color: "darkgray",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#96C11F",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    color: "#fff",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#96C11F",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {props.icon}
    </ColorlibStepIconRoot>
  );
}
function layout({ children }) {
  const [activeStep, setActiveStep] = React.useState(2);
  const steps = ["Select Payment Agreements", "Payroll Details ", "Summary"];
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  return (
    <Grid container xs={12} gap={4}>
      <Grid
        container
        item
        xs={12}
        alignItems={"center"}
        px={4}
        height={"80px"}
        sx={{ backgroundColor: "primary.main" }}
      >
        <Typography fontWeight={600} variant="h5">
          New Payroll Request
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          sx={{ width: "100%" }}
          connector={<ColorlibConnector />}
        >
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <PayrollHOC activeStep={activeStep} />
      <Grid
        container
        item
        position={"sticky"}
        bottom={0}
        sx={glassmorphismStyle}
      >
        <PayrollNavigation handleNext={handleNext} handleBack={handleBack} />
      </Grid>
    </Grid>
  );
}

export default layout;
