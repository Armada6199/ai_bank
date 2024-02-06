import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function RequestsStatusHeading() {
  const status = ["All Requests", "Pending", "Rejected"];
  const activeStatus = "All Requests";
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
        <Grid item sx={{ bgcolor: activeStatus == stat ? "primary.main" : "" }}>
          <Button
            variant={activeStatus === stat ? "contained" : "text"}
            sx={{ color: "secondary.main", fontWeight: 700 }}
          >
            {stat}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default RequestsStatusHeading;
