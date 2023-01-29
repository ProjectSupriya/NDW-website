import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ServiceproviderSelect(props) {
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
    props.setSerivceLookingFor(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          value={select}
          label="Select"
        >
          <MenuItem
            sx={{
              m: 1,
              borderRadius: "10px",
              "&:hover": { background: "#CFEEFF" },
            }}
            value="5"
          >
            Registered Nurse
          </MenuItem>
          <MenuItem
            sx={{
              m: 1,
              borderRadius: "10px",
              "&:hover": { background: "#CFEEFF" },
            }}
            value="6"
          >
            Client
          </MenuItem>
          <MenuItem
            sx={{
              m: 1,
              borderRadius: "10px",
              "&:hover": { background: "#CFEEFF" },
            }}
            value="3"
          >
            Support Coordinator
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
