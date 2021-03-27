import { AppBar, Button, Grid, Paper, Toolbar } from "@material-ui/core";
import React from "react";
import { porto } from "./portoData";
import { useStyles } from "./styles";

export default function PortoPage() {
  const classes = useStyles();
  const [state, setState] = React.useState({ x: 0, y: 0 });
  const height = window.innerHeight;
  const width = window.innerWidth;

  const handleMouseMove = (e) => {
    setState({ x: e.pageX, y: e.pageY });
  };

  const getX = (intensity) => {
    return (width / 2 - state.x) / (width / 2 / intensity);
  };

  const getY = (intensity) => {
    return (height / 2 - state.y) / (height / 2 / intensity);
  };

  // 1440 ==> -10 (1)
  // 720 ==> 0 (0)
  // 0 ==> 10 (-1)

  return (
    <>
      <header>
        <AppBar color="transparent" elevation={0} position="fixed">
          <Toolbar>
            <Button>Menu</Button>
            <Button>Menu</Button>
            <Button>Menu</Button>
          </Toolbar>
        </AppBar>
      </header>
      <div className={classes.root} onMouseMove={handleMouseMove}>
        <div className={classes.container}>
          <div className={classes.heroContainer}>
            <h1
              style={{
                transform: `scale(1.5) translate(${getX(8)}%,${getY(8)}%)`,
              }}
            >
              Welcome!
            </h1>
          </div>
          <Paper elevation={0} className={classes.paperRoot}>
            <Grid container direction="column" spacing={4}>
              {[...porto, ...porto].map((item) => {
                return (
                  <div key={JSON.stringify(item)}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </Grid>
          </Paper>
        </div>
        <div
          className={classes.block1}
          style={{ transform: `scale(2) translate(${getX(8)}%,${getY(8)}%)` }}
        ></div>
        <div
          className={classes.block2}
          style={{ transform: `scale(1.5) translate(${getX(3)}%,${getY(3)}%)` }}
        ></div>
      </div>
    </>
  );
}
