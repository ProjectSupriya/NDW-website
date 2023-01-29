import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../sign in/headerlogo.png";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Signin from "../sign in/signinform";
import { useNavigate, useLocation } from "react-router-dom";

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

const names = [
  "Support Worker",
  "Support Cooardinator",
  "Service Provider",
  "Registered Nurse",
  "Client",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const theme = useTheme();
  let navigate = useNavigate();
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const [isProfileCompleted, setisProfileCompleted] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    navigate("/home");
  }

  console.log("isss", isProfileCompleted);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{display: { xs: "block", md: "none",},}} item xs={12} md={12}>
          <Box
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              cursor:'pointer',
            }}
          >
            <img
              src={Logo}
              onClick={handleClick}
              alt=""
              style={{ objectFit: "contain",cursor:'pointer', mt: 0, width: "80px" }}
            />
          </Box>
        </Grid>
        <Grid sx={{display: { xs: "none", md: "block",},}} item xs={12} md={12}>
          <Box
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              cursor:'pointer',
            }}
          >
            <img
              src={Logo}
              onClick={handleClick}
              alt=""
              style={{ objectFit: "contain",cursor:'pointer', mt: 0, width: "80px" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Paper>
        <Box sx={{ flexGrow: 1, mt: 5, backgroundColor: "#fff" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Item elevation={0}>
                <Typography
                  color={"#00527E"}
                  variant="h5"
                  fontWeight={600}
                  sx={{ textAlign: "center", fontSize: "32px" }}
                >
                  {!isProfileCompleted ? <>Log In</> : <>Sign up</>}
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Item elevation={0}>
                <Signin setisProfileCompleted={setisProfileCompleted} />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
