import { Grid, Typography } from "@mui/material";
import React from "react";

function layout({ children }) {
  return (
    <Grid container xs={12} bgcolor={'red'}>
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
      {children}
    </Grid>
  );
}

export default layout;
