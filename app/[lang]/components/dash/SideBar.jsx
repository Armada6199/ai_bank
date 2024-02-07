"use client";
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import bankLogoShaped from "@public/assets/logo1.png";
import Image from "next/image";

function SideBar({ activeLink, setActiveLink }) {
  const dashLinks = [
    { title: "Manage Payroll Request", icon: <CreditCardIcon /> },
    { title: "Manage Accounts", icon: <GroupAddIcon /> },
  ];
  return (
    <Grid container item height={"100vh"} xs={12}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        item
        xs={12}
        borderBottom={"1px solid"}
        sx={{ borderBottomColor: "primary.main" }}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          item
          xs={4}
          sx={{
            border: "1px solid",
            borderColor: "primary.main",
            height: "80px",
            width: "80px",
            borderRadius: "50%",
          }}
        >
          <AccountCircleIcon sx={{ fontSize: 40, color: "primary.main" }} />
        </Grid>
        <Grid xs={12} textAlign={"center"}>
          <Typography variant="h5" color={""} fontWeight={600}>
            ALI
          </Typography>
          <Typography variant="body1" color={""}>
            account owner
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        {dashLinks.map((link) => (
          <Grid
            container
            gap={1}
            p={2}
            onClick={() => setActiveLink(link.title)}
            sx={{
              borderRight: activeLink === link.title ? "5px solid" : "",
              borderRightColor: activeLink === link.title ? "primary.main" : "",
              cursor: "pointer",
            }}
            bgcolor={
              activeLink === link.title ? "primary.light" : "transparent"
            }
            item
            xs={12}
          >
            <Grid item>{link.icon}</Grid>
            <Grid item>
              <Typography fontWeight={600}>{link.title}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        item
        xs={12}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={8}>
          <Image
            src={bankLogoShaped}
            alt="bank logo"
            style={{ height: "150px", width: "100%" }}
          />
          <Typography variant="h6">
            All rights reserved for ai bank 2023
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SideBar;
