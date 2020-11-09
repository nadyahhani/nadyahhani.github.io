import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import PortoPage from "./containers/PortoPage";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h3: {
        fontFamily: "Source Serif Pro",
        fontWeight: "bold",
      },
      body1: {
        // fontFamily: "Roboto",
        fontWeight: "200",
        fontSize: 18,
        whiteSpace: "pre-line",
      },
    },
    MuiGrid: {
      "grid-xs-8": {
        width: "66.666667%",
      },
      "grid-xs-12": {
        width: "100%",
      },
      "grid-xs-4": {
        width: "33.333333%",
      },
      "grid-xs-10": {
        width: "83.333333%",
        maxWidth: "1440px",
      },
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <PortoPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
