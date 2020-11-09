import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
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
    width: "103vw",
    height: "800vh",
    opacity: 0.55,
  },
  frontCover: {
    minHeight: "90vh",
    display: "flex",
    padding: `${theme.spacing(8)}px !important`,
    justifyContent: "left",
    alignItems: "flex-end",
  },
  backCover: {
    minHeight: "90vh",
    display: "flex",
    padding: `${theme.spacing(8)}px !important`,
    justifyContent: "left",
    alignItems: "flex-end",
  },
  thank: {
    position: "absolute",
    left: "0",
    right: "0",
    marginBottom: "40vh",
  },
}));

export default function PortoPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={10} className={classes.frontCover}>
          <div className={classes.bottomLeft}>
            <Typography align="left">Nadyah Hani Ramadhana</Typography>
            <Typography align="left" style={{ fontWeight: "bold" }}>
              Portfolio of November 2020
            </Typography>
          </div>
        </Grid>
        {porto.map((item) => {
          return (
            <Grid item xs={10} alignItems="center" justify="center">
              <PortoBlock data={item} />
            </Grid>
          );
        })}
        <Grid item xs={10} className={classes.backCover}>
          <Typography className={classes.thank} variant="h3">
            Thank You.
          </Typography>
          <Typography align="left">
            {`Nadyah Hani Ramadhana\n087781677523\nhani.nadyah@gmail.com\nlinkedin.com/in/nadyahhani/`}
          </Typography>
        </Grid>
      </Grid>
      <img src={bg} alt="bg" className={classes.bg} />
    </div>
  );
}
