import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

function PaymentAgreements({}) {
  const { register } = useFormContext();

  return (
    <Grid container item xs={12} p={4} alignItems={"flex-start"}>
      <Grid container item gap={4} xs={12}>
        <Typography>Payment Agreements</Typography>
        <FormControl fullWidth>
          <InputLabel>Pay Agreenments</InputLabel>
          <Select
            defaultValue={null}
            {...register("paymentAgreement", {
              required: "Choose Payment Agreement",
            })}
            label="Payment Agreements"
          >
            <MenuItem value={"P3771717463423"}>P3771717463423</MenuItem>
            <MenuItem value={"E3771717463423"}>E3771717463423</MenuItem>
            <MenuItem value={"F3771717463423"}>F3771717463423</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default PaymentAgreements;
