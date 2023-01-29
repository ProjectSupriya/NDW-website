//import * as React from "react";
import React, { useEffect, useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Profile from "./media/profile.png";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import Popup from "./popup";
import { useSelector, useDispatch } from "react-redux";
import { createUser, selectUser } from "../../features/user/userSlice";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
//import { UploadFile } from "../../Uploadfile";
import { ProfileUploadFile } from "./ProfileUploadFile";
import moment from "moment";
import blank from "./media/blank.png";
import Swal from "sweetalert";

const API_URL = process.env.REACT_APP_API_URL;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  let navigate = useNavigate();
  //const user = useSelector(selectUser);
  var user = localStorage.getItem("userObject");

  if (user !== "undefined") {
    user = JSON.parse(user);
  }
  console.log("user", user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(user);

  const [issubmit, setIsSubmit] = useState(false);
  const [fileBase64, setFileBase64] = useState();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object({
    // firstName: yup
    //   .string('Enter your firtstname')
    //   .required('First name is required'),
    // middleName: yup
    //   .string('Enter your middletname')
    //   .required('middle name is required'),
    // lastName: yup
    //   .string('Enter your lastname')
    //   //.min(8, 'Password should be of minimum 8 characters length')
    //   .required('Last name is required'),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "10 digit number required")
      .max(10, "10 digit number required"),
    alternateNumber: yup
      .string()
      .required("required")
      .matches(phoneRegExp, "Alternate phone number is not valid")
      .min(10, "10 digit number required")
      .max(10, "10 digit number required"),
    area: yup.string("Enter your area").required("area is required"),
    serviceRequired: yup
      .string("Enter your serivce")
      .required("service is required"),
    // dob: yup
    //   .string()
    //   .required("DOB is resuired"),
    //dob: yup.date().required(),
    addressOne: yup.string().required("Address line 1 required"),
    addressTwo: yup.string().required("Address line 2 required"),
    state: yup.string().required("State is required"),
    postcode: yup.string().required("Postcode is required"),
  });

  let employeeId = userData ? userData.employeeId : "";
  let firstName = userData ? userData.firstName : "";
  let middleName = userData ? userData.middleName : "";
  let lastName = userData ? userData.lastName : "";
  //let dob = moment(userData.dob, 'YYYY-MM-DD');
  let dob = moment(userData.dob, "YYYY-MM-DD").format("DD-MM-YY");
  // dob = dob.format('DD-MM-YY')
  //console.log(dob.format('DD-MM-YY'))
  //let dob = userData ? userData.dob : "";
  const formik = useFormik({
    initialValues: {
      id: userData ? userData.id : "1",
      firstName: userData ? userData.firstName : "",
      middleName: userData ? userData.middleName : "",
      lastName: userData ? userData.lastName : "",
      email: userData ? userData.email : "",
      phone: userData ? userData.phone : "",
      area: userData ? userData.area : "",
      serviceRequired: userData ? userData.serviceRequired : "",
      //dob: userData ? userData.dob : '',
      addressOne: userData ? userData.addressOne : "",
      addressTwo: userData ? userData.addressTwo : "",
      state: userData ? userData.state : "",
      postcode: userData ? userData.postcode : "",
      alternateNumber: userData ? userData.alternateNumber : "",
      avatar: userData.avatar ? userData.avatar : blank,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //console.log(values)
      console.log(issubmit);
      values = {
        ...values,
        avatar: fileBase64,
      };
      //return false;

      axios
        .put(`${API_URL}/users/update_userprofile`, values)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            setUserData(response.data.results);
            dispatch(createUser(response.data.results));
            //setIsSubmit(true);
            Swal({
              position: "center",
              icon: "success",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
            //alert(response.data.message);
            //navigate("/home");
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
      // setIsSubmit(false);
    },
  });

  let convertBase64 = async (file) => {
    // let file = event.target.files[0];
    let res = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    return res;
  };

  const setInputValue = useCallback(
    (key, value) => {
      // console.log("key", key);
      // console.log("value", value)
      setFileBase64(value);
      formik.setValues({
        ...formik.values,
        [key]: value,
      });
    },
    [formik]
  );
  const setInputError = useCallback(
    (key, value) => {
      console.log("value", value);
      formik.setErrors({ ...formik.errors, [key]: value });
    },
    [formik]
  );

  const handleDeleteAvatar = () => {
    formik.setValues({
      ...formik.values,
      avatar: "",
    });
  };

  var gender;
  if (user.gender == "m") {
    gender = "Male";
  } else if (user.gender == "f") {
    gender = "Female";
  } else {
    gender = "Other";
  }

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
              <Grid container spacing={2} sx={{ mt: 0 }}>
                <Grid item xs={12} md={4} sx={{ mt: 5 }}>
                  <Grid
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    container
                    rowSpacing={0}
                    columnSpacing={{ xs: 0, sm: 0, md: 0 }}
                  >
                    <img
                      src={formik.values.avatar}
                      //src={blank}
                      alt=""
                      width={110}
                      height={110}
                      style={{ objectFit: "contain", float: "right" }}
                    />{" "}
                    <br />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Fab
                        color=""
                        aria-label="edit"
                        size="medium"
                        sx={{
                          backgroundColor: "#ffffff",
                        }}
                      >
                        {/* <EditIcon

  style={{ color: "#0000ff", fontSize: "25px" }}
/> */}
                        <ProfileUploadFile
                          name="avatar"
                          //fieldName="Avatar"
                          value={formik.values.avatar}
                          setInputValue={setInputValue}
                          setInputError={setInputError}
                          convertBase64={convertBase64}
                        />
                      </Fab>
                      &nbsp;
                      <Fab
                        color=""
                        aria-label="edit"
                        size="medium"
                        sx={{
                          backgroundColor: "#ffff",
                        }}
                      >
                        <DeleteOutlined
                          onClick={handleDeleteAvatar}
                          sx={{
                            cursor: "pointer",
                            color: "#ff6347",
                            fontSize: "28px",
                          }}
                        />
                        {/* <Button 
  
  startIcon={<DeleteOutlined
    

  />}></Button> */}
                      </Fab>
                    </Box>
                    <Grid item md={1}></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
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
                    <Grid sx={{ p: 1 }} container>
                      <Grid
                        xs={6}
                        md={2}
                        sx={{
                          fontWeight: "600",
                        }}
                      >
                        Employee ID:
                      </Grid>
                      <Grid xs={6} md={2}>
                        {/* EMP0001 */}
                        {employeeId}
                      </Grid>
                      <Grid xs={6} md={2}></Grid>
                      <Grid xs={6} md={2}></Grid>
                    </Grid>{" "}
                    <br />
                    <Grid item xs={12} md={12}>
                      <Item
                        elevation={0}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
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
                            }}
                          >
                            First Name{" "}
                            <span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          {/* <TextField fullWidth id="fullWidth" /> */}
                          <TextField
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.firstName &&
                              Boolean(formik.errors.firstName)
                            }
                            helperText={
                              formik.touched.firstName &&
                              formik.errors.firstName
                            }
                            fullWidth
                            id="fullWidth"
                          />
                        </Box>
                      </Item>
                    </Grid>
                    <br />
                    <Grid item xs={12} md={12}>
                      <Item
                        elevation={0}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
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
                            }}
                          >
                            Middle Name
                          </Typography>
                          {/* <TextField fullWidth id="fullWidth" /> */}
                          <TextField
                            name="middleName"
                            value={formik.values.middleName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.middleName &&
                              Boolean(formik.errors.middleName)
                            }
                            helperText={
                              formik.touched.middleName &&
                              formik.errors.middleName
                            }
                            fullWidth
                            id="fullWidth"
                          />
                        </Box>
                      </Item>
                    </Grid>
                    <br />
                    <Grid item xs={12} md={12}>
                      <Item
                        elevation={0}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
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
                            }}
                          >
                            Last Name{" "}
                            <span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          {/* <TextField fullWidth id="fullWidth" /> */}
                          <TextField
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.lastName &&
                              Boolean(formik.errors.lastName)
                            }
                            helperText={
                              formik.touched.lastName && formik.errors.lastName
                            }
                            fullWidth
                            id="fullWidth"
                          />
                        </Box>
                      </Item>
                    </Grid>
                    <br />
                    <Grid container sx={{ mb: 2, p: 1 }}>
                      <Grid
                        xs={6}
                        md={2}
                        sx={{
                          fontWeight: "600",
                          mt: 2,
                        }}
                      >
                        Gender:
                      </Grid>
                      <Grid xs={6} md={2} sx={{ mt: 2 }}>
                        {gender}
                      </Grid>
                      <Grid xs={0} md={1} sx={{ mt: 2 }}></Grid>
                      {/* <Grid
                        xs={6}
                        md={2}
                        sx={{
                          fontWeight: "600",
                          mt: 2,
                        }}
                      >
                        Date of Birth:
                      </Grid> */}
                      <Grid xs={6} md={2} sx={{ mt: 2 }}>
                        {/* 12-Dec-1991 */}
                        {/* {dob} */}
                      </Grid>
                    </Grid>
                    <br />
                    <Grid item xs={12} md={12}>
                      <Item
                        elevation={0}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
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
                            }}
                          >
                            Email <span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          {/* <TextField fullWidth id="fullWidth" /> */}
                          <TextField
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                            fullWidth
                            id="fullWidth"
                          />
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Item
                        elevation={0}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
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
                            }}
                          >
                            Phone Number{" "}
                            <span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          {/* <TextField fullWidth id="fullWidth" /> */}
                          <TextField
                            fullWidth
                            id="fullWidth"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.phone &&
                              Boolean(formik.errors.phone)
                            }
                            helperText={
                              formik.touched.phone && formik.errors.phone
                            }
                          />
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Item
                        elevation={0}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
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
                            }}
                          >
                            Alternate Number{" "}
                            <span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          {/* <TextField fullWidth id="fullWidth" /> */}
                          <TextField
                            name="alternateNumber"
                            value={formik.values.alternateNumber}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.alternateNumber &&
                              Boolean(formik.errors.alternateNumber)
                            }
                            helperText={
                              formik.touched.alternateNumber &&
                              formik.errors.alternateNumber
                            }
                            fullWidth
                            id="fullWidth"
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
                          justifyContent: "start",
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
                            }}
                          >
                            Address Line 1{" "}
                            <span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          {/* <TextField fullWidth id="fullWidth" /> */}
                          <TextField
                            fullWidth
                            id="fullWidth"
                            name="addressOne"
                            value={formik.values.addressOne}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.addressOne &&
                              Boolean(formik.errors.addressOne)
                            }
                            helperText={
                              formik.touched.addressOne &&
                              formik.errors.addressOne
                            }
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
                          justifyContent: "start",
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
                            }}
                          >
                            Address Line 2{" "}
                            <span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          {/* <TextField fullWidth id="fullWidth" /> */}
                          <TextField
                            fullWidth
                            id="fullWidth"
                            name="addressTwo"
                            value={formik.values.addressTwo}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.addressTwo &&
                              Boolean(formik.errors.addressTwo)
                            }
                            helperText={
                              formik.touched.addressTwo &&
                              formik.errors.addressTwo
                            }
                          />
                        </Box>
                      </Item>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "start",
                      }}
                    >
                      <Grid item xs={12} md={4}>
                        <Item elevation={0}></Item>
                        <Typography
                          sx={{
                            fontsize: "20px",
                            pl: 1,
                            color: "#000000",
                            fontWeight: "700",
                          }}
                        >
                          Area <span style={{ color: "#FF0000" }}>*</span>
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "100%" },
                          }}
                        >
                          {/* <TextField
                            id="outlined-select-Category"
                            select
                          ></TextField> */}
                          <TextField
                            id="demo-helper-text-aligned"
                            name="area"
                            value={formik.values.area}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.area && Boolean(formik.errors.area)
                            }
                            helperText={
                              formik.touched.area && formik.errors.area
                            }
                          />
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Item elevation={0}></Item>
                        <Typography
                          sx={{
                            fontsize: "20px",
                            pl: 1,
                            color: "#000000",
                            fontWeight: "700",
                          }}
                        >
                          State <span style={{ color: "#FF0000" }}>*</span>
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "100%" },
                          }}
                        >
                          {/* <TextField id="demo-helper-text-aligned" /> */}
                          <TextField
                            id="demo-helper-text-aligned"
                            name="state"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.state &&
                              Boolean(formik.errors.state)
                            }
                            helperText={
                              formik.touched.state && formik.errors.state
                            }
                          />
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Item elevation={0}> </Item>
                        <Typography
                          sx={{
                            fontsize: "20px",
                            pl: 1,
                            color: "#000000",
                            fontWeight: "700",
                          }}
                        >
                          Postcode <span style={{ color: "#FF0000" }}>*</span>
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "100%" },
                          }}
                        >
                          {/* <TextField id="demo-helper-text-aligned" /> */}
                          <TextField
                            id="demo-helper-text-aligned"
                            name="postcode"
                            value={formik.values.postcode}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.postcode &&
                              Boolean(formik.errors.postcode)
                            }
                            helperText={
                              formik.touched.postcode && formik.errors.postcode
                            }
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* <Popup /> */}
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
                      //onClick={handleClickOpen}
                    >
                      Save Changes
                    </Button>
                    {issubmit ? (
                      <>
                        <Popup setOpen={true} />
                      </>
                    ) : (
                      <></>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </form>
    </>
  );
}
