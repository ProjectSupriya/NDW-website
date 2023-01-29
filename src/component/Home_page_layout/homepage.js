import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Team from "../media/team.png";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ImageList from "@mui/material/ImageList";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Footer from "../footer";
import Navbar from "../Navbar";
import TextField from "@mui/material/TextField";
import SupportWorkSelect from "./supportworkerselect";
import InitialSelect from "./initialselect";
import SupportCoordinator from "./supportcoordinator";
import ServiceProviderSelect from "./serviceproviderselect";
import RnSelect from "./registernurse";
import ClientSelect from "./clientselect";
import Ourservicecard from "./ourservicecard";
import OutlinedInput from "@mui/material/OutlinedInput";
import HeroImage from "../media/hero.png";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#E5F4FB" : "#E5F4FB",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",

  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  let navigate = useNavigate();

  function meetourteam() {
    navigate("/contact-us");
    console.log("navigate", navigate);
  }
  function Search() {
    const searchFor = {
      "endUser": value,
      "serviceLookingFor": serivceLookingFor,
      "location": location
    }
    console.log(searchFor)
    if (searchFor.endUser != '' && searchFor.serviceLookingFor != '') {
      navigate("/Search", { state: searchFor });
    }

    //console.log("navigate", navigate);
  }
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const [serivceLookingFor, setServiceLookingFor] = useState("");
  const [location, setLocation] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSerivceLookingFor = (e) => {

    setServiceLookingFor(e.target.value);
    console.log(e.target.value)
  }

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }
  return (
    <>
      <Navbar />

      <Box
        sx={{
          background: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "end",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{

                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: '100%',
                justifyContent: "center",
              }}
            >
              <Container>

                <div className="banner-heading">
                  <span>National Disability Workforce</span>
                  <h1> Connecting Care for the Community</h1>
                  <Button
                    onClick={meetourteam}
                    size="large"
                    sx={{
                      background: "#0DABFF",
                      textTransform: "capitalize",
                      fontsize: "25px",
                      fontWeight: "600",
                      height: "3.1em",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      width: "40%",
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
                    autoFocus
                  >
                    Get in touch
                  </Button>
                </div>


              </Container>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "#fff",
                display: "flex",
                overflow: "hidden",
                objectFit: "contain",
                flexDirection: "column",
                alignItems: "end",

                height: 600,
                justifyContent: "end",
              }}
            >
              <img
                src={HeroImage}
                alt=""
                style={{ objectFit: "contain", height: "95%", width: "100%", padding: '10px' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* <Container> */}
      {/* Section-2 */}
      <Grid container spacing={2} sx={{ flexGrow: 1, mt: 10 }}>
        <Grid item xs={12} md={12} sm={12} lg={12} xl={12}>
          <Item elevation={0} sx={{ textAlign: "center" }}>
            <Typography
              component="h1"
              variant="h2"
              fontWeight="700"
              fontSize={"32px"}
              color="#005481"
            >
              Helping everyone find what they need
            </Typography>{" "}
            <br />
            <Typography
              component="h1"
              variant="h6"
              fontWeight="500"
              fontSize={"19px"}
              color="#5C5C5C"
            >
              Search for trusted support, services or jobs near you
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 5,
          background: "#59C5FE",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          pt: 10,
          pb: 10,
        }}
      >
        <Grid
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          container
          spacing={2}
        >
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontsize: "20px",
                color: "#005481",
                fontWeight: "700",
                p: 1,
              }}
            >
              {" "}
              I am a{" "}
            </Typography>
            <Box>
              <FormControl sx={{ minWidth: "100%", backgroundColor: "#fff" }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Select
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select"
                  onChange={handleChange}
                >
                  <MenuItem
                    sx={{
                      m: 1,
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#CFEEFF" },
                    }}
                    value="2"
                  >
                    Support Worker
                  </MenuItem>
                  <MenuItem
                    sx={{
                      m: 1,
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#CFEEFF" },
                    }}
                    value="3"
                  >
                    Support Coordinator
                  </MenuItem>
                  <MenuItem
                    sx={{
                      m: 1,
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#CFEEFF" },
                    }}
                    value="4"
                  >
                    Service Provider
                  </MenuItem>
                  <MenuItem
                    sx={{
                      m: 1,
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#CFEEFF" },
                    }}
                    value="5"
                  >
                    Registered Nurse / Enrolled Nurse
                  </MenuItem>
                  <MenuItem
                    sx={{
                      m: 1,
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#CFEEFF" },
                    }}
                    value="6"
                  >
                    Client / Participant
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontsize: "20px",
                color: "#005481",
                fontWeight: "700",
                p: 1,
              }}
            >
              {" "}
              I am looking for a{" "}
            </Typography>
            <Item elevation={0}>
              {(() => {
                if (value == "") {
                  return (
                    <div>
                      <InitialSelect />
                    </div>
                  );
                } else if (value == "2" || value == "5") {
                  return (
                    <div>
                      <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          onChange={handleSerivceLookingFor}
                          value={serivceLookingFor}
                          label="Select"
                        >
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="job"
                          >
                            Job
                          </MenuItem>
                        </Select>
                      </FormControl>
                      {/* <SupportWorkSelect /> */}
                    </div>
                  );
                } else if (value == "3") {
                  return (
                    <div>
                      <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          onChange={handleSerivceLookingFor}
                          value={serivceLookingFor}
                          label="Select"
                        >
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="5"
                          >
                            Registered Nurse / Enrolled Nurse
                          </MenuItem>
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="6"
                          >
                            Client / Participant
                          </MenuItem>
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="2"
                          >
                            Support Worker
                          </MenuItem>
                        </Select>
                      </FormControl>
                      {/* <SupportCoordinator /> */}
                    </div>
                  );
                } else if (value == "4") {
                  return (
                    <div>
                      <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          onChange={handleSerivceLookingFor}
                          value={serivceLookingFor}
                          label="Select"
                        >
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="5"
                          >
                            Registered Nurse / Enrolled Nurse
                          </MenuItem>
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="6"
                          >
                            Client / Participant
                          </MenuItem>
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="3"
                          >
                            Support Coordinator
                          </MenuItem>
                        </Select>
                      </FormControl>
                      {/* <ServiceProviderSelect /> */}
                    </div>
                  );
                }
                // else if (value == "5") {
                //   return (
                //     <div>
                //       <RnSelect />
                //     </div>
                //   );
                // }
                else {
                  return (
                    <div>
                      <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          onChange={handleSerivceLookingFor}
                          value={serivceLookingFor}
                          label="Select"
                        >
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="3"
                          >
                            Support Coordinator
                          </MenuItem>
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="2"
                          >
                            Support Worker
                          </MenuItem>
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="4"
                          >
                            Service Provider
                          </MenuItem>
                          <MenuItem
                            sx={{
                              m: 1,
                              borderRadius: "10px",
                              "&:hover": { background: "#CCE8F7" },
                            }}
                            value="5"
                          >
                            Registered Nurse / Enrolled Nurse
                          </MenuItem>
                        </Select>
                      </FormControl>
                      {/* <ClientSelect /> */}
                    </div>
                  );
                }
              })()}
            </Item>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontsize: "20px",
                color: "#005481",
                fontWeight: "700",
                p: 1,
              }}
            >
              {" "}
              Location
            </Typography>
            <Box>
              <Box
                sx={{
                  width: 1000,
                  maxWidth: "100%",
                  background: "#fff ",
                  border: "0",
                  outline: "none",
                }}
              >
                <OutlinedInput onChange={handleLocation} fullWidth placeholder="Enter Location" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography sx={{ visibility: "hidden", p: 1 }}> Iam </Typography>
            <Item elevation={0}>
              <Button
                href="#"
                onClick={Search}
                size="large"
                sx={{
                  background: "#008ED9",
                  textTransform: "capitalize",
                  fontsize: "25px",
                  fontWeight: "600",
                  height: "3.5em",
                  transition: ".8s",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "100%",
                  color: "#fff",
                  "&:hover": {
                    background: "#fff",
                    color: "#008ED9",
                    border: 3,
                    borderColor: "#008ED9",
                    transition: ".8s",
                    boxShadow: 10,
                  },
                }}
                autoFocus
              >
                Search
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Container>
        {/* Section-3 */}
        <Grid container spacing={2} sx={{ flexGrow: 1, mt: 10 }}>
          <Grid item xs={12} md={12} sm={12} lg={12} xl={12}>
            <Item
              elevation={0}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ourservicecard />
            </Item>
          </Grid>
        </Grid>
      </Container>
      {/* SECTIOM-4 */}
      <Grid container spacing={2} sx={{ flexGrow: 1, mt: 5 }}>
        <Grid item xs={12} md={12} sm={12} lg={12} xl={12}>
          <Item
            elevation={0}
            sx={{ textAlign: "center", textTransform: "capitalize" }}
          >
            <Typography
              component="h1"
              variant="h6"
              fontWeight="700"
              fontSize={"32px"}
              color="#005481"
            >
              Get to Know Us
            </Typography>
          </Item>
        </Grid>
      </Grid>
      {/* dekstop view */}
      <Box sx={{ flexGrow: 1, mt: 10, display: { xs: "none", md: "block", } }}>
        <Grid spacing={2} columns={16}>
          <Grid item xs={12}>
            <Item elevation={0}>
              <div className="head-text">
                <div className="head-image">
                  <img
                    src={Team}
                    alt=""
                    style={{ objectFit: "contain", mt: 0, width: "100%" }}
                  />
                </div>
                <div className="center-text4">
                  <Button
                    style={{ fontSize: "25px" }}
                    onClick={meetourteam}
                    size="large"
                    sx={{
                      fontsize: "20px",
                      background: "#ffffff",

                      color: "#0DABFF",
                      fontWeight: "600",
                      textTransform: "capitalize",
                      width: "250px",
                      p: 1,
                      fontsize: "20px",
                      color: "#008ED9",
                      "&:hover": {
                        background: "#0DABFF",
                        transition: ".5s",
                        boxShadow: 10,
                        borderColor: "#008ED9",
                        color: "#fff ",
                        fontWeight: "600",
                      },
                    }}
                    autoFocus
                  >
                    Get to know us
                  </Button>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* mobile view */}
      <Box sx={{ flexGrow: 1, mt: 10, display: { xs: "block", md: "none", } }}>
        <Grid spacing={2} columns={16}>
          <Grid item xs={12}>
            <Item elevation={0}>
              <div className="head-text">
                <div className="head-image">
                  <img
                    src={Team}
                    alt=""
                    style={{ objectFit: "contain", mt: 0, width: "100%" }}
                  />
                </div>
                <div className="center-text4">
                  <Button
                    style={{ fontSize: "18px" }}
                    onClick={meetourteam}
                    size="large"
                    sx={{
                      fontsize: "12px",
                      background: "#ffffff",

                      color: "#0DABFF",
                      fontWeight: "600",
                      textTransform: "capitalize",
                      width: "180px",
                      p: 1,
                      fontsize: "20px",
                      color: "#008ED9",
                      "&:hover": {
                        background: "#0DABFF",
                        transition: ".5s",
                        boxShadow: 10,
                        borderColor: "#008ED9",
                        color: "#fff ",
                        fontWeight: "600",
                      },
                    }}
                    autoFocus
                  >
                    Get to know us
                  </Button>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Container>
        {/* Sectoion-5 */}
        <Grid container spacing={2} sx={{ flexGrow: 1, mt: 10 }}>
          <Grid item xs={12} md={12} sm={12} lg={12} xl={12}>
            <Item elevation={0} sx={{ textAlign: "center" }}>
              <Typography
                component="h1"
                variant="h6"
                fontWeight="700"
                fontSize={"32px"}
                color="#005481"
              >
                Reviews about Us
              </Typography>
            </Item>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            mt: 10,
            display: { xs: "none", md: "block" },
          }}
        >
          <ImageList variant="masonry" cols={3} gap={0}>
            <Item elevation={0}>
              <Card
                sx={{
                  minWidth: 200,
                  backgroundColor: "#008ED9",
                  color: "#fff",
                  ml: 0.3,
                  mr: 0.3,
                  mb: 0.9,
                  mt: 0,
                  "&:hover": {
                    background: "#0ca4f6",
                    transition: ".2s",
                    transitionTimingFunction: "ease",
                    boxShadow: 3,
                    border: 1,
                    borderColor: "grey.300",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 16,
                      p: 2,
                      color: "#fff",
                      lineHeight: 1.6,
                      letterSpacing: '.5px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    As an aged carer, I am so happy to share my experience working with NDW.
                    The team that manages my NDIS participants are very professional.
                    They are happy, friendly individuals who make my job so much easier.
                    I can relax knowing that they will contact me if there's anything they're unsure about,
                    they pay us on time, and always provide the highest quality customer service!.
                  </Typography>

                  <CardActions>
                    <Typography color={"#fff"} fontWeight={600}>
                      - Linda
                    </Typography>
                  </CardActions>
                </CardContent>
              </Card>
            </Item>
            <Item elevation={0}>
              <Card
                sx={{
                  minWidth: 200,
                  backgroundColor: "#008ED9",
                  p: 1,
                  m: 0.8,
                  "&:hover": {
                    background: "#0ca4f6",
                    transition: ".2s",
                    transitionTimingFunction: "ease",
                    boxShadow: 3,
                    border: 1,

                    borderColor: "grey.300",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 16,
                      p: 2,
                      lineHeight: 1.6,
                      letterSpacing: '.5px',

                      color: "#fff",
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    I started my journey as a AIN with NDW.
                    Here I have I’ve observed the care and attention given to all areas in my role,
                    the passion to change the narrative and support not only to participants but also to staff.
                    The management is very good.
                    They inspire me to be a better person.
                  </Typography>

                  <CardActions>
                    <Typography color={"#fff"} fontWeight={600}>
                      - Sheila
                    </Typography>
                  </CardActions>
                </CardContent>
              </Card>
            </Item>

            <Item elevation={0}>
              <Card
                sx={{
                  minWidth: 200,
                  backgroundColor: "#008ED9",
                  color: "#fff",
                  p: 1,
                  m: 0.8,
                  "&:hover": {
                    background: "#0ca4f6",
                    transition: ".2s",
                    transitionTimingFunction: "ease",
                    boxShadow: 3,
                    border: 1,
                    borderColor: "grey.300",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 16,
                      p: 2,
                      color: "#fff",
                      lineHeight: 1.6,
                      letterSpacing: '.5px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    I love working for NDW as a AIN .
                    NDW managment is very responsive.
                    The support and training provided to staff is amazing.
                    I am blessed to be given the opportunity to impact the lives of people with disabilities with a positive difference.
                  </Typography>

                  <CardActions>
                    <Typography color={"#fff"} fontWeight={600}>
                      - Asha
                    </Typography>
                  </CardActions>
                </CardContent>
              </Card>
            </Item>
            <Item elevation={0}>
              <Card
                sx={{
                  minWidth: 200,
                  backgroundColor: "#008ED9",
                  color: "#fff",
                  p: 1,
                  m: 0.8,
                  "&:hover": {
                    background: "#0ca4f6",
                    transition: ".2s",
                    transitionTimingFunction: "ease",
                    boxShadow: 3,
                    border: 1,
                    borderColor: "grey.300",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 16,
                      p: 2,
                      color: "#fff",
                      lineHeight: 1.6,
                      letterSpacing: '.5px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    I wanted to thank NDW team for their commitment to provide and flexibility of picking up shifts.
                    I have nothing but wonderful experiences with you,
                    and you have no idea how helpful you have been.
                  </Typography>

                  <CardActions>
                    <Typography color={"#fff"} fontWeight={600}>
                      - Nasahon
                    </Typography>
                  </CardActions>
                </CardContent>
              </Card>
            </Item>
            <Item elevation={0}>
              <Card
                sx={{
                  minWidth: 200,
                  backgroundColor: "#008ED9",
                  color: "#fff",
                  p: 1,
                  m: 0.8,
                  "&:hover": {
                    background: "#0ca4f6",
                    transition: ".2s",
                    transitionTimingFunction: "ease",
                    boxShadow: 3,
                    border: 1,
                    borderColor: "grey.300",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 16,
                      p: 2,
                      color: "#fff",
                      lineHeight: 1.6,
                      letterSpacing: '.5px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    I get very quick response for enquiries & requests,
                    registering for the NDW portal is quick and easy.
                    While registering it is very easy to navigate & the portal is very user-friendly.
                    You get your portal access quickly and you know where you are up to at all times in the staff onboarding process
                  </Typography>

                  <CardActions>
                    <Typography color={"#fff"} fontWeight={600}>
                      - Adrian
                    </Typography>
                  </CardActions>
                </CardContent>
              </Card>
            </Item>
            <Item elevation={0}>
              <Card
                sx={{
                  minWidth: 200,
                  backgroundColor: "#008ED9",
                  color: "#fff",
                  p: 1,
                  m: 0.8,
                  "&:hover": {
                    background: "#0ca4f6",
                    transition: ".2s",
                    transitionTimingFunction: "ease",
                    boxShadow: 3,
                    border: 1,
                    borderColor: "grey.300",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 16,
                      p: 2,
                      color: "#fff",
                      lineHeight: 1.6,
                      letterSpacing: '.5px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    NDW has provided support in providing creative, interesting, and engaging activities for my participants.
                    The atmosphere and environment of NDW reflect the professionalism and dedication towards work.
                    I appreciate the management very much. It says a lot about an organisation when they are open to new ideas.
                  </Typography>

                  <CardActions>
                    <Typography color={"#fff"} fontWeight={600}>
                      - Maira
                    </Typography>
                  </CardActions>
                </CardContent>
              </Card>
            </Item>
          </ImageList>
        </Box>
      </Container>
      <Grid container spacing={0} mt={10}></Grid>
      <Box sx={{ flexGrow: 1, mb: 10 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Item
              elevation={0}
              sx={{
                background: "#FFFFFF",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 4.4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "30px",

                    textAlign: "center",
                    fontWeight: "600",
                    color: "#005481",
                  }}
                >
                  Take the first step towards making change
                </Typography>{" "}
                <br /> <br />
                <Button
                  style={{ fontSize: "25px" }}
                  onClick={meetourteam}
                  size="large"
                  sx={{
                    fontsize: "20px",

                    background: "#0DABFF",

                    fontWeight: "600",
                    textTransform: "capitalize",
                    width: "250px",
                    p: 0.5,
                    fontsize: "20px",
                    color: "#fff",
                    "&:hover": {
                      background: "#fff",
                      transition: ".5s",

                      boxShadow: 10,
                      border: 3,
                      borderColor: "#0DABFF",
                      color: "#0DABFF ",
                      fontWeight: "600",
                    },
                  }}
                  autoFocus
                >
                  Get in Touch
                </Button>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
