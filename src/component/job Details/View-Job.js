import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Popup from "./popup";
import { useNavigate } from "react-router-dom";
import Otherjob from "./Others-job";
import Navbar from "../Navbar";
import LocationOn from "@mui/icons-material/LocationOn";
import Footer from "../footer";

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

function createData(jobtitle, location, description) {
  return { jobtitle, location, description };
}

const rows = [
  createData(
    "Aged Care Worker",
    "Parramatta /Quakers Hills",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Castle hill",
    "We are hiring aged care worker in Castle hill area. Do you have a passion for helping others? We are looking for compassionate and reliable people to join our team of aged care workers. If you live in the Castle Hill area, we would love to hear from you.This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. "
  ),
  createData(
    "Aged Care Worker",
    "Parramatta /Quakers Hills",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Parramatta /Quakers Hills",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Parramatta /Quakers Hills",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Parramatta /Quakers Hills",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Parramatta /Quakers Hills",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Parramatta /Quakers Hills",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Parramatta /Quakers Hills",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Parramatta /Quakers Hills",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
].sort((a, b) => (a.location < b.location ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  let navigate = useNavigate();

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

  function JobSearch() {
    navigate("/job-search");
    console.log("navigate", navigate);
  }

  return (
    <>
      <Navbar />
     
      <Container> <br />
      <h1 style={{color:'#00527E', fontFamily:'Arial', fontsize:'25px', mt:8, mb:5, fontWeight:600}}>Job Details </h1>
        <TableContainer elevation={10} component={Paper} sx={{ mt: 5 }}>
          <Table sx={{ width: '100%', maxWidth:1000 }} aria-label="custom pagination table">
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                
                <TableRow key={row.jobtitle}>
                  <TableCell sx={{ borderBottom: "1" }}>
                    
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
                      
                        <TableCell sx={{ width: "100%", m: 0 }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              maxWidth: "fit-content",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#00527E",
                                fontWeight: "600",
                                fontSize: "30px",
                              }}
                            >
                              {row.jobtitle}
                            </Typography>
                          </Box>
                          <br />
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              maxWidth: "fit-content",
                            }}
                          >
                            <LocationOn />
                            <Typography
                              sx={{
                                color: "#303030",
                                fontWeight: "600",
                                fontSize: "17px",
                              }}
                            >
                              {row.location}
                            </Typography>
                          </Box>
                        </TableCell>
                        <br />
                        <br />
                              {/* desktopview */}
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "20px",
                            lineHeight: "36px",
                            ml: 3,
                            display: { xs: "none", md: "block", }
                          }}
                        >
                          Job Description:
                        </Typography>{" "}
                        {/* mobileview */}
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "20px",
                            lineHeight: "36px",
                            display: { xs: "block", md: "none", }
                          }}
                        >
                          Job Description:
                        </Typography>{" "}
                        {/* desktopview */}
                        <Typography sx={{ ml: 3, display: { xs: "none", md: "block", } }}>
                          {row.description}
                        </Typography>
                        {/* mobileview */}
                        <Typography sx={{ display: { xs: "block", md: "none", } }}>
                          {row.description}
                        </Typography>
                        {/* desktopview */}
                        <Typography
                          sx={{
                            ml: 3,
                            fontWeight: "600",
                            fontSize: "20px",
                            mt: 5,
                            lineHeight: "36px",
                            display: { xs: "none", md: "block", }
                          }}
                        >
                          Roles and Responsibilities:{" "}
                        </Typography>
                        {/* mobileview */}
                        <Typography
                          sx={{
                           
                            fontWeight: "600",
                            fontSize: "20px",
                            mt: 5,
                            lineHeight: "36px",
                            display: { xs: "block", md: "none", }
                          }}
                        >
                          Roles and Responsibilities:{" "}
                        </Typography>
                        {/* desktopview */}
                        <Typography sx={{ lineHeight: "36px",  ml: 3, display: { xs: "none", md: "block", } }}>
                          <li>
                          Assisting the patient with bathing, grooming and getting dressed
                          </li>
                          <li>
                          Handling household tasks like grocery shopping and laundry{" "}
                          </li>
                          <li>
                            Preparing and serving meals at the appropriate time{" "}
                          </li>
                          <li>
                            {" "}
                            Preparing and serving meals at the appropriate time{" "}
                          </li>
                          <li> Administering oral and topical medication under the supervision of medical personnel</li>
                          <li>
                            {" "}
                            Providing mental and emotional support{" "}
                          </li>
                          <li>
                            {" "}
                            Making recommendations to family members and healthcare personnel on the plan of care{" "}
                          </li>
                          <li>
                            {" "}
                            Organising suitable recreational activities for the patient

Collaborating with other health care and social care professionals to  provide the best possible care
                          </li>
                        </Typography>
                        {/* mobileview */}
                        <Typography sx={{ lineHeight: "36px", display: { xs: "block", md: "none", } }}>
                          <li>
                          Assisting the patient with bathing, grooming and getting dressed
                          </li>
                          <li>
                          Handling household tasks like grocery shopping and laundry{" "}
                          </li>
                          <li>
                            Preparing and serving meals at the appropriate time{" "}
                          </li>
                          <li>
                            {" "}
                            Preparing and serving meals at the appropriate time{" "}
                          </li>
                          <li> Administering oral and topical medication under the supervision of medical personnel</li>
                          <li>
                            {" "}
                            Providing mental and emotional support{" "}
                          </li>
                          <li>
                            {" "}
                            Making recommendations to family members and healthcare personnel on the plan of care{" "}
                          </li>
                          <li>
                            {" "}
                            Organising suitable recreational activities for the patient

Collaborating with other health care and social care professionals to  provide the best possible care
                          </li>
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                            flexDirection: "row",
                            mt: 3,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Popup />
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
          </Table>
        </TableContainer>
      </Container>
      <Otherjob /><Footer/>
    </>
  );
}
