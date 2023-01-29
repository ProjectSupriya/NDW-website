import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Password from "./password_signin";
import ConfirmPassword from "../forgotpassword/confirmpassword";
import Logo from "../sign in/headerlogo.png";
import { useParams } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Swal from "sweetalert";
const API_URL = process.env.REACT_APP_API_URL;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {

  const { id } = useParams();
  console.log("id", id);

  const [values, setValues] = React.useState({
    password: "",
    confirmPassword: "",
    id: id,
    showPassword: false,
    showConfirmPassword: false,
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

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  let navigate = useNavigate();
  function Signup() {
    navigate("/sign-up");
    console.log("navigate", navigate);
  }
  function SignIn() {

    if (values.password && values.confirmPassword) {
      console.log(values);
      if (values.password == values.confirmPassword) {

        axios.post(`${API_URL}/users/set_password`, values)
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
      } else {
        Swal({
          position: "center",
          icon: "error",
          title: "Confirm password not match",
          button: true,
          allowOutsideClick: true,
        });
      }
    } else {
      Swal({
        position: "center",
        icon: "error",
        title: "Password required",
        button: true,
        allowOutsideClick: true,
      });
    }
    //navigate("/sign-in");
    //console.log("navigate", navigate);
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
            }}
          >
            <img
              src={Logo}
              alt=""
              style={{ objectFit: "contain", mt: 0, width: "80px" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Paper>
        <Box container sx={{ flexGrow: 1, mt: 10 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  Width: "100%",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    maxWidth: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      maxWidth: "400px",
                      fontWeight: 600,
                      color: "#00527E",
                      fontSize: "35px",
                      m: 4,
                      lineHeight: "35px",
                    }}
                  >
                    Reset your password
                  </Typography>
                </Box>
              </Box>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  mt: 2,
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
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* <Password /> */}
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
                              <FormControl sx={{ width: "100%" }} variant="outlined">
                                <OutlinedInput
                                  id="outlined-adornment-password"
                                  type={values.showPassword ? "text" : "password"}
                                  value={values.password}
                                  onChange={handleChange("password")}
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
                              </FormControl>
                            </Box>
                          </Item>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  {/* <ConfirmPassword /> */}
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
                                Confirm Password
                              </Typography>
                              <FormControl sx={{ width: "100%" }} variant="outlined">
                                <OutlinedInput
                                  id="outlined-adornment-password"
                                  type={values.showConfirmPassword ? "text" : "password"}
                                  value={values.confirmPassword}
                                  onChange={handleChange("confirmPassword")}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownConfirmPassword}
                                        edge="end"
                                      >
                                        {values.showConfirmPassword ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </Box>
                          </Item>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  m: 4,
                  mt: 15,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={SignIn}
                  sx={{
                    p:1,
                    background: "#0DABFF",
                    textTransform: "capitalize",
                    fontsize: "25px",
                    fontWeight: "600",
                    height: "3.1em",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "500px",
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
                  autoFocus
                >
                  Reset Password
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
