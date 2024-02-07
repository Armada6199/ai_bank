"use client";
import { Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { glassmorphismStyle } from "@styles/styles";
import AddAcc from "../modals/AddAcc";

function DashManageHeader({ headerLocale, activeLink }) {
  const activeLocale =
    activeLink === "Manage Payroll Request"
      ? headerLocale.managePayroll
      : headerLocale.manageAccounts;
  const [openAccount, setOpenAccount] = useState(false);
  const handleCloseAcc = () => setOpenAccount(false);
  const handleOpenAcc = () => setOpenAccount(true);

  return (
    <Grid container item gap={4} wrap="nowrap" xs={12}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        height={"100px"}
        md={2}
        bgcolor={"#fff"}
        borderRadius={"10px"}
      >
        <CreditCardIcon sx={{ fontSize: 48, color: "primary.main" }} />
      </Grid>
      <Grid container item xs={12} md={5}>
        <Grid item xs={12}>
          <Typography variant="h6">{activeLocale.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{activeLocale.description}</Typography>
        </Grid>
      </Grid>
      <Grid item alignSelf={"center"} xs={12} md={5}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => handleOpenAcc()}
          sx={{ borderRadius: "20px" }}
        >
          {activeLocale.buttonText}
        </Button>
      </Grid>
      <Modal
        open={openAccount}
        onClose={handleCloseAcc}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container item xs={10}>
          {activeLink == "Manage Payroll Request" ? (
            ""
          ) : (
            <AddAcc activeLocale={activeLocale} />
          )}
        </Grid>
      </Modal>
    </Grid>
  );
}

export default DashManageHeader;
