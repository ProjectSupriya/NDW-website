import * as React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Navbar from "../Navbar";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
export default function FullWidthGrid() {
  return (
    <>
      <Navbar />
      <Box sx={{ m: 5 }}>
        <Typography
          sx={{ m: 2 }}
          component="h1"
          variant="h6"
          fontWeight="700"
          width={'100%'}
          fontSize={"25px"}
          color="#000000"
          textAlign={"center"}
        >
          Contact Admin for further training
        </Typography>
 <Container>
 <Grid sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}} container>
                    
                    <Grid item xs={12} md={2}>
                
                        <Typography
                          sx={{
                            display: "flex",
                            color: "#000000",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            p:1.2,
                          }}
                        >
                          <EmailIcon
                            sx={{ color: "#008ED9", fontSize: "20px" }}
                          />{" "}
                          
                          <a
                            style={{
                              color: "#000000",
                              fontSize: "17px",
                              textAlign: "left",
                              textDecoration: "none",
                              fontWeight: "500",
                            }}
                            href="mailto:admin@ndw.com"
                          >
                            admin@ndw.com
                          </a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                    <Typography
                          sx={{
                            display: "flex",
                            color: "#000000",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            
                          }}
                        >
                          <LocalPhoneIcon
                            sx={{
                              color: "#008ED9",
                              fontSize: "20px",
                              lineHeight: "25px",
                            }}
                          />{" "}
                         
                          <a
                            style={{
                              color: "#000000",
                              fontSize: "17px",
                              textAlign: "left",
                              textDecoration: "none",
                              fontWeight: "500",
                              textTransform: "capitalize",
                            }}
                            href="tel:1800 774 954"
                          >
                            1800 774 954
                          </a>
                        </Typography>
                    </Grid>
                  </Grid>
 </Container>
      </Box>
    </>
  );
}
