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

  return (
    <div>
      <Button
        size="large"
        sx={{
          background: "#0DABFF",
          width: "200px",
          height: "50px",
          textTransform: "capitalize",
          fontsize: "25px",
          fontWeight: "600",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          color: "#ffffff",
          "&:hover": {
            background: "#ffffff",
            color: "#0DABFF",
            border: 3,
            borderColor: "#0DABFF",
            transition: ".5s",
            boxShadow: 10,
          },
        }}
        autoFocus
        onClick={handleClickOpen}
      >
        Connect
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
            Thank you for sending connection request.
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
              "&:hover": {
                background: "#1DDFDA",
                transition: ".5s",
                boxShadow: 10,
              },
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
