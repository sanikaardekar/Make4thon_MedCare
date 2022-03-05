import { useState } from "react";
import {
  FilledInput,
  Grid,
  InputAdornment,
  InputLabel,
  Container,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert2';
import { URL } from "../utils/api";

export default function Login() {
  const [setLoading] = useState(true);

  const validationSchema = Yup.object({
    email: Yup.string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .max(16, "Exceeded maximum charecter length of 16")
      .required("Password is required"),
  });

  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    createacc();
  };

  const history = useNavigate();

  async function createacc() {
    console.log("hello");
    try {
      let result = await fetch(
        URL+ "login-signup/login/",
        {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      result = await result.json();
      console.log(result);
      localStorage.setItem('')
      if (result.token) {
        history("/home");
      }
    } catch (error) {
      console.log("Error" + error);
      swal.fire("Oops!!", "Please enter valid credentials", "error");
      setLoading(false);
    }
  }

  const handleShowPassword = () => {
    console.log(setValues);
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      async function createacc() {
        console.log("hello");
        try {
          let result = await fetch(
            URL + "login-signup/login/",
            {
              method: "POST",
              body: JSON.stringify({
                email: values.email,
                password: values.password,
              }),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          result = await result.json();
          console.log(result);
          if (result.token) {
          sessionStorage.setItem('Name', result.username);
          sessionStorage.setItem('user_id', result.user_id);
          sessionStorage.setItem('token', result.token)
            history("/home");
          }
        } catch (error) {
          console.log("Error" + error);
          alert("Please enter valid credentials");
          setLoading(false);
        }
      }
      createacc();
    },
  });

  return (
    <>
      <Container
        disableGutters
        component={motion.div}
        transition={{ type: "spring", stiffness: 40 }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        maxWidth="xs"
      >
        <Typography component="h1" variant="h5" style={{ paddingTop: "80px" }}>
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <FilledInput
                id="email"
                label="Email"
                autoFocus
                required
                type="email"
                name="email"
                variant="outlined"
                color="success"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helpertext={formik.touched.email && formik.errors.email}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <MdEmail style={{ fontSize: "20px" }} />
                  </InputAdornment>
                }
              />
              {formik.touched.email && formik.errors.email ? (
              <p className="error" style={{color:"red"}}>{formik.errors.email}</p>
            ) : null}
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <FilledInput
                id="password"
                label="password"
                color="success"
                required
                type={values.showPassword ? "text" : "password"}
                name="password"
                variant="outlined"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                fullWidth
                autoComplete="current-password"
                // onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formik.touched.password && formik.errors.password ? (
              <p className="error" style={{color:"red"}}>{formik.errors.password}</p>
            ) : null}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={formik.handleSubmit}
              sx={{ ml: 2, mt: 2, mb: 1 }}
              style={{
                backgroundColor: "#49AB94",
                color: "#333333",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Login
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

