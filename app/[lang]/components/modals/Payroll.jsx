"use client";
import PayrollHOC from "/app/[lang]/components/dash/payroll/components/PayrollHOC";
import PayrollNavigation from "/app/[lang]/components/dash/payroll/components/PayrollNavigation";
import {
  Box,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  ColorlibConnector,
  ColorlibStepIcon,
} from "../dash/payroll/components/Stepper";
import { useFormContext } from "react-hook-form";
import { ClearIcon } from "@mui/x-date-pickers";
function PayrollModal({ handleClosePayroll }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Select Payment Agreements", "Payroll Details ", "Summary"];

  const handleNext = (formData) => {
    if (activeStep < 2) setActiveStep((prev) => prev + 1);
  };
  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };
  const isMobile = useMediaQuery("(max-width:650px)");
  const { handleSubmit } = useFormContext();
  return (
    <Grid
      container
      xs={12}
      border={"1px solid"}
      borderColor={"primary.main"}
      gap={4}
      bgcolor={"#fff"}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          transition: "all ease-in-out 1s",
          zIndex: "99",
          backgroundColor: "primary.main",
          // borderTop: "1px solid",
          // borderTopColor: "primary.main",
        }}
        mt={isMobile ? "100px" : "0"}
        position={"sticky"}
        height={"80px"}
        maxHeight={"80px"}
        width={"100%"}
        display={"flex"}
        top={0}
      >
        <Grid container item xs={12} alignItems={"center"} px={4}>
          <Grid item xs={4}>
            <Typography fontWeight={600} variant="h5">
              New Payroll Request
            </Typography>
          </Grid>

          <Grid container xs={8} justifyContent={"flex-end"}>
            <ClearIcon
              onClick={handleClosePayroll}
              sx={{ fontSize: 38, cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container item xs={12}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          sx={{ width: "100%" }}
          connector={<ColorlibConnector />}
        >
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography variant="h6">{step}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <form
        noValidate
        style={{ width: "100%" }}
        onSubmit={handleSubmit((formData) => handleNext(formData))}
      >
        <Grid container item sx={{ minHeight: "calc(100vh - 200px)" }}>
          <PayrollHOC activeStep={activeStep} />
        </Grid>
        <Box
          sx={{
            backgroundColor: "#fff",
            transition: "all ease-in-out 1s",
            zIndex: "99",
            // borderTop: "1px solid",
            // borderTopColor: "primary.main",
          }}
          p={4}
          mt={isMobile ? "100px" : "0"}
          position={"sticky"}
          bottom={"0px"}
          maxHeight={"100px"}
        >
          <Grid container item md={12}>
            <PayrollNavigation
              handleNext={handleNext}
              handleBack={handleBack}
              activeStep={activeStep}
            />
          </Grid>
        </Box>
      </form>
    </Grid>
  );
}

export default PayrollModal;
