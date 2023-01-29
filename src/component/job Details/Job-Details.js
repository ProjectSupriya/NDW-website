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
import Footer from "../footer";
import Button from "@mui/material/Button";
import Navbar from "../Navbar";

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
    "Disability Care Worker",
    "Nowra",
    "We are looking for Aged Care Worker in Nowra area and surrounding suburbs to provide supports to people with psychosocial disabilities in a residential setting. This is a rewarding opportunity to make a positive impact and empower people to maximise their independence. Benefits Training and Upskilling opportunities to attend regular NDW organised trainings.  "
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
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

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
  function jobdetails() {
    navigate("/search");
    console.log("navigate", navigate);
  }
  return (
    <>
      <Navbar />
      <Container>
        <Typography
          color={"black"}
          variant="h5"
          fontWeight={600}
          sx={{ textAlign: "left", mt: 10 }}
        >
          Search Results
        </Typography>{" "}
        <br />
        <Typography color={"black"}>
          Showing 83 out of 103 available jobs
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 5 }}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
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
                        <TableCell
                          sx={{
                            background: "#006194",
                            borderRadius: "4px",
                            width: "100%",
                            m: 0,
                          }}
                        >
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
                                fontWeight: "600",
                                fontSize: "17px",
                              }}
                            >
                              {" "}
                              Job Title:{" "}
                            </Typography>{" "}
                            &nbsp;&nbsp;
                            <Typography>{row.jobtitle}</Typography>
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
                            <Typography
                              sx={{
                                fontWeight: "600",
                                fontSize: "17px",
                              }}
                            >
                              {" "}
                              Location:{" "}
                            </Typography>{" "}
                            &nbsp;&nbsp;
                            <Typography>{row.location}</Typography>
                          </Box>
                        </TableCell>
                        <br />
                        <br />
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "17px",
                          }}
                        >
                          Job Details:
                        </Typography>{" "}
                        <Typography>{row.description}</Typography>
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
                          <Button
                            onClick={jobdetails}
                            sx={{
                              width: "150px",
                              background: "#01C1EB",
                              color: "#fff",
                              fontWeight: "600",
                              "&:hover": {
                                background: "#1DDFDA",
                                transition: ".5s",
                                boxShadow: 10,
                              },
                            }}
                            autoFocus
                          >
                            View job
                          </Button>
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
      <Footer />
    </>
  );
}
