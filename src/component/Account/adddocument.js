//import * as React from "react";
import React, { useEffect, useState, useCallback } from "react";
import Dialog from "@mui/material/Dialog";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Bannerimage from "../media/upload.png";
import Button from "@mui/material/Button";
import Progress from "./progress";
import Pdf from "../media/pdf.png";
import axios from "axios";
import Swal from "sweetalert";

const API_URL = process.env.REACT_APP_API_URL;

var user = localStorage.getItem('userObject');
if (user !== "undefined") {
  user = JSON.parse(user);
}


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const { id, fieldName, setRefresh } = props;
  const [encodedFile, setEncodedFile] = useState(undefined);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setRefresh(true);
    setOpen(false);
  };

  const convertBase64 = (file) => {
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
    return res
  }

  const handleFileChange = async (event) => {
    let file = event.target.files[0];
    var name = event.target.getAttribute('name');
    let fileSize = event.target.files[0].size / 1024 / 1024;
    if (fileSize > 1) {
      // in mb
      //setInputError([name], "Image/File must be smaller than 1MB");
    } else {
      let base64 = (await convertBase64(file));
      console.log("here", base64);
      setEncodedFile(base64);
      //setCurrentFile(base64);
      //setInputValue([name], base64);
    }
  };
  // const setInputValue = useCallback(
  //   (key, value) => {
  //     // console.log("key", key);
  //     // console.log("value", value)
  //     setFileBase64(value)
  //     formik.setValues({
  //       ...formik.values,
  //       [key]: value,
  //     });
  //   },
  //   [formik]
  // );
  // const setInputError = useCallback(
  //   (key, value) => {
  //     formik.setErrors({ ...formik.errors, [key]: value });
  //   },
  //   [formik]
  // );

  useEffect(() => {

    // console.log(user);
    // console.log(encodedFile);
    // console.log(id);
    var values = {
      'id': id,
      'fieldName': fieldName,
      'file': encodedFile
    }
    //console.log(values.file);
    //return false;

    if (values.file != undefined) {

      axios.post(`${API_URL}/users/file_upload`, values)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {

            // var retrievedUser = localStorage.getItem('userObject');
            // if (retrievedUser !== "undefined") {
            //   retrievedUser = JSON.parse(retrievedUser);
            // }
            //retrievedUser.document = response.data.documents;
            //localStorage.setItem('userObject', JSON.stringify(retrievedUser));
            //alert("File uploaded sucessfully")
            Swal({
              position: "center",
              icon: "success",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
            //setUserData(response.data.result);
            //dispatch(createUser(response.data.result));
            //setIsSubmit(true);
          }
          else {
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
    }
  }, [encodedFile]);


  return (
    <div>
      <AddBoxIcon
        onClick={handleClickOpen}
        style={{ color: "#6993ff", fontSize: "45px" }}
      />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px",  // Set your width here
            },
          },
        }}
      >
        <DialogContent>
          <Typography sx={{ textAlign: "center", fontSize: "28px", m: 1, fontWeight:500 }}>
            Upload Files
          </Typography>

          <Grid
            sx={{
              backgroundColor: "#F5F5F5",
              border: "2px dotted grey",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            container
            rowSpacing={0}
            columnSpacing={{ xs: 0, sm: 0, md: 0 }}
          >
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Bannerimage} alt="" />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                mb: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            <Typography sx={{fontWeight:600, fontSize:'16px'}}> Drag and Drop or</Typography>
              <Button
                component="label"
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "underline",
                }}
              >
               <Typography sx={{fontWeight:500, fontSize:'16px'}}>Browse</Typography> 
                <input hidden onChange={handleFileChange} accept="*" multiple type="file" />
              </Button>
             <Typography sx={{fontWeight:600, fontSize:'16px'}}>your files here</Typography> 
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid
              sx={{
                m: 2,
                p: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              container
              rowSpacing={0}
              columnSpacing={{ xs: 0, sm: 0, md: 0 }}
            >
              {/* <Grid container>
                <Grid xs={6} md={2}>
                  <img src={Pdf} alt="" />
                </Grid>
                <Grid xs={6} md={10} sx={{ mt: 3 }}>
                  <Progress />
                </Grid>
              </Grid>{" "} */}
              <br />
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            container
            rowSpacing={0}
            columnSpacing={{ xs: 0, sm: 0, md: 0 }}
          >
            <Button
              autoFocus
              onClick={handleClose}
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
              Done
            </Button>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
