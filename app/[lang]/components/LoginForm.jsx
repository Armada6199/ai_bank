"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { handleLogin } from "@utils/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { push } = useRouter();
  async function loginRedirect(formData) {
    try {
      const loginResponse = await handleLogin(
        formData.username,
        formData.password
      );
      if (loginResponse?.error) {
        console.log("login failed");
      } else {
        console.log("else");

        push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (formData) => loginRedirect(formData))}
    >
      <Grid container item xs={12} gap={4}>
        <Grid xs={12}>
          <Typography variant="h4" fontWeight={600} color={"secondary.main"}>
            Login
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6">Login with username and password</Typography>
        </Grid>
        <Grid container item gap={4} xs={12}>
          <Grid item xs={12}>
            <Typography variant="body2" fontWeight={500} my={2}>
              Enter Your username
            </Typography>
            <TextField
              fullWidth
              name="email"
              {...register("email", { required: "Enter Your Email" })}
              type="email"
            />
            {errors.email && (
              <Typography color={"red"} variant="body2">
                {errors.email.message}
              </Typography>
            )}
          </Grid>{" "}
          <Grid item xs={12}>
            <Typography variant="body2" fontWeight={500} my={2}>
              {" "}
              Password
            </Typography>
            <TextField
              fullWidth
              name="password"
              {...register("password", { required: "Enter Your Password" })}
              type="password"
            />
            {errors.password && (
              <Typography color={"red"} variant="body2">
                {errors.password.message}
              </Typography>
            )}
          </Grid>
          <Grid container item xs={12} justifyContent={"flex-end"}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  borderRadius: "30px",
                  height: "60px",
                  bgcolor: "primary.main",
                  fontWeight: 500,
                  fontSize: 20,
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
