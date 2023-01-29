import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Footer from "../footer";
import Navbar from "../Navbar";
import SupportWorkSelect from "../Home_page_layout/supportworkerselect";
import InitialSelect from "../Home_page_layout/initialselect";
import SupportCoordinator from "../Home_page_layout/supportcoordinator";
import ServiceProviderSelect from "../Home_page_layout/serviceproviderselect";
import RnSelect from "../Home_page_layout/registernurse";
import ClientSelect from "../Home_page_layout/clientselect";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import firstProjectPhoto from "../media/Ellipse 19.png";
import Location from "../media/location.png";
import Rating from "@mui/material/Rating";
import secondProjectPhoto from "../media/Ellipse 20.png";
import thirdProjectPhoto from "../media/Ellipse 21.png";
import Connectbutton from "../Search-Results/connectbutton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const projects = [
  {
    photo: [
      { firstProjectPhoto },
      { secondProjectPhoto },
      { thirdProjectPhoto },
    ],
  },
  {
    text: ["Project number one", "Project number two", "Project number 3"],
  },
];
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#E5F4FB" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",

  color: theme.palette.text.secondary,
}));
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, job, description, location) {
  return { name, job, description, location };
}

var rows = [];
const rows1 = [
  createData(
    "Cupcake",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Donut",
    "sup000port worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Eclair",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Frozen yoghurt",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Gingerbread",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Honeycomb",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Ice cream sandwich",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Jelly Bean",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "KitKat",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Lollipop",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Marshmallow",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Nougat",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
  createData(
    "Oreo",
    "support worker",
    "Hi, I am Ashton. I’m passionate about helping people. I’m available to do household tasks, personal care and paperwork",
    "Albury"
  ),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const { state } = useLocation();
  const [searchFor, setSearchFor] = useState(state);
  const [isResultFetched, setIsResultFetched] = useState(true);
  const [result, setResult] = useState({});

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const [serivceLookingFor, setServiceLookingFor] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [sameValue, SetValue] = React.useState(2);

  useEffect(() => {

    if (searchFor.endUser != '' && searchFor.serviceLookingFor != '') {
      console.log("data available")

      console.log("search", searchFor);
      axios.post(`${API_URL}/services/search`, searchFor)
        .then(function (response) {
          console.log(response.data);
          if (response.data.status) {
            rows = [];
            setIsResultFetched(true);
            setResult(response.data.result);
            //console.log(response.data.result.rows);
            if (!response.data.isJob) {
              response.data.result.rows.map((item, index) => {
                // name, job, description, location
                console.log(item)
                rows.push(
                  {
                    "name": item.firstName,
                    "job": item.UserType.type,
                    "description": item.serviceRequired,
                    "location": item.area,
                    'avatar': item.avatar
                  });
              })
            } else {
              console.log("ssssssssssssss", rows);
              response.data.result.rows.map((item, index) => {
                // name, job, description, location
                rows.push(
                  {
                    "name": item.title,
                    "job": item.JobType.title,
                    "description": item.description,
                    "location": item.location,
                    'avatar': ''
                  });
              })

              console.log("rows", rows);
            }
            setPage(0)
            setData(rows);
          } else {
            setIsResultFetched(false);
            alert(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [searchFor]);

  const handleSearch = () => {
    const searchFor = {
      "endUser": value,
      "serviceLookingFor": serivceLookingFor,
      "location": location
    }
    console.log(searchFor);
    setSearchFor(searchFor)
  }
  const handleSerivceLookingFor = (e) => {

    setServiceLookingFor(e.target.value);
    console.log(e.target.value)
  }

  const handleLocation = (e) => {

    setLocation(e.target.value)
  }


  return (
    <>
      <Navbar />
      <Container>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontsize: "20px",
                  color: "#005481",
                  fontWeight: "700",
                  p: 1,
                }}
              >
                {" "}
                I am a{" "}
              </Typography>
              <Box>
                <FormControl sx={{ minWidth: "100%", backgroundColor: "#fff" }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select"
                    onChange={handleChange}
                  >
                    <MenuItem
                      sx={{
                        m: 1,
                        borderRadius: "10px",
                        "&:hover": { backgroundColor: "#CFEEFF" },
                      }}
                      value="2"
                    >
                      Support Worker
                    </MenuItem>
                    <MenuItem
                      sx={{
                        m: 1,
                        borderRadius: "10px",
                        "&:hover": { backgroundColor: "#CFEEFF" },
                      }}
                      value="3"
                    >
                      Support Cooardinator
                    </MenuItem>
                    <MenuItem
                      sx={{
                        m: 1,
                        borderRadius: "10px",
                        "&:hover": { backgroundColor: "#CFEEFF" },
                      }}
                      value="4"
                    >
                      Service Provider
                    </MenuItem>
                    <MenuItem
                      sx={{
                        m: 1,
                        borderRadius: "10px",
                        "&:hover": { backgroundColor: "#CFEEFF" },
                      }}
                      value="5"
                    >
                      Registered Nurse / Enrolled Nurse
                    </MenuItem>
                    <MenuItem
                      sx={{
                        m: 1,
                        borderRadius: "10px",
                        "&:hover": { backgroundColor: "#CFEEFF" },
                      }}
                      value="6"
                    >
                      Client / Participant
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontsize: "20px",
                  color: "#005481",
                  fontWeight: "700",
                  p: 1,
                }}
              >
                {" "}
                I am looking for a{" "}
              </Typography>
              <Item elevation={0}>
                {(() => {
                  if (value == "") {
                    return (
                      <div>
                        <InitialSelect />
                      </div>
                    );
                  } else if (value == "2" || value == "5") {
                    return (
                      <div>
                        <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                          <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            onChange={handleSerivceLookingFor}
                            value={serivceLookingFor}
                            label="Select"
                          >
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="job"
                            >
                              Job
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <SupportWorkSelect /> */}
                      </div>
                    );
                  } else if (value == "3") {
                    return (
                      <div>
                        <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                          <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            onChange={handleSerivceLookingFor}
                            value={serivceLookingFor}
                            label="Select"
                          >
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="5"
                            >
                              Registered Nurse / Enrolled Nurse
                            </MenuItem>
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="6"
                            >
                              Client / Participant
                            </MenuItem>
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="2"
                            >
                              Support Worker
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <SupportCoordinator /> */}
                      </div>
                    );
                  } else if (value == "4") {
                    return (
                      <div>
                        <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                          <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            onChange={handleSerivceLookingFor}
                            value={serivceLookingFor}
                            label="Select"
                          >
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="5"
                            >
                              Registered Nurse / Enrolled Nurse
                            </MenuItem>
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="6"
                            >
                              Client / Participant
                            </MenuItem>
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="3"
                            >
                              Support Coordinator
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <ServiceProviderSelect /> */}
                      </div>
                    );
                  }
                  // else if (value == "5") {
                  //   return (
                  //     <div>
                  //       <RnSelect />
                  //     </div>
                  //   );
                  // }
                  else {
                    return (
                      <div>
                        <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                          <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            onChange={handleSerivceLookingFor}
                            value={serivceLookingFor}
                            label="Select"
                          >
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="3"
                            >
                              Support Coordinator
                            </MenuItem>
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="2"
                            >
                              Support Worker
                            </MenuItem>
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="4"
                            >
                              Service Provider
                            </MenuItem>
                            <MenuItem
                              sx={{
                                m: 1,
                                borderRadius: "10px",
                                "&:hover": { background: "#CCE8F7" },
                              }}
                              value="5"
                            >
                              Registered Nurse / Enrolled Nurse
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <ClientSelect /> */}
                      </div>
                    );
                  }
                })()}
              </Item>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontsize: "20px",
                  color: "#005481",
                  fontWeight: "700",
                  p: 1,
                }}
              >
                {" "}
                Location
              </Typography>
              <Box>
                <Box
                  sx={{
                    width: 1000,
                    maxWidth: "100%",
                    background: "#fff ",
                    border: "0",
                    outline: "none",
                  }}
                >
                  <OutlinedInput onChange={handleLocation} fullWidth placeholder="Enter Location" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography sx={{ visibility: "hidden", p: 1 }}> Iam </Typography>
              <Box elevation={0}>
                <Button
                  onClick={handleSearch}
                  size="large"
                  sx={{
                    background: "#008ED9",
                    textTransform: "capitalize",
                    fontsize: "25px",
                    fontWeight: "600",
                    height: "3.5em",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                    color: "#fff",
                    "&:hover": {
                      background: "#ffffff",
                      transition: ".5s",
                      boxShadow: 10,
                      border: 3,
                      borderColor: "#008ED9",
                      color: "#008ED9",
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
        {!isResultFetched ? (<><p>Please wait</p></>) : (<><Box sx={{ mt: 5 }}>
          <Grid  container spacing={2}>
            <Grid  item xs={12} md={12}>
              <Box sx={{ background:'#fff', width:'100%',  height:'70px', display:'flex', alignItems:'center',justifyContent:'start',}} elevation={0}>
                <Typography
                  sx={{pl:2, fontSize: "22px", color: "#00527E", fontWeight: "600" }}
                >
                  {result.count ? <>{searchFor.location ? `${result.count} ${result.userType} found near ${searchFor.location}` : `${result.count} ${result.userType} found`}
                  </> : <Box sx={{ color: "#303030",
              
               
                fontSize: "24px",}}>No result found</Box>}
                  {/* 3 Support Workers found near NSW 2420 */}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

          <TableContainer sx={{ mt: 5, mb: 3 }}>
            <Table sx={{ width: '100%'}} aria-label="custom pagination table">
              {/* {console.log("page=" + page + "rowsperpage=" + rowsPerPage)} */}
              {console.log("rows", rows)}
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                  : data
                ).map((row, key) => (
                  <TableRow key={key}>
                    <TableCell sx={{ borderBottom: "none", pl:0, pr:0, pb:2, pt:2 }}>
                      <TableCell
                        sx={{
                          p: 0,
                         
                          borderRadius: "10px",
                          background: "#ffffff",
                          borderBottom: "none",
                        }}
                      >
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          component="th"
                          scope="row"
                        >
                          <td>
                            <Avatar alt={""} src={row.avatar != '' ? row.avatar : FirstPageIcon} />
                          </td>
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none", width: 1000 }}
                          component="th"
                          scope="row"
                        >
                          <TableCell
                            sx={{
                              borderBottom: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              alignItems: "start",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "30px",
                                fontWeight: "700",
                                color: "#00527E",
                              }}
                            >
                              {row.name}
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: "17px",
                                mb: 1.2,
                                fontWeight: "600",
                                color: "#7E7E7E",
                              }}
                            >
                              {row.job}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "14px",
                                mb: 1.2,
                                fontWeight: "400",
                                color: "#303030",
                              }}
                            >
                              {row.description}
                            </Typography>
                            <Item
                              elevation={0}
                              sx={{
                                display: "flex",
                                mb: 1.2,
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={Location}
                                alt=""
                                style={{
                                  objectFit: "contain",
                                  mb: 1.2,
                                  width: "20px",
                                }}
                              />{" "}
                              &nbsp; &nbsp;<Typography>{row.location}</Typography>
                            </Item>
                          </TableCell>
                        </TableCell>
                        <TableCell
                          style={{ borderBottom: "none", width: 300 }}
                          align="center"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {/* <Typography
                              sx={{
                                fontSize: "19px",
                                m: 1.2,
                                color: "#303030",
                                fontWeight: "600",
                              }}
                            >
                              Rating{" "}
                              <Rating
                                sx={{ m: 1 }}
                                name="simple-controlled"
                                value={sameValue}
                                onChange={(event, newValue) => {
                                  SetValue(newValue);
                                }}
                              />
                            </Typography>{" "} */}
                            <br />
                            {/* <Connectbutton /> */}
                          </Box>
                        </TableCell>
                      </TableCell>
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[3, 6, 12, { label: "All", value: -1 }]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer></>)}
      </Container>
      <Footer />
    </>
  );
}
