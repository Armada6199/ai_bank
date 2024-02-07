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
    <Grid
      container
      item
      gap={4}
      wrap="nowrap"
      justifyContent={"space-between"}
      xs={12}
    >
      <Grid container item xs={8} gap={4}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          xs={2}
          height={"100px"}
          bgcolor={"#fff"}
          borderRadius={"10px"}
        >
          <CreditCardIcon sx={{ fontSize: 48, color: "primary.main" }} />
        </Grid>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight={700}>
              {activeLocale.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" fontWeight={500}>
              {activeLocale.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item alignSelf={"center"} xs={12} md={2}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => handleOpenAcc()}
          sx={{ borderRadius: "20px", fontWeight: 700 }}
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
        <Grid container item xs={10} sx={glassmorphismStyle}>
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
