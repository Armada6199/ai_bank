import { Grid, Typography } from "@mui/material";
import React from "react";

function payrollRequestNav() {
  return (
    <Grid container item xs={12}>
      <Grid container item xs={4}>
        <Grid
          container
          item
          alignItems={"center"}
          justifyContent={"center"}
          width={"80px"}
          height={"80px"}
          borderRadius={"50%"}
          border={'1px solid'}
          borderColor={'primary.main'}
        >
          <Typography variant="h2">1</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography>Select Payment Agreements</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default payrollRequestNav;
