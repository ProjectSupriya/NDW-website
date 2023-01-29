import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAutoWidth(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          label="Select"
        >
          <MenuItem
            sx={{
              m: 1,
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#CCE8F7" },
            }}
            value=""
          >
            Select
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
