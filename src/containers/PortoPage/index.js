import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
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
}));

export default function PortoPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
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
          <div className={classes.frontCover}>
            <div className={classes.bottomLeft}>
              <Typography align="left">Nadyah Hani Ramadhana</Typography>
              <Typography align="left" style={{ fontWeight: "bold" }}>
                Portfolio of November 2020
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
              {`Nadyah Hani Ramadhana\n087781677523\nhani.nadyah@gmail.com\nlinkedin.com/in/nadyahhani/`}
            </Typography>
          </div>
        </Grid>
        {/* <img src={bg} alt="bg" className={classes.bg} /> */}
      </Grid>
    </div>
  );
}
