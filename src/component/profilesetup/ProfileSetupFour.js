//import * as React from "react";
import React, { useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Logo from "../sign in/headerlogo.png";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import SetUpAccount from "./setupaccount";
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
const API_URL = process.env.REACT_APP_API_URL;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Input = styled("input")({
  display: "none",
});
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


  //setp four


  const [covid19Training, setcovid19Training] = useState({});
  const [ndisWorkerScreeningCheck, setndisWorkerScreeningCheck] = useState({});
  const [educationCertificate, seteducationCertificate] = useState({});
  const [manualHandling, setmanualHandling] = useState({});
  const [vaccineCertificate, setvaccineCertificate] = useState({});


  //check file uploaded
  const [covid19TrainingUploaded, setcovid19TrainingUploaded] = useState(false);
  const [ndisWorkerScreeningCheckUploaded, setndisWorkerScreeningCheckUploaded] = useState(false);
  const [educationCertificateUploaded, seteducationCertificateUploaded] = useState(false);
  const [manualHandlingUploaded, setmanualHandlingUploaded] = useState(false);
  const [vaccineCertificateUploaded, setvaccineCertificateUploaded] = useState(false);


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

      if (value.fileInfo != '' && value.fileName == 'covid19Training') {
        setcovid19Training(json_file);
        setcovid19TrainingUploaded(true);
      }
      if (value.fileInfo != '' && value.fileName == 'ndisWorkerScreeningCheck') {
        setndisWorkerScreeningCheck(json_file);
        setndisWorkerScreeningCheckUploaded(true);
      }
      if (value.fileInfo != '' && value.fileName == 'educationCertificate') {
        seteducationCertificate(json_file);
        seteducationCertificateUploaded(true);
      }
      if (value.fileInfo != '' && value.fileName == 'manualHandling') {
        setmanualHandling(json_file);
        setmanualHandlingUploaded(true);
      }
      if (value.fileInfo != '' && value.fileName == 'vaccineCertificate') {
        setvaccineCertificate(json_file);
        setvaccineCertificateUploaded(true);
      }

      rows.push(
        json_file
      );
    });
  }, [document]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const [fileBase64, setFileBase64] = useState({
    covid19Training: "",
    ndisWorkerScreeningCheck: "",
    educationCertificate: "",
    manualHandling: "",
    vaccineCertificate: "",

  });

  const formik = useFormik({
    initialValues: {
      covid19Training: userData ? userData.covid19Training : '',
      ndisWorkerScreeningCheck: userData ? userData.ndisWorkeerScreeningCheck : '',
      educationCertificate: userData ? userData.educationCertificate : '',
      manualHandling: userData ? userData.manualHandling : '',
      vaccineCertificate: userData ? userData.vaccineCertificate : '',
      // firstName: userData ? userData.firstName : '',
      // middleName: userData ? userData.middleName : '',
      // lastName: userData ? userData.lastName : '',
      // email: userData ? userData.email : '',
      // phone: userData ? userData.phone : '',
      // area: userData ? userData.area : '',
      // serviceRequired: userData ? userData.serviceRequired : '',
      // pointId: userData ? userData.pointId : '',
      // drivingLicence: userData ? userData.drivingLicence : '',
      // carRego: userData ? userData.carRego : '',
      // carInsurance: userData ? userData.carInsurance : '',
      // resume: userData ? userData.resume : '',
      // referees: userData ? userData.referees : '',
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

  function Next() {
    //props.prevStep(5);
    var errorMessage = "";
    var iserror = false;

    if (!covid19TrainingUploaded) {
      errorMessage = "Please upload Covid-19 Training documents";
      iserror = true;
    }
    if (!ndisWorkerScreeningCheckUploaded) {
      errorMessage = "Please upload NDIS Worker Screening Check documents";
      iserror = true;
    }
    if (!educationCertificateUploaded) {
      errorMessage = "Please upload Education Certificate documents";
      iserror = true;
    }
    if (!manualHandlingUploaded) {
      errorMessage = "Please upload Manual Handling documents";
      iserror = true;
    }
    if (!vaccineCertificateUploaded) {
      errorMessage = "Please upload Vaccine Certificate documents";
      iserror = true;
    }


    if (!iserror) {
      Swal({
        position: "center",
        icon: "success",
        title: "Profile step four completed",
        button: true,
        allowOutsideClick: true,
      });

      var new_values = {
        ...userData,
        status: true
      }
      console.log(new_values);
      dispatch(createUser(new_values));
      props.nextStep(5);
      // const values = {
      //   id: user.id,
      //   nextStep: 5
      // }
      // axios.put(`${API_URL}/users/updatesignupstatus`, values)
      //   .then(function (response) {

      //     if (response.data.status) {
      //       var new_values = {
      //         ...userData,
      //         status: true
      //       }
      //       console.log(new_values);
      //       dispatch(createUser(new_values));

      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

    } else {
      Swal({
        position: "center",
        icon: "error",
        title: errorMessage,
        button: true,
        allowOutsideClick: true,
      });
    }


    //navigate("/profile-setup-four");
    //console.log("navigate", navigate);
  }
  function Pre() {
    props.prevStep(3);
    // navigate("/profile-setup-third");
    // console.log("navigate", navigate);
  }


  // function Next() {
  //   navigate("/profile-setup-four");
  //   console.log("navigate", navigate);
  // }
  // function Pre() {
  //   navigate("/profile-setup-third");
  //   console.log("navigate", navigate);
  // }

  return (
    <Container>
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
                          ml: -2,
                        }}
                      >
                        Step 4 / 4
                      </Typography>
                    </Box>
                  </Item>
                </Grid>

                {/* Box */}
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
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "600",

                      }}
                    >
                      Covid-19 Training&nbsp;<span style={{ color: "#FF0000" }}>*</span>
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
                      name="covid19Training"
                      //fieldName="Avatar"
                      // value={formik.values.covid19Training}
                      value={covid19Training}
                      isuploaded={covid19TrainingUploaded}
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
                      onClick={() => uploadFile('covid19Training')}
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
                      NDIS Worker Screening Check&nbsp;<span style={{ color: "#FF0000" }}>*</span>
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
                      name="ndisWorkerScreeningCheck"
                      //fieldName="Avatar"
                      //value={formik.values.ndisWorkeerScreeningCheck}
                      value={ndisWorkerScreeningCheck}
                      isuploaded={ndisWorkerScreeningCheckUploaded}
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
                      onClick={() => uploadFile('ndisWorkerScreeningCheck')}
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
                      Education Certificate&nbsp;<span style={{ color: "#FF0000" }}>*</span>
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
                      name="educationCertificate"
                      //fieldName="Avatar"
                      //value={formik.values.educationCertificate}
                      value={educationCertificate}
                      isuploaded={educationCertificateUploaded}
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
                      onClick={() => uploadFile('educationCertificate')}
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
                      Manual Handling&nbsp;<span style={{ color: "#FF0000" }}>*</span>
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
                      name="manualHandling"
                      //fieldName="Avatar"
                      // value={formik.values.manualHandling}
                      value={manualHandling}
                      isuploaded={manualHandlingUploaded}
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
                      onClick={() => uploadFile('manualHandling')}
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
                      Vaccine Certificate&nbsp;<span style={{ color: "#FF0000" }}>*</span>
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
                      name="vaccineCertificate"
                      //fieldName="Avatar"
                      // value={formik.values.vaccineCertificate}
                      value={vaccineCertificate}
                      isuploaded={vaccineCertificateUploaded}
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
                      onClick={() => uploadFile('vaccineCertificate')}
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={12} sx={{ mt: 5 }}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignSelf: "flex-end",
                    justifyContent: "flex-end",
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
                  {/* <SetUpAccount /> */}
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
    </Container>
  );
}
