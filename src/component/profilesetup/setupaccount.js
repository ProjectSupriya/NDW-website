import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from 'axios';
import { Box } from "@mui/system";

const API_URL = process.env.REACT_APP_API_URL;
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
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(props.open);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log("closed clicked");
    setOpen(false);
  };
  function Profile() {
    //setOpen(false);
    //navigate("/sign-in");
    //console.log("navigate", navigate);
    //setOpen(false);

    console.log("status", open);
    const values = {
      id: props.id,
      nextStep: 6
    }
    axios.put(`${API_URL}/users/updatesignupstatus`, values)
      .then(function (response) {

        if (response.data.status) {
          setOpen(false);
          navigate("/home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      {console.log("setopen status", open)}
      {/* <Button
        onClick={handleClickOpen}
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
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckCircleIcon
            style={{ color: "#4ECB71", fontSize: "55px" }}
            sx={{ p: 1 }}
          />
          <Typography
            sx={{ maxWidth: "100%", textAlign: "center", fontSize: "24px", fontWeight: "600" }}
            gutterBottom
          ><br />
            <Typography sx={{fontSize:'18px', fontWeight:600}}>Your account setup is successful.</Typography>
          </Typography>
        </DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              background: "#01C1EB",
              width: "100px",
              m: 3,
              p: 1,
              color: "#fff",
              fontWeight: "800",
              "&:hover": {
                background: "#1DDFDA",
                transition: ".5s",
                boxShadow: 10,
              },
            }}
            onClick={Profile}
          >
            Ok
          </Button>
          </Box>
        </BootstrapDialog>
    </div>
  );
}
