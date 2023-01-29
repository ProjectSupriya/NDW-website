import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../sign in/headerlogo.png";
import { useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
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

  const [issubmit, setIsSubmit] = useState(false);

  let navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      //console.log(values)
      //return false;
      axios.post(`${API_URL}/users/forgot_password`, values)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            Swal({
              position: "center",
              icon: "success",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
            setIsSubmit(true);
            formik.resetForm();
            //alert("Account created");

          } else {
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

      //alert(JSON.stringify(values, null, 2));
    },
  });

  function Signup() {
    navigate("/sign-up");
    console.log("navigate", navigate);
  }
  function resetpassword() {
    navigate("/resetpassword");
    console.log("navigate", navigate);
  }
  const handlelogoClick = () => {
    navigate("/home");
  }
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
        <Grid sx={{display: { xs: "block", md: "none",},}} item xs={12} md={12}>
          <Box
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              src={Logo}
              onClick={handlelogoClick}
              alt=""
              style={{ objectFit: "contain", mt: 0, width: "80px" }}
            />
          </Box>
        </Grid>
        <Grid sx={{display: { xs: "none", md: "block",},}} item xs={12} md={12}>
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
              onClick={handlelogoClick}
              alt=""
              style={{ objectFit: "contain", mt: 0, width: "80px" }}
            />
          </Box>
        </Grid>
        </Grid>
        <Paper>
          <Box container sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        maxWidth: "100%",
                        fontWeight: 600,
                        color: "#00527E",
                        fontSize: "35px",
                        m: 4,

                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",

                      mt: 2,
                     
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        
                        color: "#5C5C5C",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Please enter your Email Address to get instructions to reset the password.
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
                      width: 500,
                      maxWidth: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontsize: "20px",
                        color: "#000000",
                        fontWeight: "700",
                        p: 1,
                      }}
                    >
                      Email
                    </Typography>
                    <TextField
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}

                      fullWidth id="fullWidth" />
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
                    type="submit"
                    //onClick={resetpassword}
                    sx={{
                      p:2,
                      background: "#0DABFF",
                      textTransform: "capitalize",
                      fontsize: "25px",
                      fontWeight: "600",
                     
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
                    Continue
                  </Button>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    m: 4,
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
        </Paper>
      </form>
    </Container>
  );
}
