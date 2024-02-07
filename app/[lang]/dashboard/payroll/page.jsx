"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { FormControl, Grid, useMediaQuery } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import "@styles/styles.css";
import { useForm } from "react-hook-form";
import { Label } from "@mui/icons-material";
function LoanStepperPage({ params: { lang } }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: "1", desc: "Select Payment Agreements" },
    { title: "2", desc: "Payroll Details " },
    { title: "3", desc: "Summary" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const isMobile = useMediaQuery("(max-width:650px)");

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    } else return;
  };

  return (
    <Grid container item xs={12} justifyContent={"center"} p={4}>
      <FormControl fullWidth noValidate onSubmit={handleSubmit}>
        {isMobile ? null : (
          <Grid container item xs={12}>
            {steps.map((step, index) => (
              <Grid container position={"relative"} item xs={4}>
                <Grid container item xs={4}>
                  <Box
                    display={"flex"}
                    height={"80px"}
                    width={"80px"}
                    borderRadius={"50%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"1px solid"}
                    borderColor={"primary.main"}
                  >
                    <Typography variant="h5" fontWeight={700}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Grid item xs={12}>
                    <Typography variant="body1" fontWeight={700}>
                      {step.desc}
                    </Typography>
                  </Grid>{" "}
                </Grid>
                {index < 2 && (
                  <Grid item xs={8} width={"80%"} height={"3px"}></Grid>
                )}
              </Grid>
            ))}
          </Grid>
        )}
      </FormControl>
    </Grid>
  );
}

export default LoanStepperPage;
{
  /* <Grid container xs={12}>
<Grid container item gap={8}>
  <Grid>
    <Box
      display={"flex"}
      height={"80px"}
      width={"80px"}
      borderRadius={"50%"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"1px solid"}
      borderColor={"primary.main"}
    >
      <Typography variant="h5" fontWeight={700}>
        1
      </Typography>
    </Box>
  </Grid>
  <Grid
    item
    xs={8}
    height={"3px"}
    alignSelf={"center"}
    bgcolor={"secondary.main"}
  ></Grid>
  </Grid>
  <Grid item xs={12}>
    <Typography variant="h5" fontWeight={700}>
      Payroll Details
    </Typography>
  </Grid>
</Grid> */
}
