import { Components } from "@mui/material";

export const MuiTextField: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      background: "#272727",
      color: "#ccc",
      borderRadius: "5px",

      "& .MuiInputLabel-root": {
        color: "#ccc",
        fontSize: ".9rem",
      },

      "& .MuiOutlinedInput-root": {
        borderRadius: "5px", // Change this value to your desired border radius
      },

      //   "& .MuiInputLabel-root.Mui-focused": {
      //     color: "orange",
      //   },
    },
  },
};
