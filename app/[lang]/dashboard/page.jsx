import { Grid } from "@mui/material";
import React from "react";
import SideBar from "../components/dash/SideBar";
import DashManageHeader from "../components/dash/DashManageHeader";
import RequestsStatusHeading from "../components/dash/RequestsStatusHeading";
import RequestsTable from "../components/dash/RequestsTable";
import "@styles/styles.css";
function page() {
  return (
    <Grid
      container
      item
      alignItems={"flex-start"}
      xs={12}
      sx={{ height: "calc(100vh - 60px)" }}
    >
      <Grid container item xs={12} md={2}>
        <SideBar />
      </Grid>
      <Grid
        container
        item
        bgcolor={"background.default"}
        gap={4}
        p={4}
        xs={12}
        md={10}
      >
        <DashManageHeader />
        <RequestsStatusHeading />
        <RequestsTable />
      </Grid>
    </Grid>
  );
}

export default page;
