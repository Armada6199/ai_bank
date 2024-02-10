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
import React from "react";
import PaymentAgreements from "../dash/payrollPages/PaymentAgreements";
import { glassmorphismStyle, stepStyle } from "@styles/styles";
import PayrollNavigation from "../dash/payrollPages/PayrollNavigation";
import styled from "@emotion/styled";
import PayrollHOC from "../dash/payrollPages/PayrollHOC";
export default Payroll;

function Payroll() {
  const steps = ["Select Payment Agreements", "Payroll Details ", "Summary"];
  const [activeStep, setActiveStep] = React.useState(2);
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
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

  return (
    <Grid
      container
      item
      xs={12}
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
      <PayrollNavigation handleNext={handleNext} handleBack={handleBack} />
    </Grid>
  );
}
