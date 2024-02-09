import { Button, Grid } from "@mui/material";
import React from "react";

function PayrollNavigation({ handleNext,handleBack }) {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      spacing={12}
      item
      xs={12}
      p={4}
    >
      <Grid item xs={2}>
        <Button onClick={handleBack} fullWidth variant="outlined">
          Back
        </Button>
      </Grid>
      <Grid container item xs={8} justifyContent={"flex-end"} spacing={12}>
        <Grid item xs={4}>
          <Button fullWidth variant="outlined">
            Save As Draft
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleNext} fullWidth variant="contained">
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PayrollNavigation;
