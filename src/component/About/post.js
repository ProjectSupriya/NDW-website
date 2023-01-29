import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "../media/about.png";
import IconButton from "@mui/material/IconButton";
import ReactDOM from "react-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./post.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
  marginLeft: "auto",


  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";
const hStyle = { color: 'red' };

export default function Crousal() {
  const [expanded, setExpanded] = React.useState(false);

  // const [data, setData] = React.useState({});
  // const [isfetched, setisfetched] = React.useState(false);

  // React.useEffect(() => {

  //   axios.get(`${API_URL}/admin/facebook`)
  //     .then(function (response) {
  //       console.log(response);
  //       if (response.data.status) {


  //         let accessToken = response.data.result.accessToken;
  //         let pageId = response.data.result.pageId;

  //         axios.get(`https://graph.facebook.com/101389019402613/posts?created_time,message,picture&limit=5&access_token=${accessToken}`)
  //           .then(function (response) {
  //             console.log(response);


  //             setData(response.data);

  //             setisfetched(true);

  //           })
  //           .catch(function (error) {
  //             console.log(error);
  //           });

  //         setisfetched(true);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }, [])



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [expand, setExpand] = React.useState(false);
  const handleExpandClickSecound = () => {
    setExpand(!expand);
  };
  const [third, setThird] = React.useState(false);
  const handleExpandClickThird = () => {
    setThird(!third);
  };
  const [four, setFour] = React.useState(false);
  const handleExpandClickFour = () => {
    setFour(!four);
  };
  const [five, setFive] = React.useState(false);
  const handleExpandClickFive = () => {
    setFive(!five);
  };
  const [six, setSix] = React.useState(false);
  const handleExpandClickSix = () => {
    setSix(!six);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Crousal">
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive} >
          <div className="card">
            <div style={{ maxWidth: "100%", background: "#EEE" }}>
              {" "}
              <Card sx={{ maxWidth: "100%" }} >
                <CardHeader />
                <CardMedia
                  sx={{
                    pl: 15,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  component="img"
                  alt=""
                  style={{ objectFit: "contain", maxWidth: "100px" }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "flexstart",
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Ndw"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                    </Stack>
                  </Box>{" "}
                  <br />
                  <Typography>NDW</Typography>
                  <Typography variant="body2" color="text.secondary">
                    1 week ago
                  </Typography>{" "}
                  <br />
                  <Typography sx={{ textAlign: 'left', color: '#6b6b6b', fontSize: '14px', ml: 3, mr: 3 }}>
                    <ReactReadMoreReadLess
                      charLimit={200}
                      readMoreText={"See More.."}
                      readLessText={"See less.."}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"

                    >

                      {longText}




                    </ReactReadMoreReadLess>
                  </Typography>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent sx={{ mt: -2 }}>

                  </CardContent>
                </Collapse>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "start",
                  }}
                >
                  <img
                    src={Image}
                    alt=""
                    width={150}
                    height={150}
                    style={{ objectFit: "contain" }}
                  />

                  <img
                    src={Image}
                    alt=""
                    width={150}
                    height={150}
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <a
                    style={{ color: "#303030", textDecoration: "none" }}
                    href="https://www.facebook.com/NDWSydney/" target="blank"
                  >
                    View on Facebook
                  </a>
                </Box>
              </Card>
            </div>
          </div>
          <div className="card">
            {" "}
            <div style={{ maxWidth: "100%", background: "#EEE" }}>
              {" "}
              <Card sx={{ maxWidth: "100%" }}>
                <CardHeader />
                <CardMedia
                  sx={{
                    pl: 15,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  component="img"
                  alt=""
                  style={{ objectFit: "contain", maxWidth: "100px" }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "flexstart",
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Ndw"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                    </Stack>
                  </Box>{" "}
                  <br />
                  <Typography>NDW</Typography>
                  <Typography variant="body2" color="text.secondary">
                    1 week ago
                  </Typography>{" "}
                  <br />
                  <Typography sx={{ textAlign: 'left', color: '#6b6b6b', fontSize: '14px', ml: 3, mr: 3 }}>
                    <ReactReadMoreReadLess
                      charLimit={200}
                      readMoreText={"See More.."}
                      readLessText={"See less.."}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"

                    >

                      {longText}




                    </ReactReadMoreReadLess>
                  </Typography>

                </CardContent>
                <Collapse in={expand} timeout="auto" unmountOnExit>
                  <CardContent sx={{ mt: -2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="left"
                      paragraph
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elementum consequat, aliquet hac in morbi fames. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                      ips..
                    </Typography>
                  </CardContent>
                </Collapse>

                <Box sx={{ mb: 3 }}>
                  <a
                    style={{ color: "#303030", textDecoration: "none" }}
                    href="https://www.facebook.com/NDWSydney/"
                  >
                    View on Facebook
                  </a>
                </Box>
              </Card>
            </div>
          </div>
          <div className="card">
            <div style={{ maxWidth: "100%", background: "#EEE" }}>
              {" "}
              <Card sx={{ maxWidth: "100%" }}>
                <CardHeader />
                <CardMedia
                  sx={{
                    pl: 15,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  component="img"
                  alt=""
                  style={{ objectFit: "contain", maxWidth: "100px" }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "flexstart",
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Ndw"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                    </Stack>
                  </Box>{" "}
                  <br />
                  <Typography>NDW</Typography>
                  <Typography variant="body2" color="text.secondary">
                    1 week ago
                  </Typography>{" "}
                  <br />
                  <Typography sx={{ textAlign: 'left', color: '#6b6b6b', fontSize: '14px', ml: 3, mr: 3 }}>
                    <ReactReadMoreReadLess
                      charLimit={200}
                      readMoreText={"See More.."}
                      readLessText={"See less.."}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"

                    >

                      {longText}




                    </ReactReadMoreReadLess>
                  </Typography>
                </CardContent>
                <Collapse in={third} timeout="auto" unmountOnExit>
                  <CardContent sx={{ mt: -2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="left"
                      paragraph
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elementum consequat, aliquet hac in morbi fames. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                      ips..
                    </Typography>
                  </CardContent>
                </Collapse>

                <Box sx={{ mb: 3 }}>
                  <a
                    style={{ color: "#303030", textDecoration: "none" }}
                    href="https://www.facebook.com/NDWSydney/"
                  >
                    View on Facebook
                  </a>
                </Box>
              </Card>
            </div>
          </div>
          <div className="card">
            <div style={{ maxWidth: "100%", background: "#EEE" }}>
              {" "}
              <Card sx={{ maxWidth: "100%" }}>
                <CardHeader />
                <CardMedia
                  sx={{
                    pl: 15,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  component="img"
                  alt=""
                  style={{ objectFit: "contain", maxWidth: "100px" }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "flexstart",
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Ndw"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                    </Stack>
                  </Box>{" "}
                  <br />
                  <Typography>NDW</Typography>
                  <Typography variant="body2" color="text.secondary">
                    1 week ago
                  </Typography>{" "}
                  <br />
                  <Typography sx={{ textAlign: 'left', color: '#6b6b6b', fontSize: '14px', ml: 3, mr: 3 }}>
                    <ReactReadMoreReadLess
                      charLimit={200}
                      readMoreText={"See More.."}
                      readLessText={"See less.."}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"

                    >

                      {longText}




                    </ReactReadMoreReadLess>
                  </Typography>
                </CardContent>
                <Collapse in={four} timeout="auto" unmountOnExit>
                  <CardContent sx={{ mt: -2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="left"
                      paragraph
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elementum consequat, aliquet hac in morbi fames. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                      ips..
                    </Typography>
                  </CardContent>
                </Collapse>

                <Box sx={{ mb: 3 }}>
                  <a
                    style={{ color: "#303030", textDecoration: "none" }}
                    href="https://www.facebook.com/NDWSydney/"
                  >
                    View on Facebook
                  </a>
                </Box>
              </Card>
            </div>
          </div>

          <div className="card">
            <div style={{ maxWidth: "100%", background: "#EEE" }}>
              {" "}
              <Card sx={{ maxWidth: "100%" }}>
                <CardHeader />
                <CardMedia
                  sx={{
                    pl: 15,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  component="img"
                  alt=""
                  style={{ objectFit: "contain", maxWidth: "100px" }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "flexstart",
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Ndw"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                    </Stack>
                  </Box>{" "}
                  <br />
                  <Typography>NDW</Typography>
                  <Typography variant="body2" color="text.secondary">
                    1 week ago
                  </Typography>{" "}
                  <br />
                  <Typography sx={{ textAlign: 'left', color: '#6b6b6b', fontSize: '14px', ml: 3, mr: 3 }}>
                    <ReactReadMoreReadLess
                      charLimit={200}
                      readMoreText={"See More.."}
                      readLessText={"See less.."}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"

                    >

                      {longText}




                    </ReactReadMoreReadLess>
                  </Typography>
                </CardContent>
                <Collapse in={six} timeout="auto" unmountOnExit>
                  <CardContent sx={{ mt: -2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="left"
                      paragraph
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elementum consequat, aliquet hac in morbi fames. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                      ips..
                    </Typography>
                  </CardContent>
                </Collapse>

                <Box sx={{ mb: 3 }}>
                  <a
                    style={{ color: "#303030", textDecoration: "none" }}
                    href="https://www.facebook.com/NDWSydney/"
                  >
                    View on Facebook
                  </a>
                </Box>
              </Card>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
