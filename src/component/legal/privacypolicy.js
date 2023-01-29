import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";
import { Container, Typography } from "@mui/material";
import Footer from "../footer";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#E5F4FB",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  export default function PrivacyPolicy() {
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
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
                   Privacy Policy  
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
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                    NDW  is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information. 

We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information. 

A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at www.aoic.gov.au 
                  </Typography>
                </Item>
              </Grid></Container>  
              <Container>
              <Grid item xs={12} md={12}>
                <Item elevation={0}>
                  <Typography
                    sx={{mt:5,
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
                  What is Personal Information and why do we collect it?   
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
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                    Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include: names, addresses, email addresses, phone and facsimile numbers. 
                    <br/>
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "bold",
                    }}
                  ><br/>
                  This Personal Information is obtained in many ways including  [<b>interviews, correspondence, by telephone and facsimile, by email, via our website www.yourbusinessname.com.au, from your website, from media and publications, from other publicly available sources, from cookies- delete all that aren’t applicable</b>] 
                   and from third parties. We don’t guarantee website links or policy of authorised third parties. 
                    
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "500",
                    }}
                  >
                     
<br/>
We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing. 

When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it. 
                    
                  </Typography>
                </Item>
              </Grid></Container>          
              <Container>
              <Grid item xs={12} md={12}>
                <Item elevation={0}>
                <Typography
                    sx={{mt:5,
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
                   Sensitive Information 
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                   Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information. 
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                  <br/>
                  Sensitive information will be used by us only: 
                  <li>For the primary purpose for which it was obtained </li>
                  <li>For a secondary purpose that is directly related to the primary purpose </li>
                  <li>With your consent; or where required or authorised by law. </li>
                  </Typography>
                  <Typography
                    sx={{mt:10,
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
                   Third Parties 
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                   Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.
                  </Typography>
                  <Typography
                    sx={{mt:10,
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
                  Disclosure of Personal Information 
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                  
                  Your Personal Information may be disclosed in a number of circumstances including the following: 
                  <li>Third parties where you consent to the use or disclosure; and </li>
                  <li>Where required or authorised by law</li>
                  
                  </Typography>
                  <Typography
                    sx={{mt:10,
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
                 Security of Personal Information 
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                  
                  Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure. <br/>
<br/>
When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years. 
                  
                  </Typography>
                  <Typography
                    sx={{mt:5,
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
                 Access to your Personal Information 
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                  
                  You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing. 
<br/>
<br/>
NDW will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information. 
<br/><br></br>
In order to protect your Personal Information we may require identification from you before releasing the requested information. 
                  </Typography>
                  <Typography
                    sx={{mt:5,
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
                Maintaining the Quality of your Personal Information 
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                  
                  It is an important to us that your Personal Information is up to date. We  will  take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you. 
                  </Typography>
                  <Typography
                    sx={{mt:5,
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
               Policy Updates 
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                  
                  This Policy may change from time to time and is available on our website. 
                  </Typography>
                  <Typography
                    sx={{mt:5,
                      color: "#000000",
                      textAlign: "left",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
              Privacy Policy Complaints and Enquiries 
                  </Typography>
                  <Typography
                    sx={{mb:5,
                      color: "#303030",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                      letterSpacing: ".5px",
                      lineHeight: 1.6,
                      fontWeight: "Regular",
                    }}
                  >
                  
                  If you have any queries or complaints about our Privacy Policy please contact us at: 
                  <br/><br/>
                  <b>NDW Pty Ltd </b><br/>
                  <a href = "mailto:admin@ndw.net.au">admin@ndw.net.au</a><br/> 
                  <a href= "tel:1800 774 954"> 1800 774 954</a> 

                  </Typography>
                </Item>
              </Grid></Container>          
            </Grid>
          </Box> 
        <Footer />
      </>
    );
  }