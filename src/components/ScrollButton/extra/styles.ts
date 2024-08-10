import { styled } from "@mui/material";

export const StyledButton = styled("button")(({ theme }) => ({
  background: theme.palette.primary.main,
  width: "35px",
  height: "35px",
  borderRadius: "5px",
  color: "#333",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  right: "25px",
  bottom: "25px",
  cursor: "pointer",
  border: "none",
  outline: "none",
  transition: ".5s",

  "&.hidden": {
    visibility: "hidden",
    opacity: "0",
  },
}));
