"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { Grid, useMediaQuery } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import "@styles/styles.css";
import { useForm } from "react-hook-form";
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
    <form noValidate onSubmit={handleSubmit}>
      (
      <Grid
        container
        item
        xs={12}
        justifyContent={isMobile ? "center" : "flex-start"}
        alignItems={"flex-start"}
      >
        <Grid container minHeight={"20vh"} item xs={12} p={4} gap={2}>
          <Grid item xs={12}>
            <Typography
              sx={{ textAlign: { xs: "center", md: "start" } }}
              variant="h4"
            ></Typography>
          </Grid>
          <Grid container={isMobile ? true : false} item xs={12}>
            {isMobile ? (
              <Grid container gap={2} item xs={12}>
                <Grid container justifyContent={"center"} item xs={12}>
                  <Typography variant="h6"></Typography>
                </Grid>
                <Grid container item xs={12}>
                  <MobileStepper
                    variant="progress"
                    position="static"
                    activeStep={activeStep}
                    classes={{ dotActive: "progress_active" }}
                    sx={{
                      width: "100%",
                      flexGrow: 1,
                      justifyContent: "center",
                      ".MuiMobileStepper-progress": {
                        width: "100%",
                        backgroundColor: "secondary.dark",
                      },
                    }}
                    style={{
                      backgroundColor: "#f0f0f0", // Set a background color for the progress bar
                    }}
                  />
                </Grid>
              </Grid>
            ) : (
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  return (
                    <Grid container alignItems={"center"} item xs={12}>
                      <Grid item gap={4}>
                        <Box
                          width={"100%"}
                          mr={"2px"}
                          display={"flex"}
                          flexDirection={"column"}
                          gap={2}
                          key={label.title}
                        >
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
                            <Typography
                              variant="h5"
                              fontWeight={700}
                              color={activeStep > index ? "#fff" : "darkgray"}
                            >
                              {label.title}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      {index < 2 && (
                        <Grid
                          item
                          xs={4}
                          height={"3px"}
                          bgcolor={"secondary.main"}
                        ></Grid>
                      )}
                    </Grid>
                  );
                })}
              </Stepper>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          item
          p={4}
          md={12}
          minHeight={"75vh"}
          gap={4}
          bgcolor={"#fff"}
        >
          {/* <Grid container item md={12}>
            <StepperComponentsHOC
              register={register}
              errors={errors}
              uploadProgress={uploadProgress}
              setUploadProgress={setUploadProgress}
              lang={lang}
            />
          </Grid> */}
        </Grid>
        <Box
          sx={{
            backgroundColor: "#fff",
            transition: "all ease-in-out 1s",
            zIndex: "99",
          }}
          width={"100%"}
          p={4}
          mt={isMobile ? "100px" : "0"}
          maxHeight={"60px"}
          position={"sticky"}
          bottom={"0px"}
        >
          {/* <Grid container item md={12}>
            <StepperNavigationButtons
              handleBack={handleBack}
              activeStep={activeStep}
              navigationContent={localePageContent.navigation}
              lang={lang}
            />
          </Grid> */}
        </Box>
      </Grid>
      )
    </form>
  );
}

export default LoanStepperPage;
