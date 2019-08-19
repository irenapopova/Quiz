import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import brown from "@material-ui/core/colors/brown";

// brown (121,85,72)
// light (239, 235, 233)
// dark (78, 52, 46)

// red (227,53,22)
// light (255, 243, 224)
// dark (	239, 108, 0)

const light = 50;
const main = 500;
const dark = 800;

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: red[light],
      main: red[main],
      dark: red[dark],
      contrastText: "#fff"
    },
    secondary: {
      light: brown[light],
      main: brown[main],
      dark: brown[dark],
      contrastText: "#000"
    },
    typography: {
      fontFamily: '"Indie Flower", cursive',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    }
  }
});

export default MyTheme;
