import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    mode: "dark",
    type: "dark",
    primary: {
      main: "#2596be",
    },
    secondary: {
      main: "#f5a804",
    },
  },
  text: {
    primary: "#00000",
    secondary: "#00000",
  },
  typography: {
    fontFamily: "Inter",
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  shape: {
    borderRadius: 10,
  },
});
export default Theme;
