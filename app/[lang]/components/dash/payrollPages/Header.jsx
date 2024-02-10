import { Grid, Typography } from "@mui/material";
import React from "react";

function PayrollHeader({ title }) {
  return (
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
        {title}
      </Typography>
    </Grid>
  );
}

export default PayrollHeader;
