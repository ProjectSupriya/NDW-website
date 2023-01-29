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
import FirstSetupNurse from "../Registernurseprofilesetup/first-setup-nurse";

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

export default function CustomizedDialogs() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function Setup() {
    navigate("/nurse-submit-first");
    console.log("navigate", navigate);
  }
  return (
    <div>
      <Button
        sx={{
          background: "#008ED9",
          fontSize: "20px",
          textTransform: "capitalize",
          p: 1.5,
          width:300,
          color: "#fff",
          fontWeight: "500",
          "&:hover": {
            background: "#ffffff",
            transition: ".5s",
            boxShadow: 10,
            color: "#008ED9",
            border: 3,
            borderColor: "#008ED9",
          },
        }}
        autoFocus
        variant="outlined"
        onClick={handleClickOpen}
      >
        Submit
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent
          sx={{
            display: "flex",
            width: "90%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          dividers
        >
          <CheckCircleIcon
            style={{ color: "#4ECB71", fontSize: "55px" }}
            sx={{ p: 1 }}
          />
          <Typography
            sx={{ maxWidth: "60%", textAlign: "center", fontWeight: "600" }}
            gutterBottom
          >
            Thank you, you are successfully registered. <br /> <br />
            Please verify your email.
          </Typography>
        </DialogContent>
        <DialogActions
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
              color: "#fff",
              fontWeight: "800",
              "&:hover": {
                background: "#1DDFDA",
                transition: ".5s",
                boxShadow: 10,
              },
            }}
            onClick={Setup}
          >
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
