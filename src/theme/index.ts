import { createTheme } from "@mui/material";
import { MuiButton } from "./components/button";
import { MuiCssBaseline } from "./components/globalStyles";
import { MuiTextField } from "./components/textfield";

export const theme = createTheme({
  components: {
    MuiCssBaseline,
    MuiButton,
    MuiTextField,
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
