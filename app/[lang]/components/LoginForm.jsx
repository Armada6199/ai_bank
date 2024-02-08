"use client";
import { dictionaryContext } from "@hooks/DictionaryProvider";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { push } = useRouter();
  const {dictionaryContent } = useContext(dictionaryContext);
  async function handleLogin(formData) {
    try {
      const loginResponse = await signIn("credentials", {
        ...formData,
        redirect: false,
      });
      if (loginResponse?.error) {
        console.log("login failed");
      } else {
        console.log("loggedin");
        push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    dictionaryContent && (
      <form
        noValidate
        onSubmit={handleSubmit(async (formData) => handleLogin(formData))}
      >
        <Grid container item xs={12} maxHeight={"100%"} gap={4}>
          <Grid container xs={12} gap={1}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                fontWeight={600}
                color={"secondary.main"}
              >
                {dictionaryContent.loginPage.loginForm.title}
              </Typography>
            </Grid>
            <Grid item xs={1} height={"4px"} bgcolor={"primary.main"} />
          </Grid>
          <Grid xs={12}>
            <Typography variant="h6">
              {dictionaryContent.loginPage.loginForm.description}
            </Typography>
          </Grid>
          <Grid container item gap={4} xs={12}>
            <Grid item xs={12}>
              <Typography variant="body2" fontWeight={500} my={2}>
                {dictionaryContent.loginPage.loginForm.usernameLabel}
              </Typography>
              <TextField
                fullWidth
                {...register("username", { required: "Enter Your Email" })}
                type="text"
              />
              {errors.username && (
                <Typography color={"red"} variant="body2">
                  {dictionaryContent.loginPage.loginForm.usernameErrorMessage}
                </Typography>
              )}
            </Grid>{" "}
            <Grid item xs={12}>
              <Typography variant="body2" fontWeight={500} my={2}>
                {" "}
                {dictionaryContent.loginPage.loginForm.passwordLabel}
              </Typography>
              <TextField
                fullWidth
                name="password"
                {...register("password", { required: "Enter Your Password" })}
                type="password"
              />
              {errors.password && (
                <Typography color={"red"} variant="body2">
                  {dictionaryContent.loginPage.loginForm.passwordErrorMessage}
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
                    height: "50px",
                    bgcolor: "primary.main",
                    fontWeight: 500,
                    fontSize: 20,
                  }}
                >
                  {dictionaryContent.loginPage.loginForm.submitButton}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    )
  );
}

export default LoginForm;
