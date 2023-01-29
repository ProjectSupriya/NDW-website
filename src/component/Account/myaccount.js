import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Profile from "./profile";
import Documents from "./document";
import Password from "./password";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Typography
          sx={{
            mt: 10,
            mb: 8,
            fontWeight: "700",
            color: "#00527E",
            fontSize: "40px",
          }}
        >
          My Account
        </Typography>
      </Container>

      <Container sx={{ mt: 10, mb: 10 }}>
        <Box sx={{ width: "100%" }}>
          <Paper
            sx={{ width: "100%", borderRadius: "50px", mb: 2 }}
            elevation={10}
          >
            <Box
              sx={{
                p: 2,
                borderBottom: 1,
                borderColor: "divider",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                backgroundColor: "#008ED9",
              }}
            >
              <Grid item xs={12} md={12}>
                <Tabs
                  sx={{
                    display: "flex",
                    width: '100%',
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    
                  }}
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  textColor="inherit"
                  indicatorColor="main"
                  variant="scrollable"
                >
                  <Tab
                    sx={{
                      fontSize: "20px",
                      color: "#ffffff",
                      m: 1,
                      borderRadius: 1,
                      width: "auto",
                      textTransform: "capitalize",
                    }}
                    label=" Profile"
                    {...a11yProps(0)}
                  />

                  <Tab
                    sx={{
                      fontSize: "20px",
                      color: "#ffffff",
                      m: 1,
                      borderRadius: 1,
                      width: "auto",
                      textTransform: "capitalize",
                    }}
                    label=" Documents"
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={{
                      fontSize: "20px",
                      color: "#ffffff",
                      m: 1,
                      borderRadius: 1,
                      width: "auto",
                      textTransform: "capitalize",
                    }}
                    label="Change Password"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Grid>
            </Box>
            <TabPanel value={value} index={0}>
              <Profile />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Documents />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Password />
            </TabPanel>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
