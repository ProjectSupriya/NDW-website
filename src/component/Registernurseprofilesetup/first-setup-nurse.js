import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../sign in/headerlogo.png";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Date from "../profilesetup/date";
import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  let navigate = useNavigate();
  function ProfileSetupNurseSecound() {
    navigate("/SecoundNurseSetUp");
    console.log("navigate", navigate);
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ background: "#E5F4FB" }} item xs={12} md={12}>
          <Box
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
            }}
          >
            <img
              src={Logo}
              alt=""
              style={{ objectFit: "contain", mt: 0, width: "80px" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Paper elevation={0} sx={{ backgroundColor: "#fff", mb: 3 }}>
        <Box

        >
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    m: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "25px",
                      color: "black",
                      fontWeight: "700",
                      color: "#00527E",
                    }}
                  >
                    Please complete your account setup by providing <br />{" "}
                    following details
                  </Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "18px", color: "black", fontWeight: "500" }}
                  >
                    Step 1 / 4
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    First Name*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    Middle Name*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    Last Name*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    Email*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    Phone Number*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    Date
                  </Typography>
                  <Date />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    Address Line 1
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    Address Line 2
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    State
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 1,
                    }}
                  >
                    Postcode
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Item
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  width: 100,
                  maxWidth: 100,
                  p: 3,
                }}
              >
                <Button
                  onClick={ProfileSetupNurseSecound}
                  size="large"
                  sx={{
                    background: "#008ED9",
                    p: 2,
                    textTransform: "capitalize",
                    fontsize: "30px",
                    fontWeight: "600",
                    height: "3.5em",
                    display: "flex",
                    width: '100%',
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                    color: "#fff",
                    "&:hover": {
                      background: "#ffffff",
                      transition: ".5s",
                      color: '#008ED9',
                      border: 3,
                      borderColor: '#008ED9',
                      boxShadow: 10,
                    },
                  }}
                  autoFocus
                >
                  Next
                </Button>
              </Box>
            </Item>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
