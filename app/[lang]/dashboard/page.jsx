"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/dash/SideBar";
import DashManageHeader from "../components/dash/DashManageHeader";
import RequestsStatusHeading from "../components/dash/RequestsStatusHeading";
import RequestsTable from "../components/tables/RequestsTable";
import "/styles/styles.css";
import getDictionary from "/lib/dictionary";
import { FormProvider, useForm } from "react-hook-form";
function page({ params: props }) {
  const [activeLink, setActiveLink] = useState("Manage Payroll Request");
  const [localeContent, setLocaleContent] = useState();
  const [activeStatus, setActiveStatus] = useState("All Requests");
  const [tableData, setTableData] = useState();

  useEffect(() => {
    const getLocale = async () => {
      const page = await getDictionary(props.lang);
      setLocaleContent(page);
    };
    getLocale();
  }, []);
  const methods = useForm({
    defaultValues: {
      paymentAgreenment: null,
      totalPayrollAmount: 0,
      totalPayrollRecords: 0,
      paymentAgreenmentFilter: "All",
    },
  });
  return (
    localeContent && (
      <FormProvider {...methods}>
        <Grid container item xs={12}>
          <Grid
            container
            item
            position={"sticky"}
            top={50}
            sx={{ height: "calc(100vh - 60px)" }}
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
      </FormProvider>
    )
  );
}

export default page;
