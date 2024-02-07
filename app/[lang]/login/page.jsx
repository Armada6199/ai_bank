import getDictionary from "@lib/dictionary";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import bankLogoTransparent from "@public/assets/Screenshot_2024-02-05_172409-removebg-preview.png";
import LoginForm from "../components/LoginForm";
import logoClipped from "@public/assets/logo1.png";
import "@styles/styles.css";
import Image from "next/image";
async function page({ params: props }) {
  const localeContent = await getDictionary(props.lang);
  return (
    <Grid
      container
      xs={12}
      p={4}
      sx={{ height: "100vh" }}
      gap={12}
      wrap="nowrap"
      bgcolor={"background.default"}
    >
      <Grid container xs={12} maxHeight={"100vh"} gap={4} md={6}>
        <Grid item xs={12}>
          <Image src={bankLogoTransparent} alt="logo" />
        </Grid>
        <Grid container item>
          <LoginForm />
        </Grid>
      </Grid>
      <Grid
        container
        position={"relative"}
        item
        xs={12}
        className="login_background"
        border={"none"}
        sx={{ borderBottomRightRadius: "220px", position: "relative" }}
        md={6}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(255,255,255,.8)",
            borderBottomRightRadius: "220px",
            border: "none",

            zIndex: 1,
          }}
        />
        <Grid container item xs={10} zIndex={2} gap={4} p={4}>
          <Grid item xs={4}>
            <Image
              src={logoClipped}
              style={{
                imageRendering: "crisp-edges",
                maxHeight: "150px",
                maxWidth: "150px",
              }}
              alt="logo"
            />
          </Grid>
          <Grid xs={12}>
            <Typography
              variant="h2"
              fontWeight={"600"}
              color={"secondary.main"}
            >
              Welcome To <span style={{ color: "#96C11F" }}>ai</span>Bank{" "}
              <span style={{ color: "#96C11F" }}>Corporate</span> Internet
              Banking{" "}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant="h6" fontWeight={500}>
              Manage day-to-day business banking needs from one central
              location.
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            clipPath: " polygon(100% 0, 0% 100%, 100% 100%)",
            bgcolor: "primary.main",
            height: "80px",
            width: "80px",
            bottom: 0,
            right: 0,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default page;
