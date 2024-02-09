import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function DetailsTable() {
  return (
    <Grid container item>
      <Grid container item>
        <Grid item xs={6}>
          <Typography variant="h5">Payroll Details</Typography>
        </Grid>
        <Grid container item spacing={4} xs={6}>
          <Grid item xs={6}>
            <Button fullWidth variant="contained">
              Bult Upload
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained">
              Add Beneficiary
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item border={"1px solid lightgray"} gap={2} p={4}>
        <Grid container item spacing={4}>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography>Total Amount</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>5000</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography>Payment Agreements</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>PAY2058</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item spacing={4}>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography>Total Records</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>50</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography>File ID</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>205548667</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item spacing={4}>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography>Value Date</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth />
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography>Funding</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DetailsTable;