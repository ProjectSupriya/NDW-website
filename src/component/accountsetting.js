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
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "../component/navbar.css";
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
          
          
          
         
          
         
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: "#008ED9", p: 0.5 }}>JR</Avatar>
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
          </Box>
          <LoginButton/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
