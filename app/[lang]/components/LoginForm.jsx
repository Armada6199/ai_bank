import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function LoginForm() {
  return (
    <Grid container item xs={12} gap={4}>
      <Grid xs={12}>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="h6">Login with username and password</Typography>
      </Grid>
      <Grid container item gap={4} xs={12}>
        <Grid item xs={12}>
          <Typography variant="body2">Enter Your username</Typography>
          <TextField fullWidth name="email" type="email" />
        </Grid>{" "}
        <Grid item xs={12}>
          <Typography variant="body2">Enter Your password</Typography>
          <TextField fullWidth name="password" type="password" />
        </Grid>
        <Grid container item xs={12} justifyContent={"flex-end"}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: "30px",
                height: "60px",
                bgcolor: "primary.main",
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
