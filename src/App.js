import "./App.css";
import Search from "./Search";
import {
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Header from "./Header";
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F5159",
    },
    secondary: {
      main: "#51A582",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

const useStyle = makeStyles({
  container: {
    display: "flex",
    fontFamily: "Montserrat",
    fontWeight: "500",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // width: "100vw",
    backgroundColor: "#1C3A41",
    margin: "0",
    padding: "0",
  },
});
function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Header />
        <Search/>
      </div>
    </ThemeProvider>
  );
}

export default App;
