"use client";
import PayrollHOC from "/app/[lang]/components/dash/payroll/components/PayrollHOC";
import PayrollNavigation from "/app/[lang]/components/dash/payroll/components/PayrollNavigation";
import styled from "@emotion/styled";
import DoneIcon from "@mui/icons-material/Done";
import {
  Box,
  Grid,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  stepConnectorClasses,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 35,
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
    margin: "0 20px 0 20px",
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  border: "1px solid",
  borderColor: "primary.main",
  zIndex: 1,
  color: "darkgray",
  width: 70,
  height: 70,
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
    color: "#fff",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? (
        <DoneIcon />
      ) : (
        <Typography variant="h5">{props.icon}</Typography>
      )}
    </ColorlibStepIconRoot>
  );
}
function layout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Select Payment Agreements", "Payroll Details ", "Summary"];

  const { handleSubmit } = methods;
  const handleNext = (formData) => {
    if (activeStep < 2) setActiveStep((prev) => prev + 1);
  };
  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };
  const isMobile = useMediaQuery("(max-width:650px)");

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
            />
          </Grid>
        </Box>
      </form>
    </Grid>
  );
}

export default layout;
