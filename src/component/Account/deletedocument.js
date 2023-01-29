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
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Grid from "@mui/material/Grid";
import axios from 'axios';
import Swal from "sweetalert";

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

  const { id, userId, setRefresh } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log("id", id);
    console.log("userId", userId);
    var values = {
      id: id,
      userId: userId
    }

    axios.post(`${API_URL}/users/deletedoc`, values)
      .then(function (response) {

        if (response.data.status) {

          Swal({
            position: "center",
            icon: "success",
            title: 'Document deleted successfully',
            button: true,
            allowOutsideClick: true,
          });
          setRefresh(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div>
      <DeleteIcon
        style={{ color: "#ff6347", fontSize: "35px" }}
        onClick={handleClickOpen}
      />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            item
            xs={12}
            md={12}
          >
            <Grid
              sx={{
                p: 2,
                width: "80%",

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
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "start",
                  width: "100%",
                }}
                container
              >
                <Grid xs={6} md={2}>
                  <ErrorOutlineOutlinedIcon
                    style={{ color: "#ff6347", fontSize: "45px" }}
                  />
                </Grid>
                <Grid xs={6} md={10}>
                  <Typography fontWeight={600} gutterBottom>
                    Are you sure you want to delete this document?
                  </Typography>
                  You won’t be able to recover it again.
                </Grid>
              </Grid>{" "}
              <br />
            </Grid>
          </Grid>
        </DialogContent>
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
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              type="submit"
              color="grey"
              variant="contained"
              sx={{ m: 3, textTransform: "capitalize" }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              onClick={handleDelete}
              type="submit"
              variant="contained"
              sx={{ m: 2, textTransform: "capitalize" }}
            >
              Delete
            </Button>
          </DialogActions>
        </Grid>
      </BootstrapDialog>
    </div>
  );
}
