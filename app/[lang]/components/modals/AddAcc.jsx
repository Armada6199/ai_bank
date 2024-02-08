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
import { glassmorphismStyle } from "@styles/styles";
import axios from "axios";
import { useForm } from "react-hook-form";
function AddAcc({ activeLocale }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function handleAddUser(formData) {
    try {
      console.log(formData);
      const createdResponse = await axios.post("/api/users", { ...formData });
    } catch (error) {
      console.log(error);
    }
  }
  console.log(errors);
  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (formData) => handleAddUser(formData))}
    >
      <Grid
        container
        item
        xs={12}
        justifyContent={"center"}
        gap={4}
        sx={{ ...glassmorphismStyle, borderRadius: "0", p: 0 }}
      >
        <Grid
          container
          alignItems={"center"}
          px={2}
          item
          height={"65px"}
          bgcolor={"primary.main"}
        >
          <Typography variant="h5">{activeLocale.modal.action}</Typography>
        </Grid>
        <Grid container item p={4} gap={4}>
          <Grid container item spacing={4} xs={12}>
            <Grid item xs={6}>
              <Typography>{activeLocale.modal.accountInputLabel}</Typography>
              <TextField
                {...register("accountName", {
                  required: "Account name is required",
                })}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography>{activeLocale.modal.emailInputLabel}</Typography>

              <TextField
                fullWidth
                {...register("email", { required: "Email is required" })}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={4}>
            <Grid container item xs={6}>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>{activeLocale?.modal?.accountTypeLabel}</FormLabel>
                  <RadioGroup row>
                    {activeLocale.modal.accountTypes.map((type) => (
                      <FormControlLabel
                        {...register("userType", {
                          required: "Choose User Type",
                        })}
                        value={type.value}
                        control={<Radio />}
                        label={type.localeVal}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container item xs={6} spacing={4}>
              <Grid container item xs={12}>
                <FormControl>
                  <FormLabel>{activeLocale?.modal?.accountTypeLabel}</FormLabel>
                  <RadioGroup row>
                    {activeLocale.modal.accountStatus.map((type) => (
                      <FormControlLabel
                        value="active"
                        control={<Radio />}
                        label={type}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent={"flex-end"} m={4} item xs={12}>
          <Grid item xs={2}>
            <Button fullWidth type="submit" variant={"contained"}>
              {activeLocale.modal.buttonText}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddAcc;
