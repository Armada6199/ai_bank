import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import bankLogoTransparent from "/public/assets/banklogo.png";
import logoClipped from "/public/assets/bankShaped.png";
import "/styles/styles.css";
import Image from "next/image";
function page() {
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
          <Image src={bankLogoTransparent} priority alt="logo" />
        </Grid>
        <Grid container item>
          <form
            noValidate
            onSubmit={handleSubmit(async (formData) => handleLogin(formData))}
          >
            <Grid container item xs={12} maxHeight={"100%"} gap={4}>
              <Grid container xs={12} gap={1}>
                <Grid item xs={12}>
                  <Typography variant="h4" fontWeight={600} color={"#162645"}>
                    Login
                  </Typography>
                </Grid>
                <Grid item xs={1} height={"4px"} bgcolor={"#96C11F"} />
              </Grid>
              <Grid xs={12}>
                <Typography variant="h6">
                  Login with username and password
                </Typography>
              </Grid>
              <Grid container item gap={4} xs={12}>
                <Grid item xs={12}>
                  <Typography variant="body2" fontWeight={500} my={2}>
                    Enter your username
                  </Typography>
                  <TextField fullWidth type="text" />
                </Grid>{" "}
                <Grid item xs={12}>
                  <Typography variant="body2" fontWeight={500} my={2}>
                    Password
                  </Typography>
                  <TextField fullWidth name="password" type="password" />
                </Grid>
                <Grid container item xs={12} justifyContent={"flex-end"}>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      fullWidth
                      type="submit"
                      sx={{
                        borderRadius: "30px",
                        height: "50px",
                        bgcolor: "#96C11F",
                        fontWeight: 500,
                        fontSize: 20,
                      }}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
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
              Welcome To aiBank Corporate Internet Banking
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
