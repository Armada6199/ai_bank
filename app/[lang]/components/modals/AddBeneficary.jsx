import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import PayrollHeader from "../dash/payroll/components/Header";
function AddBeneficiary({ closeAddBeneficiaryModal }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function handleAddBeneficiary() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  console.log(errors);
  return (
    <form
      noValidate
      style={{ width: "100%", padding: 0, margin: 0 }}
      onSubmit={handleSubmit(async (formData) =>
        handleAddBeneficiary(formData)
      )}
    >
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
            <Button fullWidth type="submit" variant={"contained"}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddBeneficiary;
