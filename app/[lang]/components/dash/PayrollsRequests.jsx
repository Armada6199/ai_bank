"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashManageHeader from "./DashManageHeader";
import RequestsStatusHeading from "./RequestsStatusHeading";
import RequestsTable from "../tables/RequestsTable";
import getDictionary from "@/lib/dictionary";

function PayrollsRequests({ activeLink, lang }) {
  const [localeContent, setLocaleContent] = useState();
  const [activeStatus, setActiveStatus] = useState("All Requests");
  useEffect(() => {
    const getLocale = async () => {
      const page = await getDictionary(lang);
      setLocaleContent(page);
    };
    getLocale();
  }, []);
  return (
    localeContent && (
      <Grid
        container
        item
        bgcolor={"background.default"}
        gap={4}
        p={4}
        minHeight={"calc(100vh - 80px)"}
      >
        <DashManageHeader
          activeLink={activeLink}
          headerLocale={localeContent.dashHeader}
        />

        <RequestsStatusHeading
          setActiveStatus={setActiveStatus}
          activeStatus={activeStatus}
        />

        <RequestsTable activeLink={activeLink} activeStatus={activeStatus} />
      </Grid>
    )
  );
}

export default PayrollsRequests;
