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
import "./profile.css";
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
import swal from "sweetalert";

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

    const [ndis, setndis] = useState({});
    const [passport, setpassport] = useState({});
    const [firstAid, setfirstAid] = useState({});
    const [wwc, setwwc] = useState({});
    const [afp, setafp] = useState({});
    const [aphra, setaphra] = useState({});
    //check file uploaded
    const [ndisUploaded, setndisUploaded] = useState(false);
    const [passportUploaded, setpassportUploaded] = useState(false);
    const [firstAidUploaded, setfirstAidUploaded] = useState(false);
    const [wwcUploaded, setwwcUploaded] = useState(false);
    const [afpUploaded, setafpUploaded] = useState(false);
    const [aphraUploaded, setaphraUploaded] = useState(false);

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

            if (value.fileInfo != '' && value.fileName == 'ndis') {
                setndis(json_file);
                setndisUploaded(true);
            }
            if (value.fileInfo != '' && value.fileName == 'passportSizePhoto') {
                setpassport(json_file);
                setpassportUploaded(true);
            }
            if (value.fileInfo != '' && value.fileName == 'firstAid') {
                setfirstAid(json_file);
                setfirstAidUploaded(true);
            }
            if (value.fileName == 'wmc' && fileInfo ? fileInfo.url : undefined) {
                setwwc(json_file);
                setwwcUploaded(true);
            }
            if (value.fileInfo != '' && value.fileName == 'afp') {
                setafp(json_file);
                setafpUploaded(true);
            }
            if (value.fileInfo != '' && value.fileName == 'aphra') {
                setaphra(json_file);
                setaphraUploaded(true);
            }

            rows.push(
                json_file
            );
        });
    }, [document])


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);

    console.log("doc", rows);
    console.log("ndis", ndis);
    console.log("passport", passport);
    console.log("afp", afp);
    console.log("firstAid", firstAid);
    console.log("wwc", wwc);

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

        console.log("base64 codeplateu S3", res);
        return res
    };
    const validationSchema = yup.object({
        firstName: yup
            .string('Enter your firtstname')
            .required('Firstname is required'),
        middleName: yup
            .string('Enter your middletname')
            .required('middlename is required'),
        lastName: yup
            .string('Enter your lastname')
            //.min(8, 'Password should be of minimum 8 characters length')
            .required('Lastname is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        phone: yup.number()
            .required("Phone is required")
        // .min(10, "to short")
        // .max(10, "to long")
        ,
        area: yup
            .string('Enter your area')
            .required('area is required'),
        // serviceRequired: yup
        //     .string('Enter your serivce')
        //     .required('service is required'),

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
            ndis: ndis ? ndis : '',
            passportSizePhoto: passport ? passport : '',
            firstAid: firstAid ? firstAid : '',
            wwc: wwc ? wwc : '',
            afp: afp ? afp : '',
            aphra: aphra ? aphra : '',
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
            console.log("key", key);
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
    // var fileObj = [];
    // var fileArray = [];
    // const [filestate, setFileState] = useState({ file: [null] });

    // const uploadMultipleFiles = (e) => {
    //   fileObj.push(e.target.files);
    //   console.log(e.target.files)

    //   for (let i = 0; i < fileObj[0].length; i++) {
    //     console.log(URL.createObjectURL(fileObj[0][i]));
    //     fileArray.push(URL.createObjectURL(fileObj[0][i]));
    //   }
    //   setFileState({ file: fileArray });
    //   console.log(filestate);
    // }

    const [file, setFile] = useState([]);
    const [fileBase64, setFileBase64] = useState({
        full_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        ndis: ""
    });

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
            buttons: false,
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
                    console.log("user data------------", userData)
                } else {
                    Swal.close();
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
                Swal({
                    position: "center",
                    icon: "error",
                    title: "Something went wrong",
                    button: true,
                    allowOutsideClick: true,
                });
                Swal.close();
            });
    }

    function Pre() {
        props.prevStep(1);
        //navigate("/profile-setup-first");
        //console.log("navigate", navigate);
    }
    function Next() {

        var errorMessage = "";
        var iserror = false;

        if (!ndisUploaded) {
            errorMessage = "Please upload ndis documents";
            iserror = true;
        }
        if (!passportUploaded) {
            errorMessage = "Please upload passport size photo";
            iserror = true;
        }
        if (!wwcUploaded) {
            errorMessage = "Please upload wwc documents";
            iserror = true;
        }
        if (!firstAidUploaded) {
            errorMessage = "Please upload firstaid certificate documents";
            iserror = true;
        }
        if (!afpUploaded) {
            errorMessage = "Please upload afp documents";
            iserror = true;
        }

        if (!iserror) {
            Swal({
                position: "center",
                icon: "success",
                title: "Profile step second completed",
                button: true,
                allowOutsideClick: true,
            });
            const values = {
                id: user.id,
                nextStep: 3
            }
            axios.put(`${API_URL}/users/updatesignupstatus`, values)
                .then(function (response) {

                    if (response.data.status) {
                        props.nextStep(3);
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

        //navigate("/profile-setup-third");
        //console.log("navigate", navigate);
    }

    return (


        < Container >
            <Grid container spacing={6}>
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
                <form onSubmit={formik.handleSubmit}>
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
                                                    Step 2 / 4
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
                                                    sx={{
                                                        fontSize: "18px",
                                                        color: "black",
                                                        fontWeight: "600",
                                                        ml: 0,
                                                    }}
                                                >
                                                    Employee ID: {user?.employeeId ? user.employeeId : <></>}
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
                                                    ml: 0,
                                                }}
                                            >
                                                NDIS Induction or Infection Control <span style={{ color: "#FF0000" }}>*</span>
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
                                            {console.log("ndis", formik.values.ndis)}
                                            <UploadFile
                                                name="ndis"
                                                //fieldName="Avatar"
                                                value={ndis}
                                                //value="sas"
                                                isuploaded={ndisUploaded}
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
                                                onClick={() => uploadFile('ndis')}
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
                                                    ml: 0,
                                                }}
                                            >
                                                Passport size photo <span style={{ color: "#FF0000" }}>*</span>
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
                                                name="passportSizePhoto"
                                                //fieldName="Avatar"
                                                //value={formik.values.passport}
                                                value={passport}
                                                isuploaded={passportUploaded}
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
                                                onClick={() => uploadFile('passportSizePhoto')}
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
                                                    ml: 0,
                                                }}
                                            >
                                                First Aid Certificate <span style={{ color: "#FF0000" }}>*</span>
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
                                                name="firstAid"
                                                //fieldName="Avatar"
                                                //value={formik.values.firstAid}
                                                value={firstAid}
                                                isuploaded={firstAidUploaded}
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
                                                onClick={() => uploadFile('firstAid')}
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
                                                    ml: 0,
                                                }}
                                            >
                                                WWC (Working with Children Check) <span style={{ color: "#FF0000" }}>*</span>
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
                                                name="wmc"
                                                //fieldName="Avatar"
                                                //value={formik.values.wwc}
                                                value={wwc}
                                                isuploaded={wwcUploaded}
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
                                                onClick={() => uploadFile('wmc')}
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
                                                    ml: 0,
                                                }}
                                            >
                                                AFP Police Clearance <span style={{ color: "#FF0000" }}>*</span>
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
                                                name="afp"
                                                //fieldName="Avatar"
                                                // value={formik.values.afp}
                                                value={afp}
                                                isuploaded={afpUploaded}
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
                                                onClick={() => uploadFile('afp')}
                                            >
                                                Upload
                                            </Button>
                                        </Box>
                                    </Item>
                                </Grid>

                                {/* extra field for nurse */}
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
                                                    ml: 0,
                                                }}
                                            >
                                                APHRA Certificate <span style={{ color: "#FF0000" }}>*</span>
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
                                                name="aphra"
                                                //fieldName="Avatar"
                                                // value={formik.values.afp}
                                                value={aphra}
                                                isuploaded={aphraUploaded}
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
                                                onClick={() => uploadFile('aphra')}
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
                                            m: 0,
                                            width: "100%",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Button
                                            onClick={Pre}
                                            sx={{
                                                mb: 3,
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
                                                mb: 3,
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
                </form>
            </Grid>
        </Container >
    );
}
