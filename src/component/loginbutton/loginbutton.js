import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ButtonSizes() {
  let navigate = useNavigate();
  function signin() {
    navigate("/sign-in");
    console.log("navigate", navigate);
  }
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Button
        onClick={signin}
        size="large"
        sx={{
          background: "#008ED9",
          textTransform: "capitalize",
          fontsize: "25px",
          fontWeight: "600",
          height: "3.2em",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          color: "#fff",
          "&:hover": {
            border: 1,
            borderColor: "#008ED9",
            color: "#008ED9",
            transition: ".5s",
            boxShadow: 10,
          },
        }}
        autoFocus
      >
        Login
      </Button>
    </Box>
  );
}
