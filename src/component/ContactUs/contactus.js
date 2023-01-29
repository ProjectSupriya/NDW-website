import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Footer from "../footer";
import Navbar from "../Navbar";
import Contactusbanner from "../media/Rectangle 274.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as yup from 'yup';
import { useFormik, ErrorMessage } from 'formik';
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from 'react-redux';
import {
  createUser, selectUser
} from '../../features/user/userSlice';
import axios from "axios";
import Swal from "sweetalert";

const API_URL = process.env.REACT_APP_API_URL;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {

  const [issubmit, setIsSubmit] = React.useState(false);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = yup.object({
    firstName: yup
      .string('Enter your firtstname')
      .required('First name is required'),
    message: yup
      .string('Enter your message')
      .required('message is required'),
    lastName: yup
      .string('Enter your last name')
      //.min(8, 'Password should be of minimum 8 characters length')
      .required('Last name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    phone: yup.
      string()
      .required("required")
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "10 digit number required")
      .max(10, "10 digit number required"),
    //.min(10, "to short")
    // .max(10, "to long")


  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
      //userType: userTypeId
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      axios.post(`${API_URL}/services/contact`, values)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            setIsSubmit(true);
            //alert("thank you for contact with us");
            Swal({
              position: "center",
              icon: "success",
              title: 'Thank you for contact with us',
              button: true,
              allowOutsideClick: true,
            });
            formik.resetForm();
            //setUserData(values);
            // dispatch(createUser(values));
          } else {
            Swal({
              position: "center",
              icon: "error",
              title: response.data.message,
              button: true,
              allowOutsideClick: true,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      //alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Navbar />
      <div className="head-text">
        <div className="head-image">
          <img
            src={Contactusbanner}
            alt=""
            style={{ objectFit: "contain", mt: 0, width: "100%" }}
          />
        </div>
        <div className="center-text6">
          <h1> Get In Touch </h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          {/* Dekstop view */}
          <Box sx={{ mt: 0, zIndex: "-1000", mt: -10, mb: 4, display: { xs: "none", md: "block", } }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Container>
                  <Item sx={{ borderRadius: "20px" }}>
                    <Box
                      sx={{ m: 4 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "700",
                          color: "#303030",
                          ml: 1,
                        }}
                      >
                        Fill up the form and our team will get back to you
                        within 24 hours.
                      </Typography>
                      <Grid container spacing={2} sx={{ mt: 5 }}>
                        <Grid item xs={12} md={6}>
                          <Typography
                            sx={{
                              fontsize: "20px",
                              color: "#000000",
                              fontWeight: "700",
                              p: 1,
                            }}
                          >
                            {" "}
                            First Name<span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          <Item elevation={0}>
                            <Box
                              sx={{
                                width: 1000,
                                maxWidth: "100%",
                                background: "#fff ",
                                border: "0",
                                outline: "none",
                              }}
                            >
                              <TextField
                                fullWidth
                                id="outlined-basic"
                                placeholder="First Name"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName} />
                              {/* <OutlinedInput
                              fullWidth
                              placeholder="First Name"
                            /> */}
                            </Box>
                          </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography
                            sx={{
                              fontsize: "20px",
                              color: "#000000",
                              fontWeight: "700",
                              p: 1,
                            }}
                          >
                            {" "}
                            Last Name<span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          <Item elevation={0}>
                            <Box
                              sx={{
                                width: 1000,
                                maxWidth: "100%",
                                background: "#fff ",
                                border: "0",
                                outline: "none",
                              }}
                            >
                              {/* <OutlinedInput
                              fullWidth
                              placeholder="Last Name"
                            /> */}
                              <TextField
                                fullWidth
                                id="outlined-basic"
                                placeholder="Last Name"
                                name="lastName"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                              />
                            </Box>
                          </Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Typography
                            sx={{
                              fontsize: "20px",
                              color: "#000000",
                              fontWeight: "700",
                              p: 1,
                            }}
                          >
                            {" "}
                            Email<span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          <Item elevation={0}>
                            <Box
                              sx={{
                                width: 1000,
                                maxWidth: "100%",
                                background: "#fff ",
                                border: "0",
                                outline: "none",
                              }}
                            >
                              {/* <OutlinedInput fullWidth placeholder="Email" /> */}
                              <TextField
                                fullWidth
                                id="outlined-basic"
                                placeholder="Email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                              />
                            </Box>
                          </Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Typography
                            sx={{
                              fontsize: "20px",
                              color: "#000000",
                              fontWeight: "700",
                              p: 1,
                            }}
                          >
                            {" "}
                            Phone Number<span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          <Item elevation={0}>
                            <Box
                              sx={{
                                width: 1000,
                                maxWidth: "100%",
                                background: "#fff ",
                                border: "0",
                                outline: "none",
                              }}
                            >
                              {/* <OutlinedInput
                              fullWidth
                              placeholder="Phone Number"
                            /> */}
                              <TextField
                                fullWidth
                                id="outlined-basic"
                                placeholder="Phone Number"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                              />
                            </Box>
                          </Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Typography
                            sx={{
                              fontsize: "20px",
                              color: "#000000",
                              fontWeight: "700",
                              p: 1,
                            }}
                          >
                            {" "}
                            Your Message<span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          <Item elevation={0}>
                            <Box
                              sx={{
                                width: 1000,
                                maxWidth: "100%",
                                height: "100%",
                                background: "#fff ",
                                border: "0",
                                outline: "none",
                              }}
                            >
                              {/* <OutlinedInput
                              sx={{ paddingBottom: "120px" }}
                              fullWidth
                              placeholder="Message"
                            /> */}
                              <TextField
                                fullWidth
                                id="outlined-basic"
                                multiline
                                rows={8}
                                //maxRows={Infinity}
                                maxRows={8}
                                placeholder="Message"
                                name="message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message}
                              />
                            </Box>
                          </Item>
                          <Item
                            elevation={0}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              mt: 5,
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              size="large"
                              type="submit"
                              sx={{
                                background: "#008ED9",
                                textTransform: "capitalize",
                                fontsize: "25px",
                                fontWeight: "600",
                                height: "3.5em",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                width: "180px",
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
                              Submit
                            </Button>
                          </Item>
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>

                  <Grid sx={{ display: 'flex', mt: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} container>
                    <Grid item xs={12} md={2}>
                      <Typography
                        sx={{
                          color: "#303030",
                          textAlign: "center",
                          fontWeight: "700",
                          fontsize: "22px",
                          p: 1,
                        }}
                      >
                        Connect with us on
                      </Typography>
                    </Grid> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Grid item xs={12} md={1}>

                      <Typography
                        sx={{
                          display: "flex",
                          color: "#000000",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          p: 1,
                        }}
                      >
                        <EmailIcon
                          sx={{ color: "#008ED9", fontSize: "20px" }}
                        />{" "} &nbsp;&nbsp;

                        <a
                          style={{
                            color: "#000000",
                            fontSize: "17px",
                            textAlign: "left",
                            textDecoration: "none",
                            fontWeight: "500",
                          }}
                          href="mailto:admin@ndw.net.au"
                        >
                          admin@ndw.net.au
                        </a>
                      </Typography>
                    </Grid>&nbsp; &nbsp;&nbsp;&nbsp;
                    <Grid item xs={12} md={2}>
                      <Typography
                        sx={{
                          display: "flex",
                          color: "#000000",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          p: 1,
                        }}
                      >
                        <LocalPhoneIcon
                          sx={{
                            color: "#008ED9",
                            fontSize: "20px",
                            lineHeight: "25px",
                          }}
                        />{" "}&nbsp;&nbsp;

                        <a
                          style={{
                            color: "#000000",
                            fontSize: "17px",
                            textAlign: "left",
                            textDecoration: "none",
                            fontWeight: "500",
                            textTransform: "capitalize",
                          }}
                          href="tel:
                          1800 774 954"
                        >        1800 774 954
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Box>
        </form>
        {/* mobile view */}
        <Box sx={{ mt: 0, zIndex: "-1000", mt: -5, mb: 4, display: { xs: "block", md: "none", } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Container>
                <Item sx={{ borderRadius: "20px" }}>
                  <Box
                    sx={{ m: 4 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#303030",
                        ml: 1,
                      }}
                    >
                      Fill up the form and our team will get back to you
                      within 24 hours.
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 5 }}>
                      <Grid item xs={12} md={6}>
                        <Typography
                          sx={{
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 1,
                          }}
                        >
                          {" "}
                          First Name*
                        </Typography>
                        <Item elevation={0}>
                          <Box
                            sx={{
                              width: 1000,
                              maxWidth: "100%",
                              background: "#fff ",
                              border: "0",
                              outline: "none",
                            }}
                          >
                            <OutlinedInput
                              fullWidth
                              placeholder="First Name"
                            />
                          </Box>
                        </Item>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          sx={{
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 1,
                          }}
                        >
                          {" "}
                          Last Name*
                        </Typography>
                        <Item elevation={0}>
                          <Box
                            sx={{
                              width: 1000,
                              maxWidth: "100%",
                              background: "#fff ",
                              border: "0",
                              outline: "none",
                            }}
                          >
                            <OutlinedInput
                              fullWidth
                              placeholder="Last Name"
                            />
                          </Box>
                        </Item>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography
                          sx={{
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 1,
                          }}
                        >
                          {" "}
                          Email*
                        </Typography>
                        <Item elevation={0}>
                          <Box
                            sx={{
                              width: 1000,
                              maxWidth: "100%",
                              background: "#fff ",
                              border: "0",
                              outline: "none",
                            }}
                          >
                            <OutlinedInput fullWidth placeholder="Email" />
                          </Box>
                        </Item>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography
                          sx={{
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 1,
                          }}
                        >
                          {" "}
                          Phone Number*
                        </Typography>
                        <Item elevation={0}>
                          <Box
                            sx={{
                              width: 1000,
                              maxWidth: "100%",
                              background: "#fff ",
                              border: "0",
                              outline: "none",
                            }}
                          >
                            <OutlinedInput
                              fullWidth
                              placeholder="Phone Number"
                            />
                          </Box>
                        </Item>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography
                          sx={{
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 1,
                          }}
                        >
                          {" "}
                          Your Message*
                        </Typography>
                        <Item elevation={0}>
                          <Box
                            sx={{
                              width: 1000,
                              maxWidth: "100%",
                              height: "100%",
                              background: "#fff ",
                              border: "0",
                              outline: "none",
                            }}
                          >
                            <OutlinedInput
                              sx={{ paddingBottom: "120px" }}
                              fullWidth
                              placeholder="Message"
                            />
                          </Box>
                        </Item>
                        <Item
                          elevation={0}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mt: 5,
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            size="large"
                            sx={{
                              background: "#008ED9",
                              textTransform: "capitalize",
                              fontsize: "25px",
                              fontWeight: "600",
                              height: "3.5em",
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              width: "180px",
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
                            Submit
                          </Button>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>

                <Grid sx={{ display: 'flex', mt: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} container>
                  <Grid item xs={12} md={2}>
                    <Typography
                      sx={{
                        color: "#303030",
                        textAlign: "center",
                        fontWeight: "700",
                        fontsize: "22px",
                        p: 1,
                      }}
                    >
                      Connect with us on
                    </Typography>
                  </Grid> &nbsp;&nbsp;&nbsp;&nbsp;
                  <Grid item xs={12} md={1}>

                    <Typography
                      sx={{
                        display: "flex",
                        color: "#000000",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 1,
                      }}
                    >
                      <EmailIcon
                        sx={{ color: "#008ED9", fontSize: "20px" }}
                      />{" "} &nbsp;&nbsp;

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
                  </Grid>&nbsp; &nbsp;
                  <Grid item xs={12} md={2}>
                    <Typography
                      sx={{
                        display: "flex",
                        color: "#000000",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 1,
                      }}
                    >
                      <LocalPhoneIcon
                        sx={{
                          color: "#008ED9",
                          fontSize: "20px",
                          lineHeight: "25px",
                        }}
                      />{" "}&nbsp;&nbsp;

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
            </Grid>
          </Grid>
        </Box>
      </div>

      <Footer />
    </>
  );
}
