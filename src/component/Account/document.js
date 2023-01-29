import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddDocument from "./adddocument";
import DeleteDocument from "./deletedocument";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  createUser, selectUser
} from '../../features/user/userSlice';
import axios from 'axios';
import moment from "moment";

const API_URL = process.env.REACT_APP_API_URL;

function createData(Sr_No, DocumentName, FieldName, LastUpdatedOn) {
  return {
    Sr_No,
    DocumentName,
    FieldName,
    LastUpdatedOn,

    pdf: [
      {
        Srno: "",
        DocumentName: "NDIS Induction or Infection Control_1.pdf",
        LastUpdatedOn: "12/06/2022, 10:00 AM",
        Action: "",
      },
    ],
  };
}

function Row(props) {
  const { row, user, setRefresh } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell textDecoration="underline" component="th" scope="row" align="center">
          {row.Sr_No}
        </TableCell>
        <TableCell textDecoration="underline" align="center">{row.DocumentName}</TableCell>
        <TableCell textDecoration="underline" align="center">{row.LastUpdatedOn}</TableCell>
        <TableCell textDecoration="underline"
          align="center"
          // sx={{
          //   display: "flex",
          //   flexDirection: "row",
          //   flexWrap: "nowrap",
          //   justifyContent: "space-around",
          // }}
        >
          <AddDocument setRefresh={setRefresh} id={user.id} fieldName={row.FieldName} />
        </TableCell>

        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            borderBottom: "none",
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases" borderBottom="none">
                <TableBody>
                  {row.pdf.map((pdfRow) => (
                    <TableRow key={pdfRow.DocumentName}>
                  
                  <TableCell align="center" textDecoration="underline">
                        

                      </TableCell>
                      
                  <TableCell align="center" textDecoration="underline">
                        

                        </TableCell>
                        <TableCell align="center" textDecoration="underline">
                        

                        </TableCell>
                        <TableCell align="center" textDecoration="underline">
                        

                        </TableCell>
                      <TableCell align="center" textDecoration="underline">
                        {/* {pdfRow.DocumentName} */}
                        {pdfRow.DocumentName ? <> <a target={"_blank"} href={`${pdfRow.DocumentName}`}>
                          Download File
                        </a></> : <></>}

                      </TableCell>
                      <TableCell align="center" textDecoration="underline">
                        

                        </TableCell>
                        <TableCell align="center" textDecoration="underline">
                        

                        </TableCell>
                      
                      <TableCell textDecoration="underline" align="center">
                        {pdfRow.DocumentName ? <>  {pdfRow.LastUpdatedOn}</> : <></>}

                      </TableCell>
                      
                      <TableCell textDecoration="underline"
                        align="center"
                       
                      >
                        {pdfRow.DocumentName ? <> <DeleteDocument setRefresh={setRefresh} userId={user.id} id={pdfRow.id} /></> : <></>}

                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment >
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


const rows1 = [
  createData(
    1,
    "NDIS Induction or Infection Control  ",
    "12/06/2022, 10:00 AM"
  ),
  createData(2, "Passport size photo", "12/06/2022, 09:59 AM"),
  createData(3, "First Aid Certificate ", "12/06/2022, 09:57 AM"),
  createData(4, "WWC (Working with Children Check) ", "12/06/2022, 09:54 AM"),
  createData(5, "AFP Police Clearance ", "12/06/2022, 09:52 AM"),
  createData(6, "100 Point ID (Passport)", "12/06/2022, 09:50 AM"),
  createData(7, "Driver Licence", "12/06/2022, 09:47 AM"),
  createData(8, "Car Rego", "12/06/2022, 09:44 AM"),
  createData(9, "Car Insurance", "12/06/2022, 09:40 AM"),
  createData(10, "Updated Resume", "12/06/2022, 09:38 AM"),
  createData(11, "2 Referees", "12/06/2022, 09:35 AM"),
  createData(12, "Covid 19 Training", "12/06/2022, 09:32 AM"),
  createData(13, "NDIS Worker Screening Check", "12/06/2022, 09:30 AM"),
  createData(14, "Education Certificate", "12/06/2022, 09:28 AM"),
  createData(15, "Manual Handling", "12/06/2022, 09:25 AM"),
  createData(16, "Vaccine Certificate", "12/06/2022, 09:20 AM"),
];

export default function CollapsibleTable() {

  var user = localStorage.getItem('userObject');
  if (user !== "undefined") {
    user = JSON.parse(user);
  }
  const [refresh, setRefresh] = useState(false);
  console.log("2", user);
  const dispatch = useDispatch();
  // jobtitle, location, description
  // rows.push(
  //   {
  //     "NDIS Induction or Infection Control  ": item.ndis,
  //     "job": item.JobType.title,
  //     "description": item.description,
  //     "location": item.location,

  //   });
  console.log("hurry", refresh);

  var marr = [];
  // var rows2 = [];
  var rows = [];
  marr = user.document;
  marr.map((value, key) => {
    //console.log("doc", value.fileName);
    let fileInfo;


    if (value.fileInfo != '') {
      fileInfo = JSON.parse(value.fileInfo);
      if (fileInfo.updatedAt) {
        var date = new Date(fileInfo.updatedAt);

        date = moment(date).format("DD-MM-YY HH:mm:ss");
        // console.log(date);
      }
    }
    key = key + 1;
    rows.push(
      {
        "Sr_No": key,
        "DocumentName": value.documentTitle,
        "FieldName": value.fileName,
        "LastUpdatedOn": date,
        "pdf": [{
          "Srno": "",
          "DocumentName": fileInfo ? fileInfo.url : '',
          "LastUpdatedOn": date,
          "Action": "",
          "id": value.id
        }]
      }
    );
  });
  console.log("doc", rows);
  // const rows2 = [
  //   {
  //     "Sr_No": 1,
  //     "DocumentName": "NDIS Induction",
  //     "FieldName": "ndis",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.ndis,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 2,
  //     "DocumentName": "Passport size photo",
  //     "FieldName": "passportSizePhoto",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.passport,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 3,
  //     "DocumentName": "First Aid Certificate",
  //     "FieldName": "firstAid",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.firstAid,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 4,
  //     "DocumentName": "WWC (Working with Children Check)",
  //     "FieldName": "wmc",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.wmc,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 5,
  //     "DocumentName": "AFP Police Clearance",
  //     "FieldName": "afp",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.afp,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 6,
  //     "DocumentName": "100 Point ID (Passport)",
  //     "FieldName": "pointId",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.pointId,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 7,
  //     "DocumentName": "Driver Licence",
  //     "FieldName": "drivingLicence",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.drivingLicence,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 8,
  //     "DocumentName": "Car Rego",
  //     "FieldName": "carRego",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.carRego,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 9,
  //     "DocumentName": "Car Insurance",
  //     "FieldName": "carInsurance",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.carInsurance,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 10,
  //     "DocumentName": "Updated Resume",
  //     "FieldName": "resume",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.resume,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 11,
  //     "DocumentName": "2 Referees",
  //     "FieldName": "referees",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.referees,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 12,
  //     "DocumentName": "Covid 19 Training",
  //     "FieldName": "covid19Training",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.covid19Training,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 13,
  //     "DocumentName": "NDIS Worker Screening Check",
  //     "FieldName": "ndisWoorkeerScreeningCheck",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.ndisWoorkeerScreeningCheck,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 14,
  //     "DocumentName": "Education Certificate",
  //     "FieldName": "educationCertificate",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.educationCertificate,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 15,
  //     "DocumentName": "Manual Handling",
  //     "FieldName": "manualHandling",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.manualHandling,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  //   {
  //     "Sr_No": 16,
  //     "DocumentName": "Vaccine Certificate",
  //     "FieldName": "vaccineCertificate",
  //     "LastUpdatedOn": "",
  //     "pdf": [{
  //       "Srno": "",
  //       "DocumentName": user.vaccineCertificate,
  //       "LastUpdatedOn": "12/06/2022, 10:00 AM",
  //       "Action": "",
  //     }]
  //   },
  // ]

  useEffect(() => {

    if (refresh) {


      var values = {
        id: user.id
      }
      axios.post(`${API_URL}/users/userdata`, values)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {

            dispatch(createUser(response.data.result));
            window.location.reload();


          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }, [refresh])

  //console.log("hi", rows);
  //console.log("hi", user);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow textDecoration='underline'>
            <TableCell sx={{ fontWeight: 600 }} align="center">
              Sr.No
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="center">
              Document Name
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="center">
              Last Updated On
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="center">
              Action
            </TableCell>
            
            <TableCell sx={{ fontWeight: 600 }} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} user={user} setRefresh={setRefresh} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
