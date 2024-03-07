"use client";
import { Box, Button, Grid, Slide } from "@mui/material";
import React, { useContext, useState } from "react";
import SideBar from "./components/dash/SideBar";
import "/styles/styles.css";
import PayrollsRequests from "./components/dash/PayrollsRequests";
import AccountsPage from "./components/dash/AccountsPage";
import { keycloakContext } from "@/hooks/KeycloakProvider";

function page({ params: props }) {
  const [activeLink, setActiveLink] = useState("Manage Payroll Request");
  const { _kc, updatePassword } = useContext(keycloakContext);
  return (
    <Grid
      container
      item
      alignItems={"flex-start"}
      xs={12}
      bgcolor={"#1A563208"}
      height={"calc(100vh - 80px)"}
    >
      <Grid container item xs={12} md={3} height={"100%"} xl={2}>
        <Box
          position={"sticky"}
          top={50}
          xs={12}
          md={3}
          xl={2}
          display={"flex"}
        >
          <SideBar activeLink={activeLink} setActiveLink={setActiveLink} />
        </Box>
      </Grid>
      <Slide
        in={activeLink == "Manage Payroll Request"}
        direction={activeLink == "Manage Payroll Request" ? "left" : "right"}
        timeout={400}
        mountOnEnter
        unmountOnExit
      >
        <Grid container item xs={12} md={9} xl={10}>
          <PayrollsRequests activeLink={activeLink} lang={props.lang} />
        </Grid>
      </Slide>

      <Slide
        in={activeLink !== "Manage Payroll Request"}
        direction={activeLink !== "Manage Payroll Request" ? "left" : "right"}
        mountOnEnter
        unmountOnExit
        timeout={400}
      >
        <Grid container item xs={12} md={9} xl={10} sx={{ zIndex: -5 }}>
          <AccountsPage activeLink={activeLink} lang={props.lang} />
        </Grid>
      </Slide>
    </Grid>
  );
}

export default page;