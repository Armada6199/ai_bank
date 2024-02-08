import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

function PaymentAgreements() {
  return (
    <Grid container item xs={12} p={4}>
      {/* <Typography>Payment Agreements</Typography> */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pay Agreenments</InputLabel>
        <Select label="Payment Agreements">
          <MenuItem value={10}>P3771717463423</MenuItem>
          <MenuItem value={20}>E3771717463423</MenuItem>
          <MenuItem value={30}>F3771717463423</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default PaymentAgreements;
