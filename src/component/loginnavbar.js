import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
import HeaderLogo from "./media/headerlogo.png";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "../component/navbar.css";
import Searchbar from "../component/searchbar/searchbar";
import LoginButton from "./loginbutton/loginbutton";

const settings = ["My Account", "Log Out"];
const useStyles = makeStyles({
  button: {
    color: "#00485b",
    "&:hover": {
      background: "#B3F4E9" + "!important",
      color: "#000000",
    },
  },
  dropdown: {
    padding: 8,
    color: "#000000",
    "&:hover": {
      padding: 8,
      opacity: 1,
      background: "#B3F4E9" + "!important",
      color: "#000000",
    },
  },
});

const ResponsiveAppBar = () => {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  var user = localStorage.getItem('userObject');
  const [isUser, setIsUser] = React.useState(user !== 'undefined' && user !== null ? true : false);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyles();
  function SignIn() {
    navigate("/sign-in");
    console.log("navigate", navigate);
  }
  function Home() {
    navigate("/home");
    console.log("navigate", navigate);
  }
  return (
    <AppBar
      sx={{ boxShadow: 2 }}
      position="sticky"
      style={{ background: "#ffffff", color: "#008ED9" }}
    >
      <Container>
        <Toolbar sx={{ m: 1 }} disableGutters>
          <Box
            sx={{
              mr: 1,
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              onClick={Home}
              src={HeaderLogo}
              alt=""
              style={{
                objectFit: "cover",
                mt: 0,
                width: "110px",
                cursor: "pointer",
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                md: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{
                display: "flex",
              }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <Button
                className={classes.button}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 0.5, display: "block", fontWeight: "600" }}
              >
                <NavLink
                  style={{
                    fontSize: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                  className={classes.button}
                  to="/home"
                >
                  Home
                </NavLink>
              </Button>

              {/* <Button
                className={classes.button}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 0.5, display: "block", fontWeight: "600" }}
              >
                <NavLink
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    fontWeight: "600",
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                  className={classes.button}
                  to="/job-search"
                >
                  Job Search
                </NavLink>
              </Button> */}
              <Button
                className={classes.button}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 0.5, display: "block" }}
              >
                <NavLink
                  style={{
                    fontSize: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                  className={classes.button}
                  to="/our-services"
                >
                  Our Services
                </NavLink>
              </Button>
              <Button
                className={classes.button}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 0.5, display: "block" }}
              >
                <NavLink
                  style={{
                    fontSize: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                  className={classes.button}
                  to="/training"
                >
                  Training
                </NavLink>
              </Button>
              <Button
                className={classes.button}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 0.5, display: "block" }}
              >
                <NavLink
                  style={{
                    fontSize: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                  className={classes.button}
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </Button>
              <Button
                className={classes.button}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 0.5, display: "block" }}
              >
                <NavLink
                  style={{
                    fontSize: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                  className={classes.button}
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </Button>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",

              flexDirection: "row",
              justifyContent: "end",
              display: { xs: "none", md: "flex" },
            }}
          >

            <Button
              className={classes.button}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 0.5, display: "block" }}
            >
              <NavLink
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                  textTransform: "capitalize",
                }}
                className={classes.button}
                to="/home"
              >
                Home
              </NavLink>
            </Button>
            {/* <a href="Home">Home</a> */}

            {/* <Button
              className={classes.button}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 0.5, display: "block" }}
            >
              <NavLink
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
                className={classes.button}
                to="/job-search"
              >
                Job Search
              </NavLink>
            </Button> */}
            <Button
              className={classes.button}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 0.5, display: "block" }}
            >
              <NavLink
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
                className={classes.button}
                to="/our-services"
              >
                Our Services
              </NavLink>
            </Button>
            <Button
              className={classes.button}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 0.5, display: "block" }}
            >
              <NavLink
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
                className={classes.button}
                to="/training"
              >
                Training
              </NavLink>
            </Button>
            <Button
              className={classes.button}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 0.5, display: "block" }}
            >
              <NavLink
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
                className={classes.button}
                to="/about-us"
              >
                About Us
              </NavLink>
            </Button>
            <Button
              className={classes.button}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 0.5, display: "block" }}
            >
              <NavLink
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                  textTransform: "capitalize",
                }}
                className={classes.button}
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </Button>
          </Box>
          <Box
            sx={{
              mr: 0,

              display: { xs: "block", md: "none" },
            }}
          >
            <img
              src={HeaderLogo}
              alt=""
              style={{ objectFit: "contain", mt: 0, width: "70px", m: 5 }}
            />
          </Box>
          <Box
            sx={{
              mr: 0,
              width: "50px",
              display: { xs: "none", md: "none", sm: "block" },
            }}
          ></Box>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Searchbar /> */}

          {
            isUser ? <><Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: "#008ED9", p: 0.5 }}>{user.firstName}</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "55px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Button
                  className={classes.button}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 0.5,
                    color: "#ffffff",
                    display: "block",
                    fontWeight: "500",
                  }}
                >
                  <NavLink
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                    className={classes.dropdown}
                    to="/my-account"
                  >
                    My Account
                  </NavLink>
                </Button>
                <Button
                  className={classes.button}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 0.5,
                    color: "#ffffff",
                    display: "block",
                    fontWeight: "500",
                  }}
                >
                  <NavLink
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                    className={classes.dropdown}
                    to="/sign-in"
                  >
                    Log Out
                  </NavLink>
                </Button>
              </Menu>
            </Box></> : <LoginButton />

          }

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
