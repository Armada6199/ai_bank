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
import React from "react";
import CustomDatePicker from "../../../CustomDatePicker";
import BulkUpload from "../../../modals/BulkUpload";
import { useFormContext } from "react-hook-form";
function DetailsTable({ setFilteredTableData, filteredTableData,setTableData }) {
  const [openBulk, setOpenBulk] = React.useState(false);
  const openBulkModal = () => setOpenBulk(true);
  const closeBulkModal = () => setOpenBulk(false);
  const { register,getValues } = useFormContext();
  
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
            <Button fullWidth variant="contained">
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
                {getValues('totalPayrollAmount')}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography variant="h6">Payment Agreements</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight={600}>
                PAY2058
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
              {getValues('totalPayrollRecords')}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography variant="h6">File ID</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight={600}>
                205548667
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
                  sx={{ height: "35px" }}
                  {...register("funding", { required: "Choose Funding" })}
                >
                  <MenuItem value={10}>P3771717463423</MenuItem>
                  <MenuItem value={20}>E3771717463423</MenuItem>
                  <MenuItem value={30}>F3771717463423</MenuItem>
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
          <BulkUpload
            closeBulkModal={closeBulkModal}
            setFilteredTableData={setFilteredTableData}
            filteredTableData={filteredTableData}
            setTableData={setTableData}
          />
        </Grid>
      </Modal>
    </Grid>
  );
}

export default DetailsTable;
