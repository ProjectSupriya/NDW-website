import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Popup from "./registerrnselect";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["RN"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function get_Styles(job, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(job) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",

  color: theme.palette.text.secondary,
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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
            color: "black",
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
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  function Search() {
    navigate("/search");
    console.log("navigate", navigate);
  }
  return (
    <div>
      <Item
        onClick={handleClickOpen}
        elevation={0}
        sx={{
          cursor: "pointer",
          display: "flex",
          maxWidth: "100%",
          background: "#489CE4",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          m: 2,
          borderRadius: "8px",
          "&:hover": {
            background: "#1DDFDA",
            transition: ".5s",
            boxShadow: 10,
          },
        }}
      >
        <div className="icon">
          <AccountCircleIcon
            style={{ color: "#ffffff", fontSize: "30px" }}
            sx={{ p: 0.3 }}
          />
        </div>
        <div className="title">
          <Typography
            component="h1"
            variant="h6"
            fontWeight="500"
            fontSize={"18px"}
            color="#fff"
            textAlign={"center"}
          >
            Registerd Nurse
          </Typography>
        </div>
        <div className="right-icon">
          <ArrowForwardIosIcon
            style={{ color: "#ffffff", fontSize: "28px" }}
            sx={{ p: 0.3 }}
          />
        </div>
      </Item>

      <BootstrapDialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "12px",
            },
          },
        }}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          sx={{ background: "#489CE4", color: "#fff" }}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Registerd Nurse
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <Typography sx={{ fontWeight: "600", pb: 1 }}>
                  I am a :
                </Typography>

                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={personName}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Popup />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography sx={{ fontWeight: "600", pb: 1 }}>Area :</Typography>
              <TextField fullWidth label="Enter postcode" variant="outlined" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={Search}
            size="large"
            sx={{
              background: "#01C1EB",
              m: 1,
              width: "150px",
              color: "#fff",
              "&:hover": {
                background: "#1DDFDA",
                transition: ".5s",
                boxShadow: 10,
              },
            }}
            autoFocus
          >
            Search
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
