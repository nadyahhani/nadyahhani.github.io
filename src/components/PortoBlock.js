import {
  Badge,
  Grid,
  Link,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { OpenInNew } from "@material-ui/icons";
import React from "react";
import { theme } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    [`${theme.breakpoints.up("lg")}`]: {
      maxHeight: "900px",
    },
  },
  img: {
    width: "100%",
    maxWidth: theme.spacing(60),
  },
  badge: {
    opacity: 0.6,
    paddingLeft: "4px",
  },
  badgeIcon: {
    [`${theme.breakpoints.down("md")}`]: {
      width: ".7em",
    },
    marginLeft: theme.spacing(2),
  },
}));

export default function PortoBlock(props) {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();
  return (
    <Grid
      container
      spacing={isMobile ? 2 : false}
      direction={isMobile ? "column " : "row"}
      className={classes.root}
      alignItems="center"
      justify="space-between"
    >
      <Grid item xs={12} lg={5}>
        <img
          className={classes.img}
          src={props.data.img}
          alt={props.data.title}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography gutterBottom align="left" variant="h3">
          {props.data.link ? (
            <Badge
              badgeContent={<OpenInNew className={classes.badgeIcon} />}
              classes={{ badge: classes.badge }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Link color="textPrimary" href={props.data.link}>{props.data.title}</Link>
            </Badge>
          ) : (
            props.data.title
          )}
        </Typography>
        <Typography align="justify">{props.data.desc}</Typography>
      </Grid>
    </Grid>
  );
}
