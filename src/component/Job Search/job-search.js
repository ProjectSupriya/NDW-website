import React, { useEffect, useState } from "react";
//import * as React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Buttonsearchresult from "./button-search";
import NoSearchJob from "./notsearchjob";
import Footer from "../footer";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#E5F4FB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CustomizedInputBase() {
  const [value, setValue] = React.useState('');
  const [userTypeId, setUserTypeId] = useState(undefined);
  const [isListFetched, setIsListFetched] = useState(false);
  const [jobTypeData, setJobTypeData] = useState([]);
  const [location, setLocation] = useState();
  const [endUser, setEndUser] = useState();
  const [isResultFetched, setIsResultFetched] = useState(true);
  const [result, setResult] = useState({});
  const [searchFor, setSearchFor] = useState({});
  const [searchPayload, setSearchPayload] = useState({});
  const [status, setStatus] = React.useState(false)

  var rows = [];
  let navigate = useNavigate();
  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value);
  };

  useEffect(() => {


    axios.get(`${API_URL}/jobType`)
      .then(function (response) {
        console.log(response);
        if (response.data.status) {
          setJobTypeData(response.data.result.rows);
          console.log(jobTypeData);
          setIsListFetched(true);
          // setUserData(response.data.results);
          // dispatch(createUser(response.data.results));
          // setIsSubmit(true);
          //alert(response.data.message);
          //navigate("/home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])


  const handleLocation = (e) => {
    setLocation(e.target.value);
  }

  const handleEndUser = (e) => {
    setEndUser(e.target.value);
  }
  const handleSearch = () => {
    console.log(location)
    console.log(value);
    console.log(endUser);

    var searchFor = {
      "endUser": endUser,
      "jobLookingFor": value,
      "location": location
    }
    //setSearchFor(searchFor);
    if (value) {

      axios.post(`${API_URL}/services/jobsearch`, searchFor)
        .then(function (response) {
          console.log(response.data);
          if (response.data.status) {
            setIsResultFetched(true);
            setResult(response.data.result);
            //console.log(response.data.result.rows);
            response.data.result.rows.map((item, index) => {
              // jobtitle, location, description
              rows.push(
                {
                  "jobtitle": item.title,
                  "job": item.JobType.title,
                  "description": item.description,
                  "location": item.location,

                });
            })
            console.log(rows)
            setSearchFor(rows);
            setSearchPayload({
              "endUser": endUser,
              "location": location,
              "jobCategory": response.data.jobType,
              "searchCount": response.data.result.count
            })
            setStatus(true)
          } else {
            setIsResultFetched(false);
            alert(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }



  }


  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ mt: 10 }}>
          <Typography
            sx={{ fontSize: "25px", color: "#00527E", fontWeight: "600" }}
            id="red"
          >
            Job Search
          </Typography>
        </Box>
        <Box
          elevation={10}
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            flexGrow: 1,
            mt: 5,
            boxShadow: 7,
            borderRadius: 3,
            p: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: 1000,
              pb: 2.5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Grid spacing={2} container>
              <Grid item xs={12} md={3}>
                <Item elevation={0} sx={{ backgroundColor: "#fff" }}>
                  {" "}
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <SearchIcon
                      sx={{ color: "action.active", mr: 1, my: -0.5, p: 1 }}
                    />
                    <TextField
                      sx={{ p: 0 }}
                      fullWidth
                      label="e. g. Support worker, carer, 
         Registered Nurse (RN)"
                      variant="standard"
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={3}>
                <Item elevation={0} sx={{ backgroundColor: "#fff" }}>
                  <FormControl sx={{ p: 0 }} fullWidth variant="standard">
                    <InputLabel id="demo-simple-select-standard-label">
                      Choose Classification
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={value}
                      onChange={handleChange}
                      label="Choose Classification"
                    >
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { background: "#CFEEFF" },
                        }}
                        value=""
                      >
                        <em> Choose Classification</em>
                      </MenuItem>
                      {/* <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { background: "#CFEEFF" },
                        }}
                        value={"Aged Care"}
                      >
                        Aged Care
                      </MenuItem>
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { background: "#CFEEFF" },
                        }}
                        value={"NDIS"}
                      >
                        NDIS
                      </MenuItem>
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { background: "#CFEEFF" },
                        }}
                        value={"Nursing"}
                      >
                        Nursing
                      </MenuItem> */}
                      {
                        isListFetched ?
                          (jobTypeData.map((item, i) => {

                            return (

                              <MenuItem sx={{ m: 1, borderRadius: '10px', '&:hover': { background: '#CCE8F7' }, }} value={item.id}>
                                {item.title}
                              </MenuItem>
                            );


                          }))
                          :
                          (<>

                          </>)
                      }
                    </Select>
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={12} md={3}>
                <Item
                  elevation={0}
                  sx={{ ml: 1, mr: 2, backgroundColor: "#fff" }}
                >
                  <TextField
                    sx={{ p: 0 }}
                    fullWidth
                    label="Enter Location"
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box elevation={0} sx={{ ml: 1, mt: 2.5 }}>
                  <Button
                    onClick={handleSearch}
                    // onClick={() => setStatus(!status)}
                    size="large"
                    sx={{
                      borderRadius: "10px",
                      background: "#008ED9",
                      width: "150px",
                      textTransform: 'capitalize',
                      fontWeight: 600,
                      color: "#fff",
                      "&:hover": {
                        background: "#ffffff",
                        color: "#008ED9",
                        border: 3,
                        borderColor: "#008ED9",
                        transition: ".5s",
                        boxShadow: 10,
                        width: "150px",
                        width: "150px",
                        fontWeight: "600",
                      },
                    }}
                    autoFocus
                  >
                    Search
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Grid item xs={12} md={12} sx={{ mt: 5 }}>
        {/* {status ? (
          <div>
            {" "}
            <Buttonsearchresult />{" "}
          </div>
        ) : (
          <div>
            <NoSearchJob />
          </div>
        )} */}
        {
          status ? <div> <Buttonsearchresult searchPayload={searchPayload} rows={searchFor} /> </div> : <div><NoSearchJob /></div>
        }
      </Grid>
      <Box sx={{ mt: 16.7 }}>
        <Footer />
      </Box>
    </>
  );
}
