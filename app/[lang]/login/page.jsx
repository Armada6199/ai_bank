import getDictionary from "@lib/dictionary";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import bankLogoTransparent from "@public/assets/Screenshot_2024-02-05_172409-removebg-preview.png";
import LoginForm from "../components/LoginForm";
import "@styles/styles.css";
import Image from "next/image";
async function page({ params: props }) {
  const localeContent = await getDictionary(props.lang);
  return (
    <Grid
      container
      xs={12}
      height={"100vh"}
      maxHeight={"100vh"}
      p={4}
      gap={12}
      wrap="nowrap"
      bgcolor={"background.default"}
    >
      <Grid container xs={12} gap={12} md={6}>
        <Grid item xs={12}>
          <Image
            width={200}
            height={100}
            src={bankLogoTransparent}
            alt="logo"
          />
        </Grid>

        <LoginForm />
      </Grid>
      <Grid
        container
        position={"relative"}
        item
        xs={12}
        className="login_background"
        sx={{ borderBottomRightRadius: "220px" }}
        md={6}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(255,255,255,.9)",
            borderBottomRightRadius: "220px",
            zIndex: 1,
          }}
        />
        <Grid container item xs={10} zIndex={2} gap={4} p={4}>
          <Grid
            style={{
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "50px",
            }}
            width={120}
            bgcolor={"#fff"}
            height={150}
            item
            xs={12}
          >
            <Image
              src={bankLogoTransparent}
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
              Welcome To aiBank Corporate Internet Banking{" "}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant="body1" fontWeight={500}>
              Manage day-to-day business banking needs from one central
              location.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default page;
