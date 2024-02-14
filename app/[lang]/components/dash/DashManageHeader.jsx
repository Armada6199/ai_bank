"use client";
import { Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddAcc from "../modals/AddAcc";
import PayrollModal from "../modals/Payroll";
import AddIcon from "@mui/icons-material/Add";
// import PayrollModal from "../modals/Payroll";
import "/styles/styles.css";
import Slide from "@mui/material/Slide";

function DashManageHeader({ headerLocale, activeLink }) {
  const activeLocale =
    activeLink === "Manage Payroll Request"
      ? headerLocale.managePayroll
      : headerLocale.manageAccounts;
  const [openAccount, setOpenAccount] = useState(false);
  const [openPayroll, setOpenPayroll] = useState(false);
  const handleCloseAcc = () => setOpenAccount(false);
  const handleOpenAcc = () => setOpenAccount(true);
  const handleOpenPayroll = () => setOpenPayroll(true);
  const handleClosePayroll = () => setOpenPayroll(false);
  return (
    <Grid
      container
      item
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      xs={12}
      bgcolor={"#f3f3f3"}
    >
      <Grid container item xs={12} md={8} gap={4}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          xs={2}
          md={1}
          bgcolor={"#fff"}
          height={"80px"}
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
      <Grid container item xs={12} alignSelf={"center"} md={2}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddIcon />}
            onClick={() =>
              activeLink == "Manage Payroll Request"
                ? handleOpenPayroll()
                : handleOpenAcc()
            }
            sx={{ borderRadius: "20px", fontWeight: 700 }}
          >
            {activeLocale.buttonText}
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={openAccount}
        onClose={handleCloseAcc}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container item xs={8}>
          <AddAcc activeLocale={activeLocale} />
        </Grid>
      </Modal>
      <Modal
        open={openPayroll}
        onClose={handleClosePayroll}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          item
          xs={10}
          overflow={"auto"}
          maxHeight={"90vh"}
          className="payroll_modal"
        >
          <PayrollModal handleClosePayroll={handleClosePayroll} />
        </Grid>
      </Modal>
    </Grid>
  );
}

export default DashManageHeader;
