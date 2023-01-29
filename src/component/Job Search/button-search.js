import * as React from "react";
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
import Stack from "@mui/material/Stack";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

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

var rows = [];
const rows1 = [
  createData(
    "Aged Care Worker",
    "Castle hill",
    " We are hiring aged care worker in Castle hill area Do you have a passion for helping others? We are looking for compassionate and reliable people to join our team of aged care workers If you live in the Castle Hill area we would love to hear from you This is a rewarding opportunity to make a positive impact and empower people to maximise their independence "
  ),
  createData(
    "Aged Care Worker",
    "Nowra",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Nowra",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Nowra",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Nowra",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Nowra",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Nowra",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Nowra",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
  createData(
    "Aged Care Worker",
    "Nowra",
    "We are looking for Aged Care Worker in Parramatta/Quakers Hills area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings."
  ),
].sort((a, b) => (a.location < b.location ? -1 : 1));

export default function CustomPaginationActionsTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let navigate = useNavigate();

  console.log(props)
  const { searchPayload } = props;
  rows = props.rows;

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
  function applyjob() {
    navigate("/job-details");
    console.log("navigate", navigate);
  }
  return (
    <>
      <Container maxWidth="100%" sx={{ bgcolor: "#ffffff", mt: 10 }}>
        <Box sx={{ p: 1 }}>
          <Typography
            color={"black"}
            variant="h4"
            fontWeight={600}
            sx={{
              textAlign: "left",
              p: 1,
              pl: 5,
              mt: 10,
              color: "#00527E",
              fontSize: "24px",
            }}
          >
            {/* 32 Support Worker jobs in Aged category found near NSW 2420 */}
            {`${searchPayload.searchCount} ${searchPayload.endUser ? searchPayload.endUser : ''} jobs in ${searchPayload.jobCategory} found ${searchPayload.location ? searchPayload.location : ''} `}

          </Typography>
          <Typography
            color={"black"}
            sx={{
              textAlign: "left",
              p: 1,
              pl: 5,
              color: "#303030",
              fontSize: "17px",
            }}
          >
            {`Showing ${searchPayload.searchCount} available jobs`}
            {/* Showing 10 out of 103 available jobs */}
          </Typography>
        </Box>
        <br />

        <TableContainer sx={{ mt: 1 }}>
          <Table fullwidth aria-label="custom pagination table">
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                : rows
              ).map((row) => (
                <TableRow key={row.jobtitle} sx={{ borderBottom: "none" }}>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <TableCell
                      sx={{ borderBottom: "none" }}
                      component="th"
                      scope="row"
                    >
                      <TableCell
                        sx={{
                          p: 0,
                          background: "#83838317",
                          borderBottom: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "start",
                        }}
                      >
                        {/* Dekstop view */}
                        <TableCell
                          sx={{
                            display: { xs: "none", md: "block", },
                            m: 0,
                            p: 0,
                            background: "#008ED9",
                            borderRadius: "4px",
                            width: "100%",
                            alignItems: "flex-start",
                          }}
                        >
                          <Grid
                            container
                            spacing={0}
                            sx={{
                              p: 2,
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Grid item xs={8} md={8} sm={4}>
                              <Typography
                                sx={{
                                  fontWeight: "700",
                                  fontSize: "25px",
                                  color: "#fff",
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                }}
                              >
                                {row.jobtitle}
                              </Typography>
                            </Grid>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Grid item xs={1} md={1} sm={1}>
                                <LocationOnIcon
                                  sx={{
                                    color: "#fff",
                                    textAlign: "right",
                                    mt: 1,
                                    fontSize: "32px",
                                  }}
                                />
                              </Grid>{" "}
                              &nbsp;&nbsp;&nbsp;
                              <Grid item xs={3} md={4} sm={4}>
                                <Typography
                                  sx={{
                                    color: "#fff",
                                    fontWeight: "400",
                                    width: "200px",
                                    fontSize: "25px",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  {row.location}
                                </Typography>
                              </Grid>
                            </Box>
                          </Grid>
                        </TableCell>

                        {/* Mobile view */}
                        <TableCell
                          sx={{
                            display: { xs: "block", md: "none", },
                            m: 0,

                            p: 0,
                            background: "#008ED9",
                            borderRadius: "4px",
                            width: "100%",
                            alignItems: "flex-start",
                          }}
                        >
                          <Grid
                            container
                            spacing={0}
                            sx={{
                              p: 2,
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Grid item xs={8} md={8} sm={4}>
                              <Typography
                                sx={{
                                  fontWeight: "700",
                                  fontSize: "19px",
                                  color: "#fff",
                                  display: "flex",
                                  flexDirection: "row",
                                  width: "200px",
                                  maxWidth: 1000,
                                  justifyContent: "center",
                                  alignItems: 'center',
                                }}
                              >
                                {row.jobtitle}
                              </Typography>
                            </Grid>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Grid item xs={1} md={1} sm={1}>
                                <LocationOnIcon
                                  sx={{
                                    color: "#fff",
                                    textAlign: "right",
                                    mt: 1,
                                    fontSize: "20px",
                                  }}
                                />
                              </Grid>{" "}
                              &nbsp;
                              <Grid item xs={3} md={4} sm={4}>
                                <Typography
                                  sx={{
                                    color: "#fff",
                                    fontWeight: "400",
                                    width: "200px",
                                    maxWidth: 1000,
                                    fontSize: "20px",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  {row.location}
                                </Typography>
                              </Grid>
                            </Box>
                          </Grid>
                        </TableCell>
                        <Box sx={{ pl: 15, pt: 3, pr: 18, pb: 3, display: { xs: "none", md: "block", } }}>
                          <Typography
                            sx={{
                              fontWeight: "400",
                              fontSize: "17px",
                              lineHeight: "36px",
                            }}
                          >
                            {row.description}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              flexDirection: "row",
                              mt: 3,
                              justifyContent: "left",
                              alignItems: "left",
                            }}
                          >
                            <Button
                              href="#"
                              onClick={applyjob}
                              sx={{
                                borderRadius: "10px",
                                p: 1.5,
                                background: "#0DABFF",
                                width: "170px",
                                color: "#ffffff",
                                textTransform: "capitalize",
                                fontWeight: "600",
                                "&:hover": {
                                  background: "#ffffff",
                                  color: "#0DABFF",
                                  border: 3,
                                  borderColor: "#0DABFF",
                                  transition: ".5s",
                                  boxShadow: 10,
                                },
                              }}
                              autoFocus
                            >
                              View job
                            </Button>
                          </Box>
                        </Box>
                        <Box sx={{ display: { xs: "block", md: "none", }, m: 2 }}>
                          <Typography
                            sx={{
                              fontWeight: "400",
                              fontSize: "17px",
                              lineHeight: "36px",
                            }}
                          >
                            {row.description}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              flexDirection: "row",
                              mt: 3,
                              justifyContent: "left",
                              alignItems: "left",
                            }}
                          >
                            <Button
                              href="#"
                              onClick={applyjob}
                              sx={{
                                borderRadius: "10px",
                                p: 1.5,
                                background: "#0DABFF",
                                width: "170px",
                                color: "#ffffff",
                                textTransform: "capitalize",
                                fontWeight: "600",
                                "&:hover": {
                                  background: "#ffffff",
                                  color: "#0DABFF",
                                  border: 3,
                                  borderColor: "#0DABFF",
                                  transition: ".5s",
                                  boxShadow: 10,
                                },
                              }}
                              autoFocus
                            >
                              View job
                            </Button>
                          </Box>
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
                  rowsPerPageOptions={[2, 4, 8, { label: "All", value: -1 }]}
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
        </TableContainer>
      </Container>
    </>
  );
}