import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, duration, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../sign in/headerlogo.png";
import Signupform from "./signupform";
import Client from "../client/clientsignup";
import NurseSignup from "./nursesignup";
import "./signup.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import userSlice from "../../features/user/userSlice";
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

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
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const theme = useTheme();
  const getInitialState = () => {
    const value = "";
    return value;
  };
  let navigate = useNavigate();
  const [value, setValue] = useState(undefined);
  const [userTypeId, setUserTypeId] = useState(undefined);
  const [isListFetched, setIsListFetched] = useState(false);
  const [userTypeData, setUserTypeData] = useState([]);

  useEffect(() => {


    axios.get(`${API_URL}/usertype`)
      .then(function (response) {
        console.log(response);
        if (response.data.status) {
          setUserTypeData(response.data.result.rows);
          console.log(userTypeData);
          setIsListFetched(true);
          // setUserData(response.data.results);
          // dispatch(createUser(response.data.results));
          // setIsSubmit(true);
          //alert(response.data.message);
          //navigate("/home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])



  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value);
    console.log("value=", value)
    setUserTypeId(e.target.value.id);
  };

  const handlelogoClick = () => {
    navigate("/home");
  }
  console.log("hereeee", value)
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
              onClick={handlelogoClick}
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
              onClick={handlelogoClick}
              alt=""
              style={{ objectFit: "contain",cursor:'pointer', mt: 0, width: "80px" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Paper>
        <Box sx={{ flexGrow: 1, mt: 5, background: "#fff" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Item elevation={0}>
                <Typography
                  color={"#00527E"}
                  variant="h5"
                  fontWeight={600}
                  sx={{ textAlign: "center", fontSize: "32px" }}
                >
                  Sign up
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <Item
                  sx={{
                    textAlign: "left",
                    m: 2,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                  elevation={0}
                >
                  <Box sx={{
                    backgroundColor: "#fff",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    maxWidth: "100%",
                    ml: 1,
                  }}>
                    <span className="general-text">I am a</span> &nbsp;
                    <FormControl sx={{ width: '70%', backgroundColor: "#fff" }}>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select"
                        onChange={handleChange}
                      >
                        {
                          isListFetched ?
                            (userTypeData.map((item, i) => {
                              if (item.type != 'admin') {
                                return (
                                  <MenuItem
                                    key={i}
                                    sx={{
                                      m: 1,
                                      borderRadius: "10px",
                                      "&:hover": { backgroundColor: "#CCE8F7" },
                                    }}
                                    value={item.id}
                                  >
                                    {item.type}
                                  </MenuItem>
                                );
                              }

                            }))
                            :
                            (<>

                            </>)
                        }

                        {/* <MenuItem
                          sx={{
                            m: 1,
                            borderRadius: "10px",
                            "&:hover": { backgroundColor: "#CCE8F7" },
                          }}
                          value="Support Worker"
                        >
                          Support Worker
                        </MenuItem>
                        <MenuItem
                          sx={{
                            m: 1,
                            borderRadius: "10px",
                            "&:hover": { backgroundColor: "#CCE8F7" },
                          }}
                          value="Support Cooardinator"
                        >
                          Support Cooardinator
                        </MenuItem>
                        <MenuItem
                          sx={{
                            m: 1,
                            borderRadius: "10px",
                            "&:hover": { backgroundColor: "#CCE8F7" },
                          }}
                          value="Service Provider"
                        >
                          Service Provider
                        </MenuItem>
                        <MenuItem
                          sx={{
                            m: 1,
                            borderRadius: "10px",
                            "&:hover": { backgroundColor: "#CCE8F7" },
                          }}
                          value="Registered Nurse"
                        >
                          Registered Nurse
                        </MenuItem>
                        <MenuItem
                          sx={{
                            m: 1,
                            borderRadius: "10px",
                            "&:hover": { backgroundColor: "#CCE8F7" },
                          }}
                          value="Client"
                        >
                          Client
                        </MenuItem> */}
                      </Select>
                    </FormControl>
                  </Box>

                </Item>
              </Grid>
              <Grid item xs={6} md={10}>
                <Item elevation={0}></Item>
              </Grid>
            </Grid>{" "}
          </Box>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Box elevation={0}>
                {(() => {

                  if (value == "") {
                    return <div></div>;
                  } else if (value == "2") {
                    return (
                      <div>
                        <Signupform userTypeId={userTypeId} userType={value} />
                      </div>
                    );
                  } else if (value == "3") {
                    return (
                      <div>
                        <Signupform userTypeId={userTypeId} userType={value} />
                      </div>
                    );
                  } else if (value == "5") {
                    return (
                      <div>
                        <NurseSignup userTypeId={userTypeId} userType={value} />
                      </div>
                    );
                  }
                  else if (value == "6") {
                    return (
                      <div>
                        <Client userTypeId={userTypeId} userType={value} />
                      </div>
                    );
                  }
                  else if (value == "4") {
                    return (
                      <div>
                        <Signupform userTypeId={userTypeId} userType={value} />
                      </div>
                    );
                  } else {
                    return (
                      <></>
                      // <div>
                      //   <Client />
                      // </div>
                    );
                  }
                })()}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
