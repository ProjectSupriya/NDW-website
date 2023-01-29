import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Bannerimage from "./media/services.png";
import Agedcareimage from "../media/agedcare.png";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Footer from "../footer";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./service.css";
import Ndisimage from "../media/ndis.png";
import DisabilitySupportWorker from "../media/DisabilitySupport Worker.png";
import Nurse from "../media/nurse.png";
import Navbar from "../Navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#e5fbf8" : "#e5fbf8",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",

  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  let navigate = useNavigate();
  function Contact() {
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
          <div className="text">
            <h1> Our Services </h1>
          </div>
        </div>
      </div>

      {/* Section-1 */}
      {/* Dekstop view */}
      <Box sx={{ flexGrow: 1, mt: 0, display: { xs: "none", md: "block", } }}>
      <section class="agedcarebg">
        <Container>
          <Box >
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
                    Aged Care
                  </Typography>
                  <Typography
                    sx={{
                      letterSpacing: '.5px',
                      lineHeight: 1.6,
                      fontSize: "30px",
                      textAlign: "left",
                      fontWeight: "700",
                      lineHeight: "40px",
                      color: "#303030",
                    }}
                  >
                    Support to older people to help them with everyday living &
                    other needs
                  </Typography>
                  <Typography
                    sx={{ mt: 2, letterSpacing: '.5px', lineHeight: 1.6 }}
                    component="h1"
                    variant="h5"
                    fontWeight="400"
                    fontSize={"16px"}
                    color="#3A3A3A"

                    textAlign={"left"}
                  >
                    NDW provides quality staffing solutions for aged care facilities across Australia. 
                    We understand the unique challenges that come with providing care for the elderly, 
                    and our experienced team can help to take the pressure off of your staff. 
                    NDW can provide both casual and permanent staff members, and we offer a flexible 
                    approach that can be tailored to your specific needs. Whether you're looking for a 
                    few extra pairs of hands during a busy period or you need to fill a permanent vacancy, 
                    NDW can help. Contact us today to discuss your aged care staffing needs. NDW is the 
                    aged care staffing solution you've been looking for. 
                  </Typography>
                  <Button
                    sx={{
                      mt: 2,
                      backgroundColor: "#008ED9",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      width:'150px' ,
                      fontWeight: "600",
                      color:'#fff',
                      "&:hover": {
                        background: "#fff",
                        color: "#008ED9",
                        width:'150px' ,
                        border: 3,
                        borderColor: "#008ED9",
                        transition: ".8s",
                        boxShadow: 10,
                      },
                    }}
                   
                    onClick={Contact}
                  >
                    Get Started
                  </Button>
                </Box>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={5}>
                <div className="s1-image">
                  <img
                    src={Agedcareimage}
                    alt=""
                    style={{ objectFit: "contain", mt: 2, width: "100%" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section></Box>
      {/* Mobile view */}
      <section>
        <Container>
          <Box sx={{ flexGrow: 1, mt: 5,display: { xs: "block", md: "none", } }}>
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
              <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={5}>
                <div className="s1-image">
                  <img
                    src={Agedcareimage}
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
                    Aged Care
                  </Typography>
                  <Typography
                    sx={{
                      letterSpacing: '.5px',
                      lineHeight: 1.6,
                      fontSize: "30px",
                      textAlign: "left",
                      fontWeight: "700",
                      lineHeight: "40px",
                      color: "#303030",
                    }}
                  >
                    Support to older people to help them with everyday living &
                    other needs
                  </Typography>
                  <Typography
                    sx={{ mt: 2, letterSpacing: '.5px', lineHeight: 1.6 }}
                    component="h1"
                    variant="h5"
                    fontWeight="400"
                    fontSize={"16px"}
                    color="#3A3A3A"

                    textAlign={"left"}
                  >
                     NDW provides quality staffing solutions for aged care facilities across Australia. 
                    We understand the unique challenges that come with providing care for the elderly, 
                    and our experienced team can help to take the pressure off of your staff. 
                    NDW can provide both casual and permanent staff members, and we offer a flexible 
                    approach that can be tailored to your specific needs. Whether you're looking for a 
                    few extra pairs of hands during a busy period or you need to fill a permanent vacancy, 
                    NDW can help. Contact us today to discuss your aged care staffing needs. NDW is the 
                    aged care staffing solution you've been looking for. 
                  </Typography>
                  <Button
                    sx={{
                      mt: 2,
                      backgroundColor: "#008ED9",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      width:'150px' ,
                      mb:4,
                      fontWeight: "600",
                      color:'#fff',
                      "&:hover": {
                        background: "#fff",
                        color: "#008ED9",
                        width:'150px' ,
                        border: 3,
                        borderColor: "#008ED9",
                        transition: ".8s",
                        boxShadow: 10,
                      },
                    }}
                   
                    onClick={Contact}
                  >
                    Get Started
                  </Button>
                </Box>
              </Grid>
              
            </Grid>
          </Box>
        </Container>
      </section>
      {/* section:2 */}

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
                    src={Ndisimage}
                    alt=""
                    style={{ objectFit: "contain", mt: 2, width: "100%" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box elevation={0} sx={{ textAlign: "left", ml: 2 }}>
                  <Typography
                    sx={{ mt: 2 }}
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"20px"}
                    color="#008ED9"
                    textAlign={"left"}
                  >
                    NDIS
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      textAlign: "left",
                      fontWeight: "700",
                      lineHeight: 1.6,
                      letterSpacing: '.5px',
                      color: "#303030",
                    }}
                  >
                    Support people with a permanent & significant disability by
                    implementing National Disability Insurance Scheme
                  </Typography>
                  <Typography
                    sx={{ mt: 2, lineHeight: 1.6, letterSpacing: '.5px' }}
                    component="h1"
                    variant="h5"
                    fontWeight="400"
                    fontSize={"16px"}
                    color="#3A3A3A"

                    textAlign={"left"}
                  >
                    NDW provides high quality and customised NDIS staffing solutions across Sydney.
                     We work collaboratively with NDIS providers to recruit NDIS specific roles that reflect
                      the individual strengths, interests and needs of participants. Our NDIS staffing solutions 
                      are designed to ensure that NDIS providers have the capacity to meet the NDIS quality standards 
                      and that participants have the necessary skills and support to live independently and achieve their
                       goals assisted by NDW staff. NDW also provides NDIS specific training and development programs for 
                       staff. These programs are designed to build the capacity of NDIS providers to meet the
                        NDIS quality standards and to provide participants with the skills and knowledge necessary to 
                        live independently and achieve their goals. 
                  </Typography>
                  <Button
                    sx={{
                      mt: 2,
                      backgroundColor: "#008ED9",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      width:'150px' ,
                      fontWeight: "600",
                      color:'#fff',
                      "&:hover": {
                        background: "#fff",
                        color: "#008ED9",
                        border: 3,
                        width:'150px' ,
                        borderColor: "#008ED9",
                        transition: ".8s",
                        boxShadow: 10,
                      },
                    }}
                   
                    onClick={Contact}
                  >
                    Get Started
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      {/* section:3 */}
      {/* Dekstop view */}
      <Box sx={{display: { xs: "none", md: "block", }}}>
      <section class="agedcarebg">
        <Container>
          <Box sx={{ flexGrow: 1, mt: 0, display: { xs: "none", md: "block", } }}>
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
                <Box elevation={0} sx={{ textAlign: "left", ml: 3 }}>
                  <Typography
                    sx={{ mt: 2 }}
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"20px"}
                    color="#008ED9"
                    textAlign={"left"}
                  >
                    Disability Support Worker
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: 1.6,
                      letterSpacing: '.5px',
                      fontSize: "30px",
                      textAlign: "left",
                      fontWeight: "700",
                      lineHeight: "40px",
                      color: "#303030",
                    }}
                  >
                    Provide care, emotional support, physical assistance &
                    supervision to aged people & people with disability
                  </Typography>
                  <Typography
                    sx={{ mt: 2, letterSpacing: '.5px', lineHeight: 1.6 }}
                    component="h1"
                    variant="h5"
                    fontWeight="400"
                    fontSize={"16px"}
                    color="#3A3A3A"

                    textAlign={"left"}
                  >
                    NDW provides DSW-Disability Support Worker and AIN - Assistant in Nursing staff to
                     NDIS and Aged Care providers also self and plan managed NDIS participants. 
                     Our services are flexible, affordable and tailored to meet your individual needs. 
                     We provide support to people with disabilities in the community and in their own homes. 
                     We also work with local organisations to provide support to people with disabilities who are 
                     living in supported accommodation. Our aim is to help people with disabilities live full 
                    and active lives, and to participate fully in the community. 
                  </Typography>
                  <Button
                    sx={{
                      mt: 2,
                      backgroundColor: "#008ED9",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      width:'150px' ,
                      fontWeight: "600",
                      color:'#fff',
                      "&:hover": {
                        background: "#fff",
                        color: "#008ED9",
                        border: 3,
                        width:'150px' ,
                        borderColor: "#008ED9",
                        transition: ".8s",
                        boxShadow: 10,
                      },
                    }}
                   
                    onClick={Contact}
                  >
                    Get Started
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <div className="s1-image">
                  <img
                    src={DisabilitySupportWorker}
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
    
 {/* mobile view */}
 <Box sx={{display: { xs: "block", md: "none", }}}>
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
                    src={DisabilitySupportWorker}
                    alt=""
                    style={{ objectFit: "contain", mt: 2, width: "100%" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box elevation={0} sx={{ textAlign: "left", ml: 3 }}>
                  <Typography
                    sx={{ mt: 2 }}
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"20px"}
                    color="#008ED9"
                    textAlign={"left"}
                  >
                    Disability Support Worker
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: 1.6,
                      letterSpacing: '.5px',
                      fontSize: "30px",
                      textAlign: "left",
                      fontWeight: "700",
                      lineHeight: "40px",
                      color: "#303030",
                    }}
                  >
                    Provide care, emotional support, physical assistance &
                    supervision to aged people & people with disability
                  </Typography>
                  <Typography
                    sx={{ mt: 2, letterSpacing: '.5px', lineHeight: 1.6 }}
                    component="h1"
                    variant="h5"
                    fontWeight="400"
                    fontSize={"16px"}
                    color="#3A3A3A"

                    textAlign={"left"}
                  >
                    NDW provides DSW-Disability Support Worker and AIN - Assistant in Nursing staff to 
                    NDIS and Aged Care providers also self and plan managed NDIS participants. 
                    Our services are flexible, affordable and tailored to meet your individual needs. 
                    We provide support to people with disabilities in the community and in their own homes. 
                    We also work with local organisations to provide support to people with disabilities who are 
                    living in supported accommodation. Our aim is to help people with disabilities live full and active lives,
                     and to participate fully in the community. 
                  </Typography>
                  <Button
                    sx={{
                      mt: 2,
                      backgroundColor: "#008ED9",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      width:'150px' ,
                      fontWeight: "600",
                      color:'#fff',
                      "&:hover": {
                        background: "#fff",
                        color: "#008ED9",
                        border: 3,
                        width:'150px' ,
                        borderColor: "#008ED9",
                        transition: ".8s",
                        boxShadow: 10,
                      },
                    }}
                   
                    onClick={Contact}
                  >
                    Get Started
                  </Button>
                </Box>
              </Grid>
             
            </Grid>
          </Box>
        </Container>
      </section>
 </Box>

      {/* Section:4 */}

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
                    src={Nurse}
                    alt=""
                    style={{ objectFit: "contain", mt: 2, width: "100%" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box elevation={0} sx={{ textAlign: "left", ml: 2 }}>
                  <Typography
                    sx={{ mt: 2 }}
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"20px"}
                    color="#008ED9"
                    textAlign={"left"}
                  >
                    Nursing
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      textAlign: "left",
                      fontWeight: "700",
                      lineHeight: 1.6,
                      letterSpacing: '.5px',
                      color: "#303030",
                    }}
                  >
                    Monitor health & wellbeing, record medical history & perform
                    diagnostic tests of aged people & people with disability
                  </Typography>
                  <Typography
                    sx={{ mt: 2, lineHeight: 1.6, letterSpacing: '.5px' }}
                    component="h1"
                    variant="h5"
                    fontWeight="400"
                    fontSize={"16px"}
                    color="#3A3A3A"
                    letterSpacing={0.5}
                    textAlign={"left"}
                  >
                   NDW is a leading provider of NDIS and Aged Care staffing solution in Australia.
                    We provide Nursing Staff RN-Registered Nurses, EN-Enrolled Nurse for NDIS and Aged Care providers,
                     as well as self and plan managed NDIS participants. Our goal is to provide high quality,
                      personalised care that meets the needs of our clients. We work closely with our clients to 
                      ensure that they receive the best possible care and support. We are committed 
                   to providing a safe and supportive environment for our participant and staff. 
                  </Typography>
                  <Button
                    sx={{
                      mt: 2,
                      width:'150px' ,
                      backgroundColor: "#008ED9",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      fontWeight: "600",
                      color:'#fff',
                      "&:hover": {
                        background: "#fff",
                        color: "#008ED9",
                        width:'150px' ,
                        border: 3,
                        borderColor: "#008ED9",
                        transition: ".8s",
                        boxShadow: 10,
                      },
                    }}
                   
                    onClick={Contact}
                  >
                    Get Started
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      <Grid container spacing={0} mt={0}></Grid>

      <Footer />
    </>
  );
}
