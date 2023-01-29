import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rightarrow from "../media/Group.png";
import Agedcare from "../media/Group 343.png";
import Ndis from "../media/Group 342.png";
import Disibilitysupportworker from "../media/Group 339.png";
import Nursing from "../media/Group 341.png";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",

  color: theme.palette.text.secondary,
}));

export const ourservicecard = () => {
  return (
    <>
      <section>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={12} md={12} sm={12} lg={12} xl={12}>
            <Typography
              component="h1"
              variant="h6"
              fontWeight="700"
              fontSize={"32px"}
              color="#005481"
            >
              Our Services
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ m: 5 }} >
          <Grid container  sx={{ mt: 10 }}>
            <Grid item xs={12} md={3} sx={{ height: "auto" }}>
              <Item 
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  
                  alignItems: "center",
                  minHeight: "350px",
                  borderRadius: "10px 0px 0px 10px",

                  p:1,
                  mb:10,
                  "&:hover": {
                    background: "#f1fbfb",
                    transition: ".5s",
                    boxShadow: 10,
                  },
                }}
              >
                <div className="card-icon">
                  <img
                    src={Agedcare}
                    alt=""
                    style={{ objectFit: "contain", maxWidth: "110px" }}
                  />
                </div>

                <div className="title">
                  <Typography
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"18px"}
                    color="#005481"
                  >
                    Aged Care
                  </Typography>
                </div>
                <div className="description">
                  <Typography
                    sx={{ p: 1 }}
                    component="h1"
                    variant="h6"
                    fontWeight="300"
                    fontSize={"16px"}
                    textAlign="center"
                    color="#000000"
                  >
                    Support to older people to help them with everyday living &
                    other needs<br/><br/>
                  </Typography>
                </div>
                <div
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      p: 1,
                      m: 1,
                      width: "180px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      fontSize: "19px",
                      color: "#008ED9",
                      "&:hover": {
                        color: "#008ED9",
                        transition: ".5s",

                        width: "180px",
                        fontWeight: "700",
                      },
                    }}
                    href="/our-services"
                  >
                    Explore More &nbsp; &nbsp;{""}
                    <img
                      src={Rightarrow}
                      alt=""
                      style={{ objectFit: "contain", mt: 0, width: "9%" }}
                    />
                  </Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={3}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "350px",
                 
                  borderRadius: "0px 0px 0px 0px",
                  p:1,
                  mb:10,
                  "&:hover": {
                    background: "#f1fbfb",
                    transition: ".5s",
                    boxShadow: 10,
                  },
                }}
              >
                <div className="card-icon">
                  <img
                    src={Ndis}
                    alt=""
                    style={{ objectFit: "contain", maxWidth: "110px" }}
                  />
                </div>
                <div className="title">
                  <Typography
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"18px"}
                    color="#005481"
                  >
                    NDIS
                  </Typography>
                </div>
                <div className="description">
                  <Typography
                    sx={{ p: 1 }}
                    component="h1"
                    variant="h6"
                    fontWeight="300"
                    fontSize={"16px"}
                    textAlign="center"
                    color="#000000"
                  >
                    Support people with a permanent & significant disability by
                    implementing National Disability Insurance Scheme
                  </Typography>
                </div>
                <div
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      p: 1,
                      m: 1.5,
                      width: "180px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      fontSize: "19px",
                      color: "#008ED9",
                      "&:hover": {
                        color: "#008ED9",
                        transition: ".5s",

                        width: "180px",
                        fontWeight: "700",
                      },
                    }}
                    href="/our-services"
                  >
                    Explore More &nbsp; &nbsp;{" "}
                    <img
                      src={Rightarrow}
                      alt=""
                      style={{ objectFit: "contain", mt: 0, width: "9%" }}
                    />
                  </Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={3}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "350px",
                  borderRadius: "0px 0px 0px 0px",
                  p:1,
                  mb:10,

                  "&:hover": {
                    background: "#f1fbfb",
                    transition: ".5s",
                    boxShadow: 10,
                  },
                }}
              >
                <div className="card-icon">
                  <img
                    src={Disibilitysupportworker}
                    alt=""
                    style={{ objectFit: "contain", maxWidth: "110px" }}
                  />
                </div>
                <div className="title">
                  <Typography
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"18px"}
                    color="#005481"
                    textAlign={"center"}
                  >
                    Disability Support Worker
                  </Typography>
                </div>
                <div className="description">
                  <Typography
                    sx={{ p: 1 }}
                    component="h1"
                    variant="h6"
                    fontWeight="300"
                    fontSize={"16px"}
                    textAlign="center"
                    color="#000000"
                  >
                     Provide care, emotional support, physical assistance &
                    supervision to aged people & people with disability
                  </Typography>
                </div>
                <div
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      p: 1,
                      m: 1.5,
                      width: "180px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      fontSize: "19px",
                      color: "#008ED9",
                      "&:hover": {
                        color: "#008ED9",
                        transition: ".5s",

                        width: "180px",
                        fontWeight: "700",
                      },
                    }}
                    href="/our-services"
                  >
                    Explore More &nbsp; &nbsp;{" "}
                    <img
                      src={Rightarrow}
                      alt=""
                      style={{ objectFit: "contain", mt: 0, width: "9%" }}
                    />
                  </Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={3}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "350px",
                  borderRadius: "0px 10px 10px 0px",
                  p:1,
                  mb:0,

                  "&:hover": {
                    background: "#f1fbfb",
                    transition: ".5s",
                    boxShadow: 10,
                  },
                }}
              >
                <div className="card-icon">
                  <img
                    src={Nursing}
                    alt=""
                    style={{ objectFit: "contain", maxWidth: "110px" }}
                  />
                </div>

                <div className="title">
                  <Typography
                    component="h1"
                    variant="h6"
                    fontWeight="700"
                    fontSize={"18px"}
                    color="#005481"
                  >
                    Nursing
                  </Typography>
                </div>
                <div className="description">
                  <Typography
                    sx={{ p: 1 }}
                    component="h1"
                    variant="h6"
                    fontWeight="300"
                    fontSize={"16px"}
                    textAlign="center"
                    color="#000000"
                  >
                   Monitor health & wellbeing, record medical history & perform
                    diagnostic tests of aged people & people with disability
                  </Typography>
                </div>
                <div
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      p: 1,
                      m: 1.5,
                      width: "180px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      fontSize: "19px",
                      color: "#008ED9",
                      "&:hover": {
                        color: "#008ED9",
                        transition: ".5s",

                        width: "180px",
                        fontWeight: "700",
                      },
                    }}
                    href="/our-services"
                  >

                    Explore More &nbsp; &nbsp;{" "}
                    <img
                      src={Rightarrow}
                      alt=""
                      style={{ objectFit: "contain", mt: 0, width: "9%" }}
                    />
                  </Button>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};
export default ourservicecard;
