"use client";
import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/layout/Header";
import { usePathname } from "next/navigation";

function DashboardLayout({ children, params: props }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Grid container maxHeight={"100vh"}>
      {pathname == `/${props.lang}/dashboard` && <Header />}
      {children}
    </Grid>
  );
}

export default DashboardLayout;
