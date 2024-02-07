"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/dash/SideBar";
import DashManageHeader from "../components/dash/DashManageHeader";
import RequestsStatusHeading from "../components/dash/RequestsStatusHeading";
import RequestsTable from "../components/dash/RequestsTable";
import "@styles/styles.css";
import getDictionary from "@lib/dictionary";
import { payrollsData } from "@public/constants";
function page({ params: props }) {
  const [activeLink, setActiveLink] = useState("Manage Payroll Request");
  const [localeContent, setLocaleContent] = useState();
  const [activeStatus, setActiveStatus] = useState("All Requests");
  const [tableData, setTableData] = useState(payrollsData);

  useEffect(() => {
    const getLocale = async () => {
      const page = await getDictionary(props.lang);
      setLocaleContent(page);
    };
    getLocale();
  }, []);
  return (
    localeContent && (
      <Grid container item xs={12}>
        <Grid
          container
          item
          maxHeight={"100vh"}
          position={"sticky"}
          top={50}
          xs={12}
          md={3}
          xl={2}
        >
          <SideBar
            sidebarLocale={localeContent.dashSidebar}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </Grid>
        <Grid
          container
          item
          bgcolor={"background.default"}
          gap={4}
          p={4}
          xs={12}
          md={9}
          xl={10}
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
          <RequestsTable
            setTableData={setTableData}
            tableData={tableData}
            activeLink={activeLink}
            activeStatus={activeStatus}
          />
        </Grid>
      </Grid>
    )
  );
}

export default page;
