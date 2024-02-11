import { Grid, Typography } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
function PayrollHeader({ title, closeBulkModal }) {
  return (
    <Grid
      container
      item
      xs={12}
      alignItems={"center"}
      px={4}
      height={"80px"}
      sx={{
        backgroundColor: "primary.main",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
      }}
    >
      <Grid item xs={10}>
        <Typography fontWeight={600} variant="h5">
          {title}
        </Typography>
      </Grid>
      <Grid container justifyContent={"flex-end"} item xs={2}>
        <ClearIcon
          onClick={() => closeBulkModal()}
          sx={{ cursor: "pointer", fontSize: 32, color: "secondary.main" }}
        />
      </Grid>
    </Grid>
  );
}

export default PayrollHeader;
