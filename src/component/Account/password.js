//import * as React from "react";
import React, { useEffect, useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Passwordshow from "./password_old";
import { useSelector, useDispatch } from 'react-redux';
import {
  createUser, selectUser
} from '../../features/user/userSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Swal from "sweetalert";

const API_URL = process.env.REACT_APP_API_URL;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  // const user = useSelector(selectUser);

  var user = localStorage.getItem('userObject');

  if (user !== "undefined") {
    user = JSON.parse(user);
  }
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(user);
  const validationSchema = yup.object({
    password: yup
      .string()
      .required('Please enter your password.')
      .min(8, 'Your password is too short.'),
    newPassword: yup
      .string()
      .required('Please enter your new password.')
      .min(8, 'Your password is too short.'),
    confirmPassword: yup
      .string()
      .required('Please retype your new password.')
      .oneOf([yup.ref('newPassword')], 'Your passwords do not match.')

  });
  const formik = useFormik({
    initialValues: {
      id: userData ? userData.id : '',
      password: '',
      newPassword: '',
      confirmPassword: '',
      email: userData ? userData.email : '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //console.log(values)
      //return false;

      axios.put(`${API_URL}/users/change_password`, values)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            //alert(response.data.message);
            Swal({
              position: "center",
              icon: "success",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
            //navigate("/home");
          } else {
            //alert(response.data.message);
            Swal({
              position: "center",
              icon: "error",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      // setIsSubmit(false);

    },
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "50px",
              }}
            >
              <Grid
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                container
                rowSpacing={0}
                columnSpacing={{ xs: 0, sm: 0, md: 0 }}
              >
                <Grid item xs={12} md={8}>
                  {" "}
                  <Typography
                    sx={{
                      mt: 5,
                      mb: 5,
                      pl: 1.3,
                      fontSize: "28px",
                      fontWeight: "700",
                    }}
                  >
                    Change Password
                  </Typography>{" "}
                </Grid>

                <Grid item xs={12} md={8}>
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
                        width: 1000,
                        maxWidth: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontsize: "20px",
                          color: "#000000",
                          fontWeight: "700",
                          pb: 1,
                        }}
                      >
                        Old Password <span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                      <TextField
                        name="password"
                        type="password"
                        autoComplete='off'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        fullWidth id="fullWidth" />
       
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={12} md={8}>
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
                        width: 1000,
                        maxWidth: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontsize: "20px",
                          color: "#000000",
                          fontWeight: "700",
                          pb: 1,
                        }}
                      >
                        New Password <span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                      <TextField
                        fullWidth
                        id="fullWidth"
                        type="password"
                        autoComplete='off'
                        name="newPassword"
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                        helperText={formik.touched.newPassword && formik.errors.newPassword}
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={12} md={8}>
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
                        width: 1000,
                        maxWidth: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontsize: "20px",
                          color: "#000000",
                          fontWeight: "700",
                          pb: 1,
                        }}
                      >
                        Confirm Password <span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                      <TextField
                        fullWidth
                        id="fullWidth"
                        type="password"
                        autoComplete='off'
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                      />
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={8}>
                  <Item elevation={0}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                       
                        background: "#0DABFF",
                        textTransform: "capitalize",
                        fontsize: "25px",
                        fontWeight: "600",
                        height: "3.1em",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "150px",
                        color: "#fff",
                        "&:hover": {
                          background: "#fff",
                          transition: ".5s",
                          color: "#0DABFF",
                          border: 3,
                          borderColor: "#0DABFF",
                          boxShadow: 10,
                        },
                      }}
                    >
                      Save Changes
                    </Button>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </form>
    </>
  );
}
