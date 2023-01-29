import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";
import { Container, Typography } from "@mui/material";
import Aboutbanner from "../media/contactus.png";
import Group1 from "../media/Group 351.png";
import Group2 from "../media/Group 352.png";
import Group3 from "../media/Group 356.png";
import Group4 from "../media/Group 357.png";
import Footer from "../footer";
import Post from "./post";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#E5F4FB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <>
      <Navbar />

      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          <Container>
            <Grid item xs={12} md={12}>
              <Item elevation={0}>
                <Typography
                  sx={{
                    color: "#008ED9",
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "700",
                  }}
                >
                  About National Disability Workforce
                </Typography>
              </Item>
            </Grid>
          </Container>
          <Container>
            <Grid item xs={12} md={12}>
              <Item elevation={0}>
                <Typography
                  sx={{
                    color: "#303030",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "500",
                    letterSpacing: ".5px",
                    lineHeight: 1.6,
                    fontWeight: "Regular",
                  }}
                >
                  NDW is a staffing agency that provides staffing solutions to
                  aged and disability service providers and NDIS participant
                  (Self-Managed and Plan Managed). We are founded on the belief
                  that all humans have the right to access quality services, and
                  our mission is to provide support and opportunity to those who
                  need it most. We are dedicated to creating a workforce that
                  reflects the diversity of our community, and we are committed
                  to providing quality employment opportunities for people with
                  disabilities. With over 6 years of head office management
                  experience in the industry, NDW is your trusted partner in
                  staffing solutions.
                </Typography>
              </Item>
            </Grid></Container>
          <Grid item xs={12} md={12}>
            <Item sx={{ p: 0 }} elevation={0}>
              <img
                src={Aboutbanner}
                alt=""
                style={{ objectFit: "cover", mt: 0, width: "100%" }}
              />
            </Item>
          </Grid>
          <Container>
            <Grid sx={{ mt: 10 }} item xs={12} md={12}>
              <Item elevation={0}>
                <Typography
                  sx={{
                    color: "#008ED9",
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "700",
                  }}
                >
                  What defines us?
                </Typography>
              </Item>
            </Grid>
          </Container>
        </Grid>
      </Box>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 5 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  minHeight: "300px",
                  borderRadius: "10px 0px 0px 10px",
                  background: "#fff",
                  mb: 5,

                  "&:hover": {
                    background: "#fff",
                    transition: ".5s",
                    boxShadow: 10,
                  },
                }}
              >
                <div className="title">
                  <Typography
                    component="h1"
                    fontWeight="700"
                    fontSize={"28px"}
                    color="#00527E"
                    marginTop={5}
                  >
                    Our Vision
                  </Typography>
                </div>
                <div className="description">
                  <Typography
                    sx={{ p: 2, letterSpacing: ".5px" }}
                    component="h1"
                    variant="h6"
                    fontWeight="300"
                    fontSize={"20px"}
                    textAlign="center"
                    color="#000000"
                  >
                    To create an inclusive and sustainable community where
                    independence is valued and differences are celebrated.
                  </Typography>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  minHeight: "300px",
                  borderRadius: "0px 0px 0px 0px",
                  background: "#fff",
                  mb: 5,

                  "&:hover": {
                    background: "#fff",
                    transition: ".5s",
                    boxShadow: 10,
                  },
                }}
              >
                <div className="title">
                  <Typography
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"28px"}
                    color="#00527E"
                    marginTop={5}
                  >
                    Our Mission
                  </Typography>
                </div>
                <div className="description">
                  <Typography
                    sx={{ p: 2, letterSpacing: ".5px" }}
                    component="h1"
                    variant="h6"
                    fontWeight="300"
                    fontSize={"20px"}
                    textAlign="center"
                    color="#000000"
                  >
                    To value each participant and team member, and to be fair
                    and ethical in everything we do.
                  </Typography>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  minHeight: "300px",
                  borderRadius: "0px 10px 10px 0px",
                  background: "#fff",
                  mb: 0,

                  "&:hover": {
                    background: "#fff",
                    transition: ".5s",
                    boxShadow: 10,
                  },
                }}
              >
                <div className="title">
                  <Typography
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"28px"}
                    color="#00527E"
                    marginTop={5}
                  >
                    Our Goal
                  </Typography>
                </div>
                <div className="description">
                  <Typography
                    sx={{ p: 2, letterSpacing: ".5px" }}
                    component="h1"
                    variant="h6"
                    fontWeight="300"
                    fontSize={"20px"}
                    textAlign="center"
                    color="#000000"
                  >
                    To provide the best possible support in a sensitive,
                    dignified and respectful way, with the aim of helping
                    participants achieve their goals and enrich their lives.
                  </Typography>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box></Container>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item elevation={0}>
                <Typography
                  sx={{
                    color: "#008ED9",
                    textAlign: "left",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  What distinguishes us from other organisations?
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: 2,
                    color: "#303030",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                > Flexibility:
                  <Typography sx={{
                    textAlign: "left",
                    mt: 2,
                    color: "#303030",
                    fontSize: "20px",
                    lineHeight: 1.6,
                    letterSpacing: ".5px",
                  }}>
                    Allowing you to hire workers as needed This can
                    be helpful on last minute cancellation or need additional
                    help in special circumstances.
                  </Typography>{" "}
                  <br />
                  Cost-effective:
                  <Typography sx={{
                    textAlign: "left",
                    mt: 2,
                    color: "#303030",
                    fontSize: "20px",
                    lineHeight: 1.6,
                    letterSpacing: ".5px",
                  }}>
                    Hiring temporary workers can be more cost-
                    effective than hiring full-time employees. This is because
                    you only pay for the hours worked, and there are employment.
                  </Typography>{" "}
                  <br />
                  Access to skilled workers:
                  <Typography sx={{
                    textAlign: "left",
                    mt: 2,
                    color: "#303030",
                    fontSize: "20px",
                    lineHeight: 1.6,
                    letterSpacing: ".5px",
                  }}>
                    When you use labour hire, you
                    have access to a pool of skilled workers. This can be
                    helpful if you need workers with specific skills or
                    experience.
                  </Typography>
                </Typography>{" "}
                <br />
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: 2,
                    color: "#303030",
                    fontSize: "20px",
                    lineHeight: 1.6,
                    letterSpacing: ".5px",
                  }}
                >
                  NDW was founded in 2021 with a simple goal: to provide
                  staffing solutions that make life easier for aged care and
                  disability service providers, as well as NDIS participants who
                  are self-managed or plan managed. We believe that everyone
                  deserves the best possible care, and our team of professional
                  staff work tirelessly to make sure that our clients have
                  access to the best people for the job. <br /> <br /> Whether
                  you're looking for short-term or long-term staffing solutions,
                  NDW has you covered - so get in touch today and see how we can
                  help you take your business to the next level.
                </Typography>
              </Item>
            </Grid>
            {/* dekstop view */}
            <Grid sx={{ display: { xs: "none", md: "block", } }} item xs={12} md={6}>
              <Item
                elevation={0}
                sx={{



                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "end",
                  width: '100%',
                  height: "98%",
                }}
              >
                <img
                  src={Group1}
                  alt=""
                  style={{ objectFit: "contain", mt: 0, width: "70%" }}
                />{" "}
                <br />
                <img
                  src={Group2}
                  alt=""
                  style={{ objectFit: "contain", mt: 0, width: "70%" }}
                />
              </Item>
            </Grid>
            {/* mobile view */}
            <Grid sx={{ display: { xs: "block", md: "none", } }} item xs={12} md={6}>
              <Item
                elevation={0}
                sx={{

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: '100%',
                  height: "98%",
                }}
              >
                <img
                  src={Group1}
                  alt=""
                  style={{ objectFit: "contain", mt: 0, width: "70%" }}
                />{" "}
                <br />
                <img
                  src={Group2}
                  alt=""
                  style={{ objectFit: "contain", mt: 0, width: "70%" }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box></Container>

      <Box sx={{ flexGrow: 1, mt: 15, background: "#fff" }}>
        <Container>
          <Grid container spacing={2}>
            {/* Dekstop view */}
            <Grid sx={{ display: { xs: "none", md: "block", } }} item xs={12} md={6}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  background: "#fff",
                  flexDirection: "column",
                  height: "98%",
                  justifyContent: "center",
                  width: "100%",

                  alignItems: "start",
                }}
              >
                <Box></Box>
                <img
                  src={Group3}
                  alt=""
                  style={{ objectFit: "contain", mt: 0, width: "70%" }}
                />{" "}
                <br />
                <img
                  src={Group4}
                  alt=""
                  style={{ objectFit: "contain", mt: 0, width: "70%" }}
                />
              </Item>
            </Grid>
            {/* mobile view */}
            <Grid sx={{ display: { xs: "block", md: "none", } }} item xs={12} md={6}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  background: "#fff",
                  flexDirection: "column",
                  height: "98%",
                  justifyContent: "center",
                  width: "100%",

                  alignItems: "center",
                }}
              >
                <Box></Box>
                <img
                  src={Group3}
                  alt=""
                  style={{ objectFit: "contain", mt: 0, width: "70%" }}
                />{" "}
                <br />
                <img
                  src={Group4}
                  alt=""
                  style={{ objectFit: "contain", mt: 0, width: "70%" }}
                />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item elevation={0} sx={{ mt: 0, background: "#fff" }}>
                <Typography
                  id="view"
                  sx={{
                    color: "#008ED9",
                    textAlign: "left",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  How we can Help
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: 2,
                    color: "#303030",
                    fontSize: "20px",
                    lineHeight: 1.6,
                    letterSpacing: ".5px",
                  }}
                >
                  We hire the most suitable support workers to suit the goals of
                  participants and providers. We are a fully integrated NDIS
                  provider in NSW for providing multiple services. This will
                  help us to provide even more fine-tuned solutions for Sydney’s
                  burgeoning disability industry. We also provide life skills,
                  staff development and training by qualified and experienced
                  trainers, and organisational development training.
                </Typography> <br />

                <Typography
                  sx={{
                    textAlign: "left",
                    mt: 2,
                    color: "#303030",
                    fontSize: "20px",
                  }}
                >
                  <li style={{ lineHeight: 1.6, letterSpacing: ".5px" }}>
                    Registered Nurses in the Community
                  </li>
                  <li style={{ lineHeight: 1.6, letterSpacing: ".5px" }}>
                    Registered Nurses in Hospitals (ICU / Midwives/ Theatre)
                  </li>
                  <li style={{ lineHeight: 1.6, letterSpacing: ".5px" }}>
                    Enrolled Nurses and EEN’s.
                  </li>
                  <li style={{ lineHeight: 1.6, letterSpacing: ".5px" }}>
                    Disability Support Workers
                  </li>
                  <li style={{ lineHeight: 1.6, letterSpacing: ".5px" }}>
                    Personal Support Workers
                  </li>
                  <li style={{ lineHeight: 1.6, letterSpacing: ".5px" }}>
                    Assistants In Nursing (AIN)
                  </li>
                  <li style={{ lineHeight: 1.6, letterSpacing: ".5px" }}>
                    Disability Team Leaders
                  </li>
                </Typography>
                <Typography
                  sx={{
                    color: "#008ED9",
                    textAlign: "left",
                    mt: 2,
                    fontWeight: "700",
                    fontSize: "25px",
                  }}
                >
                  The right fit for employers and clients!
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: 2,
                    color: "#303030",
                    fontSize: "20px",
                    pb: 10,
                    lineHeight: 1.6,
                    letterSpacing: ".5px",
                  }}
                >
                  The NDW team works with people to find employment that is
                  right for the individual and right for the employer. After
                  all, the right person in the right job means lasting
                  employment and transformed lives and businesses.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 2, background: "#008ED9" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  background: "#008ED9",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "30px",
                    m: 2,
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#ffffff",
                  }}
                >
                  With more flexibility comes more <br /> accountability and
                  transparency.
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.6,
                    letterSpacing: '.5px',
                    color: "#fff",
                    fontSize: "20px",
                    m: 2,
                    p: 2,
                    textAlign: "center",
                    fontWeight: "400",
                    color: "#ffffff",
                  }}
                >
                  We hire passionate, enthusiastic, friendly and reliable staff
                  with solid experience in disability or a related field. Our
                  managers have experience in the disability sector and we
                  understand that participants want support workers best suited
                  to their help them achieve their goals. We find the right
                  staff for you.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 10, mb: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Item elevation={0} sx={{ color: "#00527E", fontSize: "30px" }}>
              <h2>Latest News</h2>
            </Item>
          </Grid>
          <br />
        </Grid>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} sm={12} >
              <Item elevation={0} >
                <Post />
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
