import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
export default function BasicDatePicker({ setInputValue }) {
  const [value, setValue] = React.useState(null);

  return (
    <Box
      sx={{
        width: 1000,
        maxWidth: "100%",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setInputValue("dob", newValue);
          }}
          renderInput={(params) => <TextField fullWidth {...params} />}
          inputFormat="dd/MM/yy"
        />
      </LocalizationProvider>
    </Box>
  );
}
