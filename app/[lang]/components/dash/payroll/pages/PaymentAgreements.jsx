import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { agreementContext } from "../../../../../../hooks/AgreementProvider";

function PaymentAgreements({}) {
  const { register } = useFormContext();
  const { agreements } = useContext(agreementContext);
  return (
    <Grid container item xs={12} p={4} alignItems={"flex-start"}>
      <Grid container item gap={4} xs={12}>
        <Typography>Payment Agreements</Typography>
        <FormControl fullWidth>
          <InputLabel>Pay Agreenments</InputLabel>
          <Select
            defaultValue={agreements[0].agreementId}
            {...register("paymentAgreement", {
              required: "Choose Payment Agreement",
            })}
            label="Payment Agreements"
          >
            {agreements.map((agreement) => (
              <MenuItem value={agreement.agreementId}>
                {agreement.agreementId}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default PaymentAgreements;
