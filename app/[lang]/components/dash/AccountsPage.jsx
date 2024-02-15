"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashManageHeader from "./DashManageHeader";
import AccountsTable from "../tables/AccountsTable";
import getDictionary from "@/lib/dictionary";

function AccountsPage({ activeLink, lang }) {
  const [localeContent, setLocaleContent] = useState();

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

        <AccountsTable />
      </Grid>
    )
  );
}

export default AccountsPage;
