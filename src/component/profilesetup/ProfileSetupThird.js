//import * as React from "react";
import React, { useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Logo from "../sign in/headerlogo.png";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  createUser, selectUser
} from '../../features/user/userSlice';
import { UploadFile } from "../../Uploadfile";
import axios from 'axios';
import Swal from "sweetalert";
import moment from "moment";
import { useForkRef } from "@mui/material";


const API_URL = process.env.REACT_APP_API_URL;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));


export default function BasicTextFields(props) {
  let navigate = useNavigate();

  var user = localStorage.getItem('userObject');

  if (user !== "undefined") {
    user = JSON.parse(user);
  }
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(user);
  console.log(userData);
  const [issubmit, setIsSubmit] = useState(false);



  const [pointId, setpointId] = useState({});
  const [drivingLicence, setdrivingLicence] = useState({});
  const [carRego, setcarRego] = useState({});
  const [carInsurance, setcarInsurance] = useState({});
  const [resume, setresume] = useState({});
  const [referees, setreferees] = useState({});

  //check file uploaded
  const [pointIdUploaded, setpointIdUploaded] = useState(false);
  const [drivingLicenceUploaded, setdrivingLicenceUploaded] = useState(false);
  const [carRegoUploaded, setcarRegoUploaded] = useState(false);
  const [carInsuranceUploaded, setcarInsuranceUploaded] = useState(false);
  const [resumeUploaded, setresumeUploaded] = useState(false);
  const [refereesUploaded, setrefereesUploaded] = useState(false);

  const [document, setdocument] = useState(user.document ? user.document : {});


  var rows = [];
  useEffect(() => {
    var marr = [];
    // var rows2 = [];

    marr = document;
    marr.map((value, key) => {
      //console.log("doc", value.fileName);
      let fileInfo;

      //console.log(value);
      var json_file = {}
      if (value.fileInfo != '') {
        fileInfo = JSON.parse(value.fileInfo);
        //console.log(fileInfo);
        if (fileInfo.updatedAt) {
          var date = new Date(fileInfo.updatedAt);

          date = moment(date).format("DD-MM-YY HH:mm:ss");
          // console.log(date);
        }

        json_file = {

          "FieldName": value.fileName,
          "file": [{
            "url": fileInfo ? fileInfo.url : '',
            "id": value.id
          }]
        }
      }
      key = key + 1;

      if (value.fileInfo != '' && value.fileName == 'pointId') {
        setpointId(json_file);
        setpointIdUploaded(true);
      }
      if (value.fileInfo != '' && value.fileName == 'drivingLicence') {
        setdrivingLicence(json_file);
        setdrivingLicenceUploaded(true);
      }
      if (value.fileInfo != '' && value.fileName == 'carRego') {
        setcarRego(json_file);
        setcarRegoUploaded(true);
      }
      if (value.fileInfo != '' && value.fileName == 'carInsurance') {
        setcarInsurance(json_file);
        setcarInsuranceUploaded(true);
      }
      if (value.fileInfo != '' && value.fileName == 'resume') {
        setresume(json_file);
        setresumeUploaded(true);
      }
      if (value.fileInfo != '' && value.fileName == 'referees') {
        setreferees(json_file);
        setrefereesUploaded(true);
      }

      rows.push(
        json_file
      );
    });
  }, [document]);





  const [fileBase64, setFileBase64] = useState({
    pointId: "",
    drivingLicence: "",
    carRego: "",
    carInsurance: "",
    resume: "",
    referees: ""
  });

  const formik = useFormik({
    initialValues: {
      // firstName: userData ? userData.firstName : '',
      // middleName: userData ? userData.middleName : '',
      // lastName: userData ? userData.lastName : '',
      // email: userData ? userData.email : '',
      // phone: userData ? userData.phone : '',
      // area: userData ? userData.area : '',
      // serviceRequired: userData ? userData.serviceRequired : '',
      pointId: userData ? userData.pointId : '',
      drivingLicence: userData ? userData.drivingLicence : '',
      carRego: userData ? userData.carRego : '',
      carInsurance: userData ? userData.carInsurance : '',
      resume: userData ? userData.resume : '',
      referees: userData ? userData.referees : '',
    },
    //validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      //setIsSubmit(true);
      //setUserData(values);
      // dispatch(createUser(values));

      //alert(JSON.stringify(values, null, 2));
    },
  });
  const setInputValue = useCallback(
    (key, value) => {
      // console.log("key", key);
      // console.log("value", value)
      setFileBase64({ ...fileBase64, [key]: value })
      formik.setValues({
        ...formik.values,
        [key]: value,
      });
    },
    [formik]
  );
  const setInputError = useCallback(
    (key, value) => {
      formik.setErrors({ ...formik.errors, [key]: value });
    },
    [formik]
  );

  const convertBase64 = async (file) => {
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

    console.log("base64 codeplateu S3", res);
    return res
  };

  const uploadFile = (name) => {
    let elementName = name;
    console.log(name)
    console.log(fileBase64[elementName])
    var values = {
      'id': user.id,
      'fieldName': elementName,
      'file': fileBase64[elementName]
    }
    Swal({
      title: 'Uploading file',
      closeOnEsc: false,
      text: "Please wait...",
      allowOutsideClick: false,
      button: false,
      //timer: 2000,
      // onOpen: () => {
      //   Swal.showLoading();
      // }
    });
    axios.post(`${API_URL}/users/file_upload`, values)
      .then(function (response) {
        console.log(response);
        if (response.data.status) {
          setUserData(response.data.result);
          dispatch(createUser(response.data.result));
          Swal.close();
          Swal({
            position: "center",
            icon: "success",
            title: response.data.message,
            button: true,
            allowOutsideClick: true,
          });
          setdocument(response.data.result.document);
          setIsSubmit(true);
          console.log("user data-----------", userData)
        }
      })
      .catch(function (error) {
        console.log(error);
        Swal.close();
        Swal({
          position: "center",
          icon: "error",
          title: "Something went wrong",
          button: true,
          allowOutsideClick: true,
        });

      });
  }

  const showLoading = function () {
    console.log("inside show loading")
    Swal({
      title: 'Uploading file',
      closeOnEsc: false,
      text: "Please wait...",
      allowOutsideClick: false,
      button: false,
      timer: 2000,
      // onOpen: () => {
      //   Swal.showLoading();
      // }
    });
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  //showLoading();
  function Next() {


    var errorMessage = "";
    var iserror = false;

    if (!carInsuranceUploaded) {
      errorMessage = "Please upload car insurance documents";
      iserror = true;
    }
    if (!carRegoUploaded) {
      errorMessage = "Please upload car rego documents";
      iserror = true;
    }
    if (!pointId) {
      errorMessage = "Please upload 100 Point ID (Passport) documents";
      iserror = true;
    }
    if (!drivingLicenceUploaded) {
      errorMessage = "Please upload Driver Licence documents";
      iserror = true;
    }
    if (!resumeUploaded) {
      errorMessage = "Please upload updated resume documents";
      iserror = true;
    }
    if (!refereesUploaded) {
      errorMessage = "Please upload 2 Referees documents";
      iserror = true;
    }

    if (!iserror) {
      Swal({
        position: "center",
        icon: "success",
        title: "Profile step third completed",
        button: true,
        allowOutsideClick: true,
      });
      const values = {
        id: user.id,
        nextStep: 4
      }
      axios.put(`${API_URL}/users/updatesignupstatus`, values)
        .then(function (response) {

          if (response.data.status) {
            props.nextStep(4);
          }
        })
        .catch(function (error) {
          console.log(error);
        });

    } else {
      Swal({
        position: "center",
        icon: "error",
        title: errorMessage,
        button: true,
        allowOutsideClick: true,
      });
    }


    // props.nextStep(4);
    //navigate("/profile-setup-four");
    //console.log("navigate", navigate);
  }
  function Pre() {
    props.prevStep(2);
    //navigate("/profile-setup-secound");
    //console.log("navigate", navigate);
  }
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* <Grid sx={{ background: "#E5F4FB" }} item xs={12} md={12}>
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
          </Grid> */}
          <Box sx={{ flexGrow: 1, mt: 5, width: "100%" }}>
            <Paper elevation={0} sx={{ backgroundColor: "#fff", mb: 3 }}>
              <Box
                
              >
                <Grid container spacing={0}>
                  <Grid item xs={12} md={12}>
                    <Item
                      elevation={0}
                      sx={{
                        display: "flex",
                        p: 5,
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
                          sx={{
                            fontSize: "18px",
                            color: "black",
                            fontWeight: "500",

                          }}
                        >
                          Step 3 / 4
                        </Typography>
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
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "600",

                        }}
                      >
                        100 Point ID (Passport) <span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                    </Box>
                  </Item>
                </Grid>
                <Grid container spacing={2}></Grid>
                <Grid item xs={12} md={12}>
                  <Item
                    elevation={3}
                    sx={{
                      display: "flex",
                      mt: 3,
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
                      {/* <input type="file" multiple class="choose"></input> */}
                      <UploadFile
                        name="pointId"
                        //fieldName="Avatar"
                        //value={formik.values.pointId}
                        value={pointId}
                        isuploaded={pointIdUploaded}
                        setInputValue={setInputValue}
                        setInputError={setInputError}
                        convertBase64={convertBase64}
                      />
                      <Button
                        sx={{
                          background: "#01C1EB",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          width: "150px",
                          color: "#ffffff",
                          fontWeight: "600",
                          "&:hover": {
                            background: "#01C1EB",
                            transition: ".5s",
                            boxShadow: 10,
                          },
                        }}
                        variant="contained"
                        component="span"
                        onClick={() => uploadFile('pointId')}
                      >
                        Upload
                      </Button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Item
                    elevation={0}
                    sx={{
                      display: "flex",
                      mt: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 1000,
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "600",

                        }}
                      >
                        Driver Licence <span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Item
                    elevation={3}
                    sx={{
                      display: "flex",
                      mt: 3,
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
                      {/* <input type="file" multiple class="choose"></input> */}
                      <UploadFile
                        name="drivingLicence"
                        //fieldName="Avatar"
                        //value={formik.values.drivingLicence}
                        value={drivingLicence}
                        isuploaded={drivingLicenceUploaded}
                        setInputValue={setInputValue}
                        setInputError={setInputError}
                        convertBase64={convertBase64}
                      />
                      <Button
                        sx={{
                          background: "#01C1EB",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          width: "150px",
                          color: "#ffffff",
                          fontWeight: "600",
                          "&:hover": {
                            background: "#01C1EB",
                            transition: ".5s",
                            boxShadow: 10,
                          },
                        }}
                        variant="contained"
                        component="span"
                        onClick={() => uploadFile('drivingLicence')}
                      >
                        Upload
                      </Button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Item
                    elevation={0}
                    sx={{
                      display: "flex",
                      mt: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 1000,
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "600",

                        }}
                      >
                        Car Rego <span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Item
                    elevation={3}
                    sx={{
                      display: "flex",
                      mt: 3,
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
                      <UploadFile
                        name="carRego"
                        //fieldName="Avatar"
                        // value={formik.values.carRego}
                        value={carRego}
                        isuploaded={carRegoUploaded}
                        setInputValue={setInputValue}
                        setInputError={setInputError}
                        convertBase64={convertBase64}
                      />
                      <Button
                        sx={{
                          background: "#01C1EB",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          width: "150px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "#ffffff",
                          fontWeight: "600",
                          "&:hover": {
                            background: "#01C1EB",
                            transition: ".5s",
                            boxShadow: 10,
                          },
                        }}
                        variant="contained"
                        component="span"
                        onClick={() => uploadFile('carRego')}
                      >
                        Upload
                      </Button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Item
                    elevation={0}
                    sx={{
                      display: "flex",
                      mt: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 1000,
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "600",

                        }}
                      >
                        Car Insurance <span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Item
                    elevation={3}
                    sx={{
                      display: "flex",
                      mt: 3,
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
                      <UploadFile
                        name="carInsurance"
                        //fieldName="Avatar"
                        //value={formik.values.carInsurance}
                        value={carInsurance}
                        isuploaded={carInsuranceUploaded}
                        setInputValue={setInputValue}
                        setInputError={setInputError}
                        convertBase64={convertBase64}
                      />
                      <Button
                        sx={{
                          background: "#01C1EB",
                          width: "150px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "#ffffff",
                          fontWeight: "600",
                          "&:hover": {
                            background: "#01C1EB",
                            transition: ".5s",
                            boxShadow: 10,
                          },
                        }}
                        variant="contained"
                        component="span"
                        onClick={() => uploadFile('carInsurance')}
                      >
                        Upload
                      </Button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Item
                    elevation={0}
                    sx={{
                      display: "flex",
                      mt: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 1000,
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "600",

                        }}
                      >
                        Updated Resume <span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Item
                    elevation={3}
                    sx={{
                      display: "flex",
                      mt: 3,
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
                      {/* <input type="file" multiple class="choose"></input> */}
                      <UploadFile
                        name="resume"
                        //fieldName="Avatar"
                        //value={formik.values.resume}
                        value={resume}
                        isuploaded={resumeUploaded}
                        setInputValue={setInputValue}
                        setInputError={setInputError}
                        convertBase64={convertBase64}
                      />
                      <Button
                        sx={{
                          background: "#01C1EB",
                          width: "150px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "#ffffff",
                          fontWeight: "600",
                          "&:hover": {
                            background: "#01C1EB",
                            transition: ".5s",
                            boxShadow: 10,
                          },
                        }}
                        variant="contained"
                        component="span"
                        onClick={() => uploadFile('resume')}
                      >
                        Upload
                      </Button>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Item
                    elevation={0}
                    sx={{
                      display: "flex",
                      mt: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 1000,
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "600",

                        }}
                      >
                        2 Referees <span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Item
                    elevation={3}
                    sx={{
                      display: "flex",
                      mt: 3,
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
                      {/* <input type="file" multiple class="choose"></input> */}
                      <UploadFile
                        name="referees"
                        //fieldName="Avatar"
                        //value={formik.values.referees}
                        value={referees}
                        isuploaded={refereesUploaded}
                        setInputValue={setInputValue}
                        setInputError={setInputError}
                        convertBase64={convertBase64}
                      />
                      <Button
                        sx={{
                          background: "#01C1EB",
                          width: "150px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "#ffffff",
                          fontWeight: "600",
                          "&:hover": {
                            background: "#01C1EB",
                            transition: ".5s",
                            boxShadow: 10,
                          },
                        }}
                        variant="contained"
                        component="span"
                        onClick={() => uploadFile('referees')}
                      >
                        Upload
                      </Button>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={12} md={12} sx={{ mt: 5, }}>
                  <Item
                    elevation={0}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 2,
                      mb: 3,
                      width: "100%",
                      flexDirection: "row",
                    }}
                  >
                    <Button
                      onClick={Pre}
                      sx={{

                        fontSize: "18px",
                        textTransform: "capitalize",
                        width: "150px",
                        border: 1,
                        fontSize: "18px",
                      }}
                    >
                      Previous
                    </Button> &nbsp;&nbsp;
                    <Button
                      onClick={Next}
                      sx={{

                        width: "150px",
                        textTransform: "capitalize",
                        color: "#fff",
                        fontSize: "18px",
                        backgroundColor: "#008ED9",
                        "&:hover": {
                          background: "#ffffff",
                          color: "#008ED9",
                          border: 3,
                          borderColor: "#008ED9",
                          transition: ".5s",
                          boxShadow: 10,
                        },
                      }}
                    >
                      Next
                    </Button>
                  </Item>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </form>
    </Container>
  );
}
