import { makeStyles } from "@material-ui/core";
import { vector, vector1 } from "../../images/export";

export const useStyles = makeStyles((theme) => {
  const blocks = {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    transition: "all .3 ease-in-out",
  };
  return {
    root: {
      position: "relative",
      height: "100vh",
      width: "100%",
      overflowX: "hidden",
      backgroundColor: theme.palette.grey[100],
    },
    block1: {
      zIndex: 5,
      height: "300px",
      backgroundImage: `url(${vector})`,
      ...blocks,
      [theme.breakpoints.down("sm")]: {
        height: "35%",
        bottom: "-5%",
      },
    },
    block2: {
      zIndex: 1,
      height: "500px",
      backgroundImage: `url(${vector1})`,
      ...blocks,
      [theme.breakpoints.down("sm")]: {
        height: "45%",
        bottom: "-5%",
      },
    },
    container: {
      position: "fixed",
      left: "50%",
      top: 0,
      transform: "translateX(-50%)",
      width: "100%",
      height: "100%",
      overflowY: "scroll",
      zIndex: 10,
    },
    paperRoot: {
      margin: theme.spacing(10, 0, 40, 0),
      marginLeft: "50%",
      transform: "translateX(-50%)",
      width: "80%",
      borderRadius: theme.spacing(4),
      padding: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        opacity: 0.9,
      },
    },
  };
});
