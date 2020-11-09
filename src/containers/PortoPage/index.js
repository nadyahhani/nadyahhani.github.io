import {
  Fab,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  SaveAlt,
} from "@material-ui/icons";
import React from "react";
import { theme } from "../../App";
import PortoBlock from "../../components/PortoBlock";
import { bg } from "../../images/export";
import { porto } from "./portoData";

const useStyles = makeStyles((theme) => ({
  root: { height: "100vh", width: "100vw", zIndex: 2 },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100vw",
    overflow: "hidden",
    // maxHeight: "6687px",

    opacity: 0.55,
  },
  frontCover: {
    height: "80vh",
    maxHeight: "810px",
    display: "flex",
    [`${theme.breakpoints.down("md")}`]: {
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    },
    [`${theme.breakpoints.up("lg")}`]: {
      padding: `${theme.spacing(8)}px !important`,
      justifyContent: "left",
      alignItems: "flex-end",
    },
  },
  backCover: {
    height: "90vh",
    maxHeight: "810px",
    display: "flex",
    [`${theme.breakpoints.up("lg")}`]: {
      padding: `${theme.spacing(8)}px !important`,
      justifyContent: "left",
      alignItems: "flex-end",
    },
    [`${theme.breakpoints.down("md")}`]: {
      height: "100vh",
      justifyContent: "center",
      alignItems: "flex-end",
    },
  },
  thank: {
    position: "absolute",
    left: "0",
    right: "0",
    marginBottom: "40vh",
    [`${theme.breakpoints.up("lg")} and (orientation: portrait)`]: {
      marginBottom: "600px",
    },
  },
  gridRoot: {
    [`${theme.breakpoints.down("md")}`]: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    backgroundImage: `url(${bg})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  totop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  scroll: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: 0,
    left: 0,
  },
  fab: {
    backgroundColor: "#F4BDA4",
    "&:hover": {
      backgroundColor: "#FCEDE6",
    },
  },
}));

export default function PortoPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={isMobile ? 8 : 2}
        direction="column"
        alignItems="center"
        className={classes.gridRoot}
      >
        <Grid item xs={10}>
          <div className={classes.frontCover} id="back-to-top-anchor">
            <div className={classes.bottomLeft}>
              <Typography align="left">Nadyah Hani Ramadhana</Typography>
              <Typography
                align="left"
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                component="div"
              >
                Portfolio of November 2020{" "}
                <IconButton
                  size="small"
                  style={{ marginLeft: "8px" }}
                  // color="primary"
                  href={
                    "/static/files/Portfolio%20-%20Nadyah%20Hani%20Ramadhana%20-%202020.pdf"
                  }
                >
                  <SaveAlt />
                </IconButton>
              </Typography>
            </div>
          </div>
        </Grid>
        {porto.map((item) => {
          return (
            <Grid item xs={10} alignItems="center" justify="center">
              <PortoBlock data={item} />
            </Grid>
          );
        })}
        <Grid item xs={10}>
          <div className={classes.backCover}>
            <Typography className={classes.thank} variant="h3">
              Thank You.
            </Typography>
            <Typography align="left">
              {`Nadyah Hani Ramadhana\nhani.nadyah@gmail.com\nlinkedin.com/in/nadyahhani/`}
            </Typography>
          </div>
        </Grid>
        {/* <img src={bg} alt="bg" className={classes.bg} /> */}
      </Grid>
      <Zoom in={!trigger}>
        <div role="presentation" className={classes.scroll}>
          <KeyboardArrowDown color="primary" />
        </div>
      </Zoom>
      <Zoom in={trigger}>
        <div
          onClick={handleClick}
          role="presentation"
          className={classes.totop}
        >
          <Fab
            className={classes.fab}
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUp />
          </Fab>
        </div>
      </Zoom>
    </div>
  );
}
