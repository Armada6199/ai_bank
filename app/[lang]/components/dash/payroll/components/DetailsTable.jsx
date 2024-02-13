"use client";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { glassmorphismStyle } from "/styles/styles";
import React, { useContext } from "react";
import CustomDatePicker from "../../../CustomDatePicker";
import BulkUpload from "../../../modals/BulkUpload";
import { useFormContext } from "react-hook-form";
import { agreementContext } from "@/hooks/AgreementProvider";
import AddBeneficiary from "../../../modals/AddBeneficary";
function DetailsTable({}) {
  const [openBulk, setOpenBulk] = React.useState(false);
  const openBulkModal = () => setOpenBulk(true);
  const closeBulkModal = () => setOpenBulk(false);
  const [openAddBeneficiary, setOpenAddBeneficiary] = React.useState(false);
  const openAddBeneficiaryModal = () => setOpenAddBeneficiary(true);
  const closeAddBeneficiaryModal = () => setOpenAddBeneficiary(false);
  const { register, getValues } = useFormContext();
  const { accounts } = useContext(agreementContext);
  return (
    <Grid container item gap={4}>
      <Grid container item>
        <Grid item xs={6}>
          <Typography variant="h5">Payroll Details</Typography>
        </Grid>
        <Grid container item spacing={4} justifyContent={"flex-end"} xs={6}>
          <Grid item xs={4}>
            <Button
              onClick={() => openBulkModal()}
              fullWidth
              variant="contained"
              startIcon={<FileUploadIcon />}
            >
              BULK Upload
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={openAddBeneficiaryModal}
              fullWidth
              variant="contained"
            >
              Add Beneficiary
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        border={"1px solid "}
        sx={{ borderColor: "primary.main" }}
        gap={2}
        p={4}
      >
        <Grid container item spacing={4}>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography variant="h6">Total Amount</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight={600}>
                {getValues("totalPayrollAmount")}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography variant="h6">Payment Agreements</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight={600}>
                {getValues("paymentAgreement")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item spacing={4}>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography variant="h6">Total Records</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight={600}>
                {getValues("totalPayrollRecords")}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography variant="h6">File ID</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight={600}>
                {getValues("fileId")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item spacing={4}>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography variant="h6">Value Date</Typography>
            </Grid>
            <Grid item>
              <CustomDatePicker />
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography variant="h6">Funding</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <Select
                  sx={{ height: "40px" }}
                  {...register("funding", { required: "Choose Funding" })}
                >
                  {accounts.map((acc) => (
                    <MenuItem value={acc.accountID}>{acc.accountID}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={openBulk}
        onClose={closeBulkModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container item xs={8} sx={glassmorphismStyle}>
          <BulkUpload closeBulkModal={closeBulkModal} />
        </Grid>
      </Modal>
      <Modal
        open={openAddBeneficiary}
        onClose={closeAddBeneficiaryModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container item xs={8} sx={glassmorphismStyle}>
          <AddBeneficiary closeAddBeneficiaryModal={closeAddBeneficiaryModal} />
        </Grid>
      </Modal>
    </Grid>
  );
}

export default DetailsTable;
