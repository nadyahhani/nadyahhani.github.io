import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  img: {
    width: "100%",
  },
}));

export default function PortoBlock(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      className={classes.root}
      alignItems="center"
      justify="space-between"
    >
      <Grid item xs={5}>
        <img
          className={classes.img}
          src={props.data.img}
          alt={props.data.title}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom align="left" variant="h3">
          {props.data.title}
        </Typography>
        <Typography align="justify">{props.data.desc}</Typography>
      </Grid>
    </Grid>
  );
}
