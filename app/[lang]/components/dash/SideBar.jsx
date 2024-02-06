import { Grid, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import bankLogoShaped from "@public/assets/logo1.png";
import Image from "next/image";

function SideBar() {
  const dashLinks = [
    { title: "Manage Payroll Request", icon: <CreditCardIcon /> },
    { title: "Manage Accounts", icon: <GroupAddIcon /> },
  ];
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent={"space-between"}
      p={4}
      bgcolor={"#fff"}
    >
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        item
        xs={12}
        gap={4}
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
          <Grid container alignItems={"flex-end"} gap={1} item xs={12}>
            <Grid item>{link.icon}</Grid>
            <Grid item>
              <Typography variant="h6">{link.title}</Typography>
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
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            All rights reserved for ai bank 2023
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SideBar;
