"use client";
import { Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddAcc from "../modals/AddAcc";
import PayrollModal from "../modals/Payroll";
// import PayrollModal from "../modals/Payroll";
import "/styles/styles.css";

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
        <Grid container item xs={10}>
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
          maxHeight={"90vh"}
          zIndex={99}
          overflow={"auto"}
          className="payroll_modal"
        >
          <PayrollModal handleClosePayroll={handleClosePayroll} />
        </Grid>
      </Modal>
    </Grid>
  );
}

export default DashManageHeader;
