import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Bannerimage from "./media/training.png";
import Healthimage from "./media/t2.png";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Footer from "../footer";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./training.css";
import Firstaid from "../media/firstaid.png";
import Navbar from "../Navbar";
import Mentalhealth from "./media/Group 1013.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#E5F4FB" : "#E5F4FB",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",

  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  let navigate = useNavigate();

  function applyjob() {
    navigate("/contact-us");
    console.log("navigate", navigate);
  }

  return (
    <>
      <Navbar />
      <div className="head-text">
        <div className="head-image">
          <img
            src={Bannerimage}
            alt=""
            style={{ objectFit: "contain", mt: 0, width: "100%" }}
          />
        </div>
        <div className="center-text">
          <h1> Training </h1>
        </div>
      </div>

      {/* Section-1 */}
      {/* Dekstop View */}
      <Box sx={{ display: { xs: "none", md: "block", } }}>
        <section class="agedcarebg">
          <Container>
            <Box sx={{ flexGrow: 1, mt: 0 }}>
              <Grid
                container
                spacing={4}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={7}>
                  <Box elevation={0} sx={{ textAlign: "left", mr: 2 }}>
                    <Typography
                      sx={{ mt: 2 }}
                      component="h1"
                      variant="h6"
                      fontWeight="700"
                      fontSize={"20px"}
                      color="#008ED9"
                      textAlign={"left"}
                    >
                      Mental Health First Aid
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: 1.6,
                        letterSpacing: ".5px",
                        fontSize: "30px",
                        textAlign: "left",
                        fontWeight: "700",
                        lineHeight: "48px",
                        color: "#303030",
                      }}
                    >
                      Mental Health First Aid training programs for staff
                    </Typography>
                    <Typography
                      sx={{ mt: 3, lineHeight: 1.6, letterSpacing: '.5px' }}
                      component="h1"
                      variant="h5"
                      fontWeight="400"
                      fontSize={"16px"}
                      color="#3A3A3A"

                      textAlign={"left"}
                    >
                      NDW provides Mental health First aid training in association with our training partner.
                      This is a NDW-led initiative that is NDW's response to the gaps in knowledge and
                      skills that NDW identified in workforce around mental health post Covid-19 pandemic .
                      The aim of the training is to provide employees with the skills and knowledge to
                      identify, approach and support someone who may be experiencing a mental health issue.
                      The training is delivered by NDW's training partners, who are experts in the field of
                      mental health. NDW is committed to ensuring that all employees have the opportunity to
                      take part in this important training.
                    </Typography>
                    {/* When get a content update view course page */}
                    <Button
                      onClick={applyjob}
                      sx={{
                        mt: 3,
                        backgroundColor: "#008ED9",
                        textTransform: "capitalize",
                        width: '150px',
                        fontSize: "17px",
                        fontWeight: "600",
                        "&:hover": {
                          background: "#fff",
                          color: "#008ED9",
                          width: '150px',
                          border: 3,
                          borderColor: "#008ED9",
                          transition: ".8s",
                          boxShadow: 10,
                        },
                      }}
                      variant="contained"
                    >
                      More Info
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <div className="s1-image">
                    <img
                      src={Firstaid}
                      alt=""
                      style={{ objectFit: "contain", mt: 2, width: "100%" }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
      </Box>

      {/* Mobile view */}
      <Box sx={{ display: { xs: "block", md: "none", } }}>
        <section class="agedcarebg">
          <Container>
            <Box sx={{ flexGrow: 1, mt: 0 }}>
              <Grid
                container
                spacing={4}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={5}>
                  <div className="s1-image">
                    <img
                      src={Firstaid}
                      alt=""
                      style={{ objectFit: "contain", mt: 2, width: "100%" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Box elevation={0} sx={{ textAlign: "left", mr: 2 }}>
                    <Typography
                      sx={{ mt: 2 }}
                      component="h1"
                      variant="h6"
                      fontWeight="700"
                      fontSize={"20px"}
                      color="#008ED9"
                      textAlign={"left"}
                    >
                      Mental Health First Aid
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: 1.6,
                        letterSpacing: ".5px",
                        fontSize: "30px",
                        textAlign: "left",
                        fontWeight: "700",
                        lineHeight: "48px",
                        color: "#303030",
                      }}
                    >
                      Mental Health First Aid training programs for staff
                    </Typography>
                    <Typography
                      sx={{ mt: 3, lineHeight: 1.6, letterSpacing: '.5px' }}
                      component="h1"
                      variant="h5"
                      fontWeight="400"
                      fontSize={"16px"}
                      color="#3A3A3A"

                      textAlign={"left"}
                    >
                      NDW provides Mental health First aid training in association with our training partner.
                      This is a NDW-led initiative that is NDW's response to the gaps in knowledge and
                      skills that NDW identified in workforce around mental health post Covid-19 pandemic .
                      The aim of the training is to provide employees with the skills and knowledge to
                      identify, approach and support someone who may be experiencing a mental health issue.
                      The training is delivered by NDW's training partners, who are experts in the field of
                      mental health. NDW is committed to ensuring that all employees have the opportunity to
                      take part in this important training.
                    </Typography>
                    {/* When get a content update view course page */}
                    <Button
                      onClick={applyjob}
                      sx={{
                        mt: 3,
                        backgroundColor: "#008ED9",
                        textTransform: "capitalize",
                        width: '150px',
                        fontSize: "17px",
                        fontWeight: "600",
                        "&:hover": {
                          background: "#fff",
                          color: "#008ED9",
                          width: '150px',
                          border: 3,
                          borderColor: "#008ED9",
                          transition: ".8s",
                          boxShadow: 10,
                        },
                      }}
                      variant="contained"
                    >
                      More Info
                    </Button>
                  </Box>
                </Grid>

              </Grid>
            </Box>
          </Container>
        </section>
      </Box>

      <section class="ndisbg">
        <Container>
          <Box sx={{ flexGrow: 1, mt: 0 }}>
            <Grid
              container
              spacing={4}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={5}>
                <div className="s1-image">
                  <img
                    src={Mentalhealth}
                    alt=""
                    style={{ objectFit: "contain", mt: 2, width: "100%" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box elevation={0} sx={{ textAlign: "left", mr: 2 }}>
                  <Typography
                    sx={{ mt: 0 }}
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"20px"}
                    color="#008ED9"
                    textAlign={"left"}
                  >
                    Crisis Prevention
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      textAlign: "left",
                      fontWeight: "700",
                      color: "#303030",
                    }}
                  >
                    Crisis Prevention trained staff
                  </Typography>
                  <Typography
                    sx={{ mt: 3, lineHeight: 1.6, letterSpacing: '.5px' }}
                    component="h1"
                    variant="h5"
                    fontWeight="400"
                    fontSize={"16px"}
                    color="#3A3A3A"
                    letterSpacing={0.5}
                    textAlign={"left"}
                  >
                    NDW is proud to provide Crisis prevention Intervention trained staff.
                    Our CPI Certified trained staff (previously known MAPA) members are highly trained and
                    experienced in working with individuals who may be experiencing a mental health crisis.
                    We are committed to providing the highest quality of care and services to our clients,
                    and our staff are an integral part of that commitment. NDW offers a variety of services
                    designed to meet the unique needs of our clients, and our CPI certified staff are an integral
                    part of those services. We are proud to offer the highest level of care and service to our clients,
                    and we are committed to providing the best possible care for those who need it most.
                    NDW is a leader in providing quality care and services,
                    and our CPI certified staff are an essential part of that commitment.
                  </Typography>
                  {/* When get a content update view course page */}
                  <Button
                    onClick={applyjob}
                    sx={{
                      mt: 3,
                      backgroundColor: "#008ED9",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      width: '150px',
                      fontWeight: "600",
                      "&:hover": {
                        background: "#fff",
                        color: "#008ED9",
                        border: 3,
                        borderColor: "#008ED9",
                        transition: ".8s",
                        width: '150px',
                        boxShadow: 10,
                      },
                    }}
                    variant="contained"
                  >
                    More Info
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      <Footer />
    </>
  );
}
