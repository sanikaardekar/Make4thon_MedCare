import {
  Grid,
  Box,
  Typography,
  IconButton,
  Button,
  Container,
  InputAdornment,
  FilledInput,
  InputLabel,
} from "@mui/material";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import swal from 'sweetalert2';
import { URL } from "../utils/api";

export default function SignupForAdmin() {
  const [isLoading, setLoading] = useState(true);

  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [showPassword1, setshowPassword1] = useState(false);
  const handleClickShowPassword1 = () => {
    setshowPassword1(!showPassword1);
  };
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  // const handleClickShowPassword2 = () => {
  //   setValues({ ...values, showPassword2: !values.showPassword2 });
  // };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
    });
    createacc();
  };

  const history = useNavigate();

  async function createacc() {
    console.log("hello");
    try {
      let result = await fetch(
        URL + "login-signup/register/",
        {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            username: values.username,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      result = await result.json();
      console.log(result);
      if (result.old_token) {
        swal.fire("Signed in Successfully!", "Please verify your email", "success");
        history("/login");
      }
      else{
        swal.fire("Oops!!", "Some error while signup", "error");
      }
    } catch (error) {
      console.log("Error" + error);
      setLoading(false);
    }
  }

  return (
    <>
      <Container
        component={motion.div}
        transition={{ type: "spring", stiffness: 40 }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        maxWidth="xs"
      >
        <Typography component="h1" variant="h5" style={{ paddingTop: "50px" }}>
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              component={motion.div}
              transition={{ type: "spring", stiffness: 40 }}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              className="signinImg"
            ></Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="user-name">User Name</InputLabel>
              <FilledInput
                required
                fullWidth
                id="user-name"
                label="User Name"
                type="text"
                name="username"
                autoComplete="user-name"
                autoFocus
                color="success"
                value={values.username}
                onChange={handleChanges}
                endAdornment={
                  <InputAdornment position="end">
                    <BsFillFileEarmarkPersonFill style={{fontSize:"20px"}} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <FilledInput
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                color="success"
                autoComplete="email"
                value={values.email.trim()}
                onChange={handleChanges}
                endAdornment={
                  <InputAdornment position="end">
                    <MdEmail style={{fontSize:"20px"}}/>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                fullWidth
                type={showPassword1 ? "text" : "password"}
                value={values.password.trim()}
                color="success"
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      edge="end"
                    >
                      {showPassword1 ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
            style={{
              backgroundColor: "#49AB94",
              color: "#333333",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </>
  );
}
