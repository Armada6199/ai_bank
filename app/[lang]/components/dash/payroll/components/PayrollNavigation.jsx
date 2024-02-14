import { Button, Grid } from "@mui/material";

function PayrollNavigation({ handleBack, activeStep }) {
  return (
    <Grid container justifyContent={"space-between"} spacing={12} item xs={12}>
      <Grid item xs={2}>
        <Button onClick={handleBack} fullWidth variant="outlined">
          Back
        </Button>
      </Grid>
      <Grid container item xs={8} justifyContent={"flex-end"} spacing={12}>
        {activeStep > 0 && activeStep < 2 && (
          <Grid item xs={4}>
            <Button fullWidth variant="outlined">
              Save As Draft
            </Button>
          </Grid>
        )}
        <Grid item xs={4}>
          <Button type="submit" fullWidth variant="contained">
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PayrollNavigation;
