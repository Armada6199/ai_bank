import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/layout/Header";

function DashboardLayout({ children, params: props }) {
  return (
    <Grid container maxHeight={"100vh"}>
      <Header />
      {children}
    </Grid>
  );
}

export default DashboardLayout;
