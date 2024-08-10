import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDom from "react-dom/client";
import App from "./App";
import { theme } from "./theme";

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
