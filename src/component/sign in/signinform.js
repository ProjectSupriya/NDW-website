//import * as React from "react";
import React, { useEffect, useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  createUser, selectUser
} from '../../features/user/userSlice';
import axios from 'axios';
import Swal from "sweetalert";
import SignupForm from "../Signup/signupform";

const API_URL = process.env.REACT_APP_API_URL;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid(props) {
  let navigate = useNavigate();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  var user = localStorage.getItem('userObject');

  if (user !== "undefined") {
    user = JSON.parse(user);
  }
  console.log(user)
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(user);
  console.log(userData);
  const [issubmit, setIsSubmit] = useState(false);
  const [isSelfSetup, setisSelfSetup] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: userData ? userData.email : '',
      password: userData ? userData.password : '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      //return false;

      axios.post(`${API_URL}/users/login`, values)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            setUserData(response.data.result);
            dispatch(createUser(response.data.result));
            setIsSubmit(true);
            //alert(response.data.message);
            Swal({
              position: "center",
              icon: "success",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
            //if (response.data.result.selfSetup && !response.data.result.status) {
            //console.log(response.data.result.status)
            if (!response.data.result.status) {
              //console.log("inside if");
              setisSelfSetup(true);
              props.setisProfileCompleted(true);

            } else {
              //console.log("inside else");
              navigate("/home");
            }

          } else {
            Swal({
              position: "center",
              icon: "error",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
            //alert(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });


    },
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function Signup() {
    navigate("/sign-up");
    console.log("navigate", navigate);
  }
  function SignIn() {
    navigate("/home");
    console.log("navigate", navigate);
  }
  function forgotpassword() {
    navigate("/forgotpassword");
    console.log("navigate", navigate);
  }
  return (
    <Container>
      {isSelfSetup ? <><SignupForm switchstatus={true} step={parseInt(userData.signupStep)} /></> : <><form onSubmit={formik.handleSubmit}>
        <Box container sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 0,
                    }}
                  >
                    Email
                  </Typography>
                  {/* <TextField fullWidth id="fullWidth" /> */}
                  <TextField
                    fullWidth
                    id="fullWidth"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email} />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 0,
                    }}
                  >
                    Password
                  </Typography>
                  {/* <TextField fullWidth type="password">

                  </TextField> */}
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <OutlinedInput
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      // value={values.password}
                      // onChange={handleChangePassword("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <div style={{ color: "#d32f2f" }}>
                      {formik.touched.password && Boolean(formik.errors.password)}
                      {formik.touched.password && formik.errors.password}
                    </div>
                  </FormControl>
                </Box>
              </Item>
            </Grid>




            <Grid item xs={12} md={9}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "start",
                }}
              >
                <Typography>
                  <Button
                    onClick={forgotpassword}
                    sx={{
                      textTransform: "capitalize",
                      color: "#0DABFF",
                      fontSize: "17px",
                    }}
                  >
                    {" "}
                    Forgot Password ?
                  </Button>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  // onClick={SignIn}
                  sx={{
                    background: "#008ED9",
                    fontSize: "20px",
                    textTransform: "capitalize",
                    p: 1.5,
                    width: 500,
                    color: "#fff",
                    fontWeight: "500",
                    "&:hover": {
                      background: "#ffffff",
                      transition: ".5s",
                      boxShadow: 10,
                      color: "#008ED9",
                      border: 3,
                      borderColor: "#008ED9",
                    },
                  }}
                  autoFocus
                >
                  Log in
                </Button>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "19px" }}>
                  Don’t have an account?
                  <Button
                    onClick={Signup}
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    Signup
                  </Button>
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </form ></>}

    </Container>

  );
}
