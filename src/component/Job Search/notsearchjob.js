import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#e5f4fb",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item elevation={0}>
            <Typography
              sx={{
                color: "#303030",
                textAlign: "center",
                fontWeight: 600,
                fontSize: "24px",
              }}
            >
              You have not searched anything yet.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
