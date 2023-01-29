import * as React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

import Footer from "../footer";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#E5F4FB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CustomizedInputBase() {
  const [age, setAge] = React.useState("");
  let navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function viewjob() {
    navigate("/viewalljob");
    console.log("navigate", navigate);
  }
  const [status, setStatus] = React.useState(false);
  return (
    <>
      <Container>
        <Grid item xs={12} md={12} sx={{ mt: 5 }}>
          <Item elevation={0} sx={{ borderRadius: 0 }}>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "24px",
              }}
            >
              No jobs found at this location, please search for other locations.{" "}
              <br />
              Please check jobs at other locations
            </Typography>{" "}
            <br />
            <Button
              onclick={viewjob}
              sx={{
                borderRadius: "10px",
                background: "#00D9B7",
                width: "150px",
                color: "#000",
                textTransform: "capitalize",
                fontWeight: "600",
                "&:hover": {
                  background: "#00D9B7",
                  transition: ".5s",
                  boxShadow: 10,
                },
              }}
              autoFocus
            >
              All job
            </Button>
          </Item>
        </Grid>
      </Container>
      <Box sx={{ mt: 16.7 }}>
        <Footer />
      </Box>
    </>
  );
}
