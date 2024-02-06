import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function DashManageHeader() {
  return (
    <Grid container item gap={4} wrap="nowrap" xs={12}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        height={"100px"}
        md={2}
        bgcolor={"#fff"}
        borderRadius={"10px"}
      >
        <CreditCardIcon sx={{ fontSize: 48, color: "primary.main" }} />
      </Grid>
      <Grid container item xs={12} md={5}>
        <Grid item xs={12}>
          <Typography variant="h6">Manage Payroll Requests</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Here you can view and manage all Payroll requests
          </Typography>
        </Grid>
      </Grid>
      <Grid item alignSelf={"center"} xs={12} md={5}>
        <Button fullWidth variant="contained" sx={{ borderRadius: "20px" }}>
          New Payroll Request
        </Button>
      </Grid>
    </Grid>
  );
}

export default DashManageHeader;
