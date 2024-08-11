import { Components } from "@mui/material";

export const MuiCssBaseline: Components["MuiCssBaseline"] = {
  styleOverrides: () => ({
    "*": {
      margin: "0px",
      padding: "0px",
      boxSizing: "border-box",
      userSelect: "none",
      textDecoration: "none",
      listStyle: "none",
    },
    body: {
      background: "#333",
    },
    html: {
      scrollBehavior: "smooth",
      scrollPaddingTop: "70px",

      "::-webkit-scrollbar": {
        width: "10px",
      },

      "::-webkit-scrollbar-thumb": {
        background: "#272727",
      },

      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
    },
  }),
};
