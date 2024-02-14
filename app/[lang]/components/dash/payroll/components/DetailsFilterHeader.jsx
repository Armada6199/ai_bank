"use client";
import { Button, Grid } from "@mui/material";
import React from "react";
import "/styles/styles.css";

function DetailsFilterHeader({ activeFilter, setActiveFilter }) {
  return (
    <Grid
      container
      item
      xs={12}
      gap={4}
      p={4}
      sx={{
        borderTop: "1px solid",
        borderTopColor: "primary.main",
        borderBottom: "1px solid",
        borderBottomColor: "primary.main",
      }}
    >
      <Grid item>
        <Button
          fullWidth
          sx={{ transition: "all .2s ease-in" }}
          onClick={() => setActiveFilter("All Beneficiary")}
          variant={activeFilter == "All Beneficiary" ? "contained" : "text"}
        >
          All Beneficiary
        </Button>
      </Grid>
      <Grid item>
        <Button
          fullWidth
          sx={{ transition: "all .2s ease-in" }}
          onClick={() => setActiveFilter("Error Beneficiary")}
          variant={activeFilter == "Error Beneficiary" ? "contained" : "text"}
        >
          Error Beneficiary
        </Button>
      </Grid>
    </Grid>
  );
}

export default DetailsFilterHeader;
