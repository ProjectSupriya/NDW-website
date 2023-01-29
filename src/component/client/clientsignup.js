//import * as React from "react";
import React, { useEffect, useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormSubmit from "./clientsignupsubmit";
import { useNavigate } from "react-router-dom";

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  createUser, selectUser
} from '../../features/user/userSlice';
import axios from "axios";

import Date from "../profilesetup/date";
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


  const userType = props.userType;
  const userTypeId = props.userType;
  console.log("user type:", userType);
  console.log("user id:", userTypeId);
  let navigate = useNavigate();

  const [issubmit, setIsSubmit] = useState(false);
  const [userData, setUserData] = useState({});
  const [dob, setDob] = useState(undefined);
  const [gender, setGender] = useState(undefined);
  //const user = useSelector(selectUser);
  var user = localStorage.getItem('userObject');

  if (user !== "undefined") {
    user = JSON.parse(user);
  }
  console.log(user);
  const dispatch = useDispatch();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = yup.object({
    firstName: yup
      .string('Enter your firtstname')
      .required('First name is required'),
    middleName: yup
      .string('Enter your middletname')
    //.required('middle name is required')
    ,
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
      .required("phone number required")
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "10 digit number required")
      .max(10, "10 digit number required"),

    // dob: yup
    //   .string('Enter your middletname')
    //   .required('date of birth is required'),
    gender: yup.string().required('gender is required'),
    area: yup
      .string('Enter your area')
      .required('area is required'),
    serviceRequired: yup
      .string('Enter your serivce')
      .required('service is required'),

  });

  function Login() {
    navigate("/sign-in");
    console.log("navigate", navigate);
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
      area: '',
      serviceRequired: '',
      gender: '',
      //dob: ''

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values = {
        ...values,
        UserTypeId: userTypeId,
        //id: user.id,
        gender: gender,
        //dob, dob
      };
      console.log(values)
      //return false;

      axios.post(`${API_URL}/users/create`, values)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            setIsSubmit(true);
            setUserData(response.data.results);
            dispatch(createUser(response.data.results));
            //alert("Account created");
            Swal({
              position: "center",
              icon: "success",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
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

  const handleChangeGender = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
    formik.setValues({
      ...formik.values,
      gender: e.target.value,
    });
  };

  const setInputValue = useCallback(
    (key, value) => {
      console.log("key", key);
      console.log("value", value)
      formik.setValues({
        ...formik.values,
        dob: value,
      });
      setDob(value);
    },
    [formik]
  );
  return (
    <Container>
      <Paper elevation={0} sx={{ backgroundColor: "#fff" }}>
        <Box
         
        >
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid container spacing={2}>
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
                        name="firstName"
                        fullWidth
                        id="fullWidth"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName} />
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
                        name="middleName"
                        fullWidth
                        id="fullWidth"
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
                        Last Name<span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                      <TextField name="lastName"
                        fullWidth
                        id="fullWidth"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName} />

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
                        Email<span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
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
                        Phone Number<span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                      <TextField
                        fullWidth
                        id="fullWidth"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone} />
                    </Box>
                  </Item>
                </Grid>
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
                      <div style={{ color: "#d32f2f" }}>
                        {formik.touched.dob && Boolean(formik.errors.dob)}
                        {formik.touched.dob && formik.errors.dob}
                      </div>
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
                          p: 1,
                        }}
                      >
                        Gender<span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                      <FormControl fullWidth>
                        {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
                        <Select
                          //labelId="demo-simple-select-label"
                          name="gender"
                          //id="demo-simple-select"
                          value={formik.values.gender}
                          //label="Gender"
                          onChange={handleChangeGender}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            Select
                          </MenuItem>
                          <MenuItem value="m">Male</MenuItem>
                          <MenuItem value="f">Female</MenuItem>
                          <MenuItem value="other">Other</MenuItem>

                        </Select>
                        <div style={{ color: "#d32f2f" }}>
                          {formik.touched.gender && Boolean(formik.errors.gender)}
                          {formik.touched.gender && formik.errors.gender}
                        </div>

                      </FormControl>
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
                        Area<span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                      <TextField
                        fullWidth
                        id="fullWidth"
                        name="area"
                        value={formik.values.area}
                        onChange={formik.handleChange}
                        error={formik.touched.area && Boolean(formik.errors.area)}
                        helperText={formik.touched.area && formik.errors.area} />
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
                        Care Required<span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                      <Box
                        sx={{
                          width: 1000,
                          maxWidth: "100%",
                          height: '100%',
                          background: "#fff ",
                          border: "0",
                          outline: "none",
                        }}
                      >

                        <OutlinedInput sx={{ paddingBottom: '120px' }}
                          fullWidth
                          name="serviceRequired"
                          value={formik.values.serviceRequired}
                          onChange={formik.handleChange}
                          error={formik.touched.serviceRequired && Boolean(formik.errors.serviceRequired)}
                          helperText={formik.touched.serviceRequired && formik.errors.serviceRequired}
                          placeholder="Message"
                        />
                        <div style={{ color: "#d32f2f" }}>
                          {formik.touched.serviceRequired && Boolean(formik.errors.serviceRequired)}
                          {formik.touched.serviceRequired && formik.errors.serviceRequired}
                        </div>

                      </Box>
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
                    {/* <Button type="submit">
                      Submit
                    </Button> */}
                    <Button
                      type="submit"
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
                      variant="outlined"
                    //onClick={handleClickOpen}
                    >
                      Submit
                    </Button>
                    {issubmit ? (<><FormSubmit setOpen={true} userData={userData} /></>) : (<></>)}
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
                      Already have an account?
                      <Button
                        onClick={Login}
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        {" "}
                        Log in
                      </Button>
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}
