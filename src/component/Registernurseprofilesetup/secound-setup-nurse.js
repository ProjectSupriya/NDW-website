import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Logo from "../sign in/headerlogo.png";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));


export default function BasicTextFields() {
  let navigate = useNavigate();
  function Pre() {
    navigate("/nurse-submit-first");
    console.log("navigate", navigate);
  }
  function Next() {
    navigate("/ThirdNurseSetup");
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
        <Box sx={{ flexGrow: 1, mt: 5, width: "100%" }}>
          <Paper elevation={0} sx={{ backgroundColor: "#fff", mb: 3 }}>
            <Box
              
            >
              <Grid container spacing={0}>
                <Grid item xs={12} md={12}>
                  <Item
                    elevation={0}
                    sx={{
                      display: "flex",
                      p: 5,
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
                        sx={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "500",
                        }}
                      >
                        Step 2 / 4
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
                        sx={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "600",
                        }}
                      >
                        Employee ID: 12345
                      </Typography>
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
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      NDIS Induction or Infection Control
                    </Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid container spacing={2}></Grid>
              <Grid item xs={12} md={12}>
                <Item
                  elevation={3}
                  sx={{
                    display: "flex",
                    mt: 3,
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
                    <input type="file" multiple class="choose"></input>
                    <Button
                      sx={{
                        background: "#01C1EB",
                        fontSize: "18px",
                        textTransform: "capitalize",
                        width: "150px",
                        color: "#ffffff",
                        fontWeight: "600",
                        "&:hover": {
                          background: "#01C1EB",
                          transition: ".5s",
                          boxShadow: 10,
                        },
                      }}
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    mt: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 1000,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      Passport size photo
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={3}
                  sx={{
                    display: "flex",
                    mt: 3,
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
                   <input type="file" multiple class="choose"></input>
                    <Button
                      sx={{
                        background: "#01C1EB",
                        fontSize: "18px",
                        textTransform: "capitalize",
                        width: "150px",
                        color: "#ffffff",
                        fontWeight: "600",
                        "&:hover": {
                          background: "#01C1EB",
                          transition: ".5s",
                          boxShadow: 10,
                        },
                      }}
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    mt: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 1000,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      First Aid Certificate
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={3}
                  sx={{
                    display: "flex",
                    mt: 3,
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
                   <input type="file" multiple class="choose"></input>
                    <Button
                      sx={{
                        background: "#01C1EB",
                        fontSize: "18px",
                        textTransform: "capitalize",
                        width: "150px",
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#ffffff",
                        fontWeight: "600",
                        "&:hover": {
                          background: "#01C1EB",
                          transition: ".5s",
                          boxShadow: 10,
                        },
                      }}
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    mt: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 1000,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      WWC (Working with Children Check)
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={3}
                  sx={{
                    display: "flex",
                    mt: 3,
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
                   <input type="file" multiple class="choose"></input>
                    <Button
                      sx={{
                        background: "#01C1EB",
                        width: "150px",
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#ffffff",
                        fontWeight: "600",
                        "&:hover": {
                          background: "#01C1EB",
                          transition: ".5s",
                          boxShadow: 10,
                        },
                      }}
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    mt: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 1000,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      AFP Police Clearance
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={3}
                  sx={{
                    display: "flex",
                    mt: 3,
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
                   <input type="file" multiple class="choose"></input>
                    <Button
                      sx={{
                        background: "#01C1EB",
                        width: "150px",
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#ffffff",
                        fontWeight: "600",
                        "&:hover": {
                          background: "#01C1EB",
                          transition: ".5s",
                          boxShadow: 10,
                        },
                      }}
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12} sx={{ mt: 5 }}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignSelf: "flex-end",
                    justifyContent: "flex-end",
                   
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    onClick={Pre}
                    sx={{
                      mb:3,
                      fontSize: "18px",
                      textTransform: "capitalize",
                      width: "150px",
                      border: 1,
                      fontSize: "18px",
                    }}
                  >
                    Previous
                  </Button> &nbsp;&nbsp;
                  <Button
                    onClick={Next}
                    sx={{
                     mb:3,
                      width: "150px",
                      textTransform: "capitalize",
                      color: "#fff",
                      fontSize: "18px",
                      backgroundColor: "#008ED9",
                      "&:hover": {
                        background: "#ffffff",
                        color: "#008ED9",
                        border: 3,
                        borderColor: "#008ED9",
                        transition: ".5s",
                        boxShadow: 10,
                      },
                    }}
                  >
                    Next
                  </Button>
                </Item>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Container>
  );
}
