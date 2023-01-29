//import * as React from "react";
import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./component/Home_page_layout/homepage";
import ViewAllJob from "./component/Job Search/viewjob";
import Search from "./component/Search-Results/Search-results";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import JobSearch from "./component/Job Search/job-search";
import JobDetails from "./component/job Details/View-Job";
import SignIn from "./component/sign in/signin";
import Signup from "./component/Signup/signup";
import FormSubmit from "./component/Signup/formsubmit";
import ProfileSetupFirst from "./component/profilesetup/ProfileSetupFirst";
import Client from "./component/client/clientsignup";
import ProfileSetupSecound from "./component/profilesetup/ProfileSetupSecound";
import ProfileSetupThird from "./component/profilesetup/ProfileSetupThird";
import ProfileSetupFour from "./component/profilesetup/ProfileSetupFour";
import AboutUs from "./component/About/about_us";
import ContactUs from "./component/ContactUs/contactus";
import Training from "./component/Training/Training";
import OurServices from "./component/ourservice/our-services";
import Course from "./component/Training/course";
import ClientSignupForm from "./component/client/clientsignupsubmit";
import { Container, Typography } from "@mui/material";
import MyAccount from "./component/Account/myaccount";
import NurseSubmitfirst from "./component/Registernurseprofilesetup/first-setup-nurse";
import FirstNurseSetup from "./component/Signup/nursesignup";
import NurseSignup from "./component/Signup/nursesignup";
import SecoundNurseSetUp from "./component/Registernurseprofilesetup/secound-setup-nurse";
import ThirdNurseSetup from "./component/Registernurseprofilesetup/third-setup-nurse";
import FourNurseSetup from "./component/Registernurseprofilesetup/four-setup-nurse";
import NoJobFound from "./component/Job Search/nojobfound";
import ForgotPassword from "./component/forgotpassword/forgotpassword";
import ResetPassword from "./component/forgotpassword/resetpassword";
import ScrollTop from "./component/scrolltop";
import LoginHomepage from "./component/Home_page_layout/loginhompage";
import PrivacyPolicy from "./component/legal/privacypolicy";
import Terms from "./component/legal/termandconditions";

const theme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
  },
  
});
function App() {

  var user = localStorage.getItem('userObject');
  const [isUser, setIsUser] = useState(user !== 'undefined' && user !== null ? true : false);
  console.log("user", isUser);
  const Test = () => (
    <>
      <Container
        sx={{
          textAlign: "center",
          mt: 10,
          backgroundColor: "rgb(253, 237, 237)",
        }}
      >
        <div>
          <Typography sx={{ fontSize: "30px" }} severity="error" color="error">
            404 - Page Not Found
          </Typography>
        </div>
      </Container>
    </>
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ScrollTop />
        <Routes>
          {console.log("step=", user?.signupStep)}
          {/* <Route path="/" element={<LoginHomepage />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="NurseSignup" element={<NurseSignup />} />
          <Route path="search" element={<Search />} />
          <Route path="job-details" element={<JobDetails />} />
          <Route path="no-job-found" element={<NoJobFound />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="job-search" element={<JobSearch />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<Signup />} />
          {/* <Route path="my-account" element={<MyAccount />} /> */}
          <Route path="my-account" element={
            isUser ? <MyAccount /> : <Navigate to="/sign-in" />

          } />
          <Route path="form-submit" element={<FormSubmit />} />
          <Route path="profile-setup-first" element={<ProfileSetupFirst />} />
          <Route path="client" element={<Client />} />
          <Route
            path="profile-setup-secound"
            element={<ProfileSetupSecound />}
          />
          <Route path="profile-setup-third" element={<ProfileSetupThird />} />
          <Route path="profile-setup-four" element={<ProfileSetupFour />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="training" element={<Training />} />
          <Route path="our-services" element={<OurServices />} />
          <Route path="course" element={<Course />} />
          <Route path="ClientSignupForm" element={<ClientSignupForm />} />
          <Route path="nurse-submit-first" element={<NurseSubmitfirst />} />
          <Route path="FirstNurseSetup" element={<FirstNurseSetup />} />
          <Route path="SecoundNurseSetUp" element={<SecoundNurseSetUp />} />
          <Route path="ThirdNurseSetup" element={<ThirdNurseSetup />} />
          <Route path="FourNurseSetup" element={<FourNurseSetup />} />
          <Route path="*" element={<Test />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword/:token/:id" element={<ResetPassword />} />
          <Route path="viewalljob" element={<ViewAllJob />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="terms&conditions" element={<Terms />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
