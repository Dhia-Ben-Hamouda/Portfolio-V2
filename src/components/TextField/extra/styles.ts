import { styled, TextField } from "@mui/material";

export const StyledField = styled(TextField)(() => ({
  "& :is(input, textarea)": {
    color: "#aaa",
  },
}));
