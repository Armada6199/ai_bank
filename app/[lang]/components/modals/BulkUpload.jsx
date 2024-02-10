import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import "@styles/styles.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PayrollHeader from "../dash/payrollPages/Header";
function BulkUpload({}) {
  console.log("bulk");
  return (
    <Grid container alignItems={"flex-start"} gap={12}>
      <PayrollHeader title={"Upload Beneficiaries"} />
      <Grid
        container
        alignItems={"flex-start"}
        justifyContent={{
          textAlign: { xs: "center", md: "start" },
          xs: "center",
        }}
        item
        md={6}
        p={4}
        spacing={12}
      >
        <Grid item md={12}>
          <Paper
            variant="outlined"
            style={{
              border: true ? "2px dashed secondary.dark" : "2px dashed #C4B28F",
              padding: 20,
              textAlign: "center",
              cursor: "pointer",
              background: true ? "#fff" : "#fafafa",
              borderRadius: "20px",
            }}
          >
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
              multiple
            />
            <label htmlFor="raised-button-file">
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <CloudUploadIcon
                    sx={{ fontSize: 60, color: "secondary.dark" }}
                  />
                </IconButton>
                <Typography>{1}</Typography>
                <Typography>{1}</Typography>
              </Box>
            </label>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BulkUpload;
