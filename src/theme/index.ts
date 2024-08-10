import { createTheme } from "@mui/material";
import { MuiButton } from "./components/button";
import { MuiCssBaseline } from "./components/globalStyles";

export const theme = createTheme({
  components: {
    MuiCssBaseline,
    MuiButton,
  },
  palette: {
    primary: {
      main: "#FFC55C",
    },
    secondary: {
      main: "#333",
    },
  },
});
