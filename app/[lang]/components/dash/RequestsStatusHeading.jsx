import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

function RequestsStatusHeading({ activeStatus, setActiveStatus }) {
  const status = ["All Requests", "Pending", "Rejected"];
  return (
    <Grid
      container
      item
      xs={12}
      height={"60px"}
      alignItems={"center"}
      gap={4}
      px={4}
      sx={{
        borderTop: "1px solid",
        borderTopColor: "primary.main",
        borderBottom: "1px solid",
        borderBottomColor: "primary.main",
      }}
    >
      {status.map((stat) => (
        <Grid item>
          <Button
            variant={activeStatus === stat ? "contained" : "text"}
            onClick={() => setActiveStatus(stat)}
            sx={{
              color: "secondary.main",
              bgcolor: activeStatus == stat ? "primary.main" : "",
              fontWeight: 700,
              transition: "all .2s ease-in",
              borderRadius: "10px",
            }}
          >
            {stat}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default RequestsStatusHeading;
