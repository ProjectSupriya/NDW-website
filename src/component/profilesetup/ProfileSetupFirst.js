//import * as React from "react";
import React, { useEffect, useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Logo from "../sign in/headerlogo.png";
import TextField from "@mui/material/TextField";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Date from "./date";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  createUser, selectUser
} from '../../features/user/userSlice';
import axios from 'axios';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert";

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



  const { state } = useLocation();
  // console.log("user data", state);
  //const user = useSelector(selectUser);
  //var user = localStorage.getItem('userObject');
  var user = props.user;
  console.log("props", user);
  // if (user !== "undefined") {
  //   user = JSON.parse(user);
  // }
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(user);
  console.log(userData);
  const [issubmit, setIsSubmit] = useState(false);
  const [gender, setGender] = useState(undefined);
  const [dob, setDob] = useState(undefined);
  function ProfileSetupSecound() {
    navigate("/profile-setup-secound");
    console.log("navigate", navigate);
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  if (userData.UserTypeId == 5) {
    userData.serviceRequired = "NA";
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const validationSchema = yup.object({
    firstName: yup
      .string('Enter your firtstname')
      .required('First name is required'),
    middleName: yup
      .string('Enter your middletname'),
    //.required('middle name is required'),
    lastName: yup
      .string('Enter your lastname')
      //.min(8, 'Password should be of minimum 8 characters length')
      .required('Last name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    phone: yup.
      string()
      .required("required")
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "10 digit number required")
      .max(10, "10 digit number required")
    ,
    area: yup
      .string('Enter your area')
      .required('area is required'),
    serviceRequired: yup
      .string('Enter your serivce'),
    //.required('service is required'),
    // dob: yup
    //   .string()
    //   .required("DOB is resuired"),
    //dob: yup.date().required(),
    addressOne: yup
      .string()
      .required("Address line 1 required"),
    addressTwo: yup
      .string()
      .required("Address line 2 required"),
    state: yup
      .string()
      .required("State is required"),
    postcode: yup
      .string()
      .required("Postcode is required"),

  });

  const formik = useFormik({
    initialValues: {

      firstName: userData ? userData.firstName : '',
      middleName: userData ? userData.middleName : '',
      lastName: userData ? userData.lastName : '',
      email: userData ? userData.email : '',
      phone: userData ? userData.phone : '',
      area: userData ? userData.area : '',
      serviceRequired: userData ? userData.serviceRequired : '',
      //dob: userData ? userData.dob : '',
      addressOne: userData?.addressOne ? userData.addressOne : '',
      addressTwo: userData?.addressTwo ? userData.addressTwo : '',
      state: userData?.state ? userData.state : '',
      postcode: userData?.postcode ? userData.postcode : '',
      //gender: userData ? userData.gender : ''

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      //console.log(dob);

      values = {
        ...values,
        id: user.id,
        signupStep: 2
        //gender: gender,
        // dob, dob
      };
      console.log(values);

      //return false;

      axios.put(`${API_URL}/users/update_user`, values)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            setUserData(values);
            dispatch(createUser(response.data.results));
            setIsSubmit(true);
            //alert("User updated");
            Swal({
              position: "center",
              icon: "success",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
            props.nextStep(2);
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

  console.log(formik.initialValues)
  const handleChange = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
    formik.setValues({
      ...formik.values,
      gender: e.target.value,
    });
  };
  // const setInputValue = useCallback(
  //   (key, value) => {
  //     console.log("key", key);
  //     console.log("value", value)
  //     formik.setValues({
  //       ...formik.values,
  //       dob: value,
  //     });
  //     setDob(value);
  //   },
  //   [formik]
  // );
  return (
    <Container>
      {/* <Grid container spacing={2}>
        <Grid sx={{ background: "#E5F4FB" }} item xs={12} md={12}>
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
      </Grid> */}
      <Paper elevation={0} sx={{ backgroundColor: "#fff", mb: 3 }}>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
             
              mt: 5,
             
            }}
          >
            <Grid container spacing={0}>
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
                      width: 1000,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      m: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "25px",
                        color: "black",
                        fontWeight: "700",
                        color: "#00527E",
                      }}
                    >
                      Please complete your account setup by providing <br />{" "}
                      following details
                    </Typography>
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
                      width: 1000,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "18px", color: "black", fontWeight: "500" }}
                    >
                      Step 1 / 4
                    </Typography>
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
                      width: 1000,
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
                      First Name <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                      helperText={formik.touched.firstName && formik.errors.firstName}
                    />
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
                      width: 1000,
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
                      Middle Name
                    </Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      name="middleName"
                      value={formik.values.middleName}
                      onChange={formik.handleChange}
                      error={formik.touched.middleName && Boolean(formik.errors.middleName)}
                      helperText={formik.touched.middleName && formik.errors.middleName} />
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
                      width: 1000,
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
                      Last Name <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                      helperText={formik.touched.lastName && formik.errors.lastName}
                    />
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
                      width: 1000,
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
                      Email <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
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
                      width: 1000,
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
                      Phone Number <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Box>
                </Item>
              </Grid>
              {/* <Grid item xs={12} md={3}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="gender"
                      id="demo-simple-select"
                      value={formik.values.gender}
                      label="Gender"
                      onChange={handleChange}
                    >
                      <MenuItem value="m">Male</MenuItem>
                      <MenuItem value="f">Female</MenuItem>

                    </Select>
                  </FormControl>
                </Item>
              </Grid> */}
              {/* <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 1000,
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
                      Date
                    </Typography>
                    <Date
                      name="dob"
                      value={formik.values.dob}
                      setInputValue={setInputValue}
                    // onChange={formik.handleChange}
                    // error={formik.touched.dob && Boolean(formik.errors.dob)}
                    // helperText={formik.touched.dob && formik.errors.dob}
                    />
                  </Box>
                </Item>
              </Grid> */}
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
                      width: 1000,
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
                      Address Line 1 <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      name="addressOne"
                      value={formik.values.addressOne}
                      onChange={formik.handleChange}
                      error={formik.touched.addressOne && Boolean(formik.errors.addressOne)}
                      helperText={formik.touched.addressOne && formik.errors.addressOne}
                    />
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
                      width: 1000,
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
                      Address Line 2 <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      name="addressTwo"
                      value={formik.values.addressTwo}
                      onChange={formik.handleChange}
                      error={formik.touched.addressTwo && Boolean(formik.errors.addressTwo)}
                      helperText={formik.touched.addressTwo && formik.errors.addressTwo}
                    />
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
                      width: 1000,
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
                      State <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      error={formik.touched.state && Boolean(formik.errors.state)}
                      helperText={formik.touched.state && formik.errors.state}
                    />
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
                      width: 1000,
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
                      Postcode <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      name="postcode"
                      value={formik.values.postcode}
                      onChange={formik.handleChange}
                      error={formik.touched.postcode && Boolean(formik.errors.postcode)}
                      helperText={formik.touched.postcode && formik.errors.postcode}
                    />
                  </Box>
                </Item>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "end",
                  alignItems: "end",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: '100%',
                    maxWidth: 100,
                    p: 3,
                  }}
                >
                  <Button
                    type="submit"
                    // onClick={ProfileSetupSecound}
                    size="large"
                    sx={{
                      background: "#008ED9",
                      p: 2,
                      textTransform: "capitalize",
                      fontsize: "30px",
                      fontWeight: "600",
                      height: "3.5em",
                      display: "flex",
                      width: '100%',
                      flexDirection: "row",
                      justifyContent: "center",
                      width: "100%",
                      color: "#fff",
                      "&:hover": {
                        background: "#ffffff",
                        transition: ".5s",
                        color: '#008ED9',
                        border: 3,
                        borderColor: '#008ED9',
                        boxShadow: 10,
                      },
                    }}
                    autoFocus
                  >
                    Next
                  </Button>
                  {issubmit ? (<><ProfileSetupSecound setOpen={true} userData={userData} /></>) : (<></>)}

                </Box>
              </Item>
            </Grid>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
