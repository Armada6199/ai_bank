"use client";
import { Box, Grid, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/dash/SideBar";
import DashManageHeader from "../components/dash/DashManageHeader";
import RequestsStatusHeading from "../components/dash/RequestsStatusHeading";
import RequestsTable from "../components/tables/RequestsTable";
import "/styles/styles.css";
import getDictionary from "/lib/dictionary";
import AccountsTable from "../components/tables/AccountsTable";
function page({ params: props }) {
  const [activeLink, setActiveLink] = useState("Manage Payroll Request");
  const [localeContent, setLocaleContent] = useState();
  const [activeStatus, setActiveStatus] = useState("All Requests");
  const [tableData, setTableData] = useState();
  const [slidIn, setSLideIn] = useState("left");
  useEffect(() => {
    const getLocale = async () => {
      const page = await getDictionary(props.lang);
      setLocaleContent(page);
    };
    getLocale();
  }, []);
  useEffect(() => {
    setSLideIn((prev) => (prev === "left" ? "right" : "left"));
  }, [activeLink]);
  return (
    localeContent && (
      <Grid
        container
        item
        alignItems={"flex-start"}
        sx={{ minHeight: "calc(100vh - 80px)" }}
        xs={12}
        bgcolor={"#1A563208"}
      >
        <Grid
          container
          item
          xs={12}
          md={3}
          height={"100%"}
          maxHeight={"calc(100vh - 80px)"}
          xl={2}
        >
          <Box
            position={"sticky"}
            top={50}
            xs={12}
            md={3}
            xl={2}
            display={"flex"}
          >
            <SideBar
              sidebarLocale={localeContent.dashSidebar}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          </Box>
        </Grid>
        <Slide in={activeLink} direction={"left"} mountOnEnter unmountOnExit>
          <Grid
            container
            item
            bgcolor={"background.default"}
            gap={4}
            p={4}
            xs={12}
            md={9}
            xl={10}
            minHeight={"calc(100vh - 80px)"}
          >
            <DashManageHeader
              activeLink={activeLink}
              headerLocale={localeContent.dashHeader}
            />

            {activeLink !== "Manage Accounts" && (
              <RequestsStatusHeading
                setActiveStatus={setActiveStatus}
                activeStatus={activeStatus}
              />
            )}
            {activeLink == "Manage Accounts" ? (
              <AccountsTable />
            ) : (
              <RequestsTable
                setTableData={setTableData}
                tableData={tableData}
                activeLink={activeLink}
                activeStatus={activeStatus}
              />
            )}
          </Grid>
        </Slide>
      </Grid>
    )
  );
}

export default page;
