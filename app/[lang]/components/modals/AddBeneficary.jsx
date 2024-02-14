"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import PayrollHeader from "../dash/payroll/components/Header";
import { agreementContext } from "@/hooks/AgreementProvider";
function AddBeneficiary({ closeAddBeneficiaryModal }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { setBeneficaries, setFilteredBenficaries } =
    useContext(agreementContext);
  async function handleAddBeneficiary(formData) {
    try {
      const beneficaryArray = [];
      for (let data of Object.keys(formData)) {
        beneficaryArray.push(formData[data]);
      }
      setBeneficaries((prev) => [...prev, beneficaryArray]);
      setFilteredBenficaries((prev) => [...prev, beneficaryArray]);
      closeAddBeneficiaryModal();
    } catch (error) {
      console.log(error);
    }
  }
  console.log("rerender");

  return (
    <Grid container item justifyContent={"center"} gap={4}>
      <PayrollHeader
        closeModal={closeAddBeneficiaryModal}
        title={"Add New Beneficiary"}
      />
      <Grid container item p={4} gap={4}>
        <Grid container item spacing={4} xs={12}>
          <Grid item xs={6}>
            <Typography>Beneficiary name *</Typography>
            <TextField
              {...register("beneficiaryName", {
                required: "Account name is required",
              })}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Account *</Typography>

            <TextField
              fullWidth
              {...register("account", { required: "Email is required" })}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container item spacing={4} xs={12}>
          <Grid item xs={6}>
            <Typography>Bank *</Typography>
            <TextField
              {...register("bankName", {
                required: "Bank name name is required",
              })}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Amount *</Typography>

            <TextField
              fullWidth
              {...register("beneficiaryAmount", {
                required: "Amount is required",
              })}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"flex-end"} m={4} item xs={12}>
        <Grid item xs={2}>
          <Button
            fullWidth
            onClick={handleSubmit((formData) => handleAddBeneficiary(formData))}
            variant={"contained"}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddBeneficiary;
