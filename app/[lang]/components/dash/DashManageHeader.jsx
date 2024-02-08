"use client";
import { Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { glassmorphismStyle } from "@styles/styles";
import AddAcc from "../modals/AddAcc";
import Payroll from "../modals/Payroll";

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
      alignItems={"flex-start"}
      xs={12}
    >
      <Grid container item xs={12} gap={4}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          xs={2}
          md={1}
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
        <Grid
          container
          item
          xs={12}
          alignSelf={"center"}
          justifyContent={"flex-end"}
          md={4}
        >
          <Button
            variant="contained"
            onClick={() => handleOpenAcc()}
            sx={{ borderRadius: "20px", fontWeight: 700 }}
          >
            {activeLocale.buttonText}
          </Button>
        </Grid>
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
            <Payroll />
          ) : (
            <AddAcc activeLocale={activeLocale} />
          )}
        </Grid>
      </Modal>
    </Grid>
  );
}

export default DashManageHeader;
