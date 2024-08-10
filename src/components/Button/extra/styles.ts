import { styled } from "@mui/material";

export const Button = styled("button")(({ theme }) => ({
  fontFamily: "Forte",
  color: "#333",
  background: theme.palette.primary.main,
  padding: "1.2rem 2rem",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: ".5s",
  display: "flex",
  gap: ".5rem",
  alignItems: "center",
  justifyContent: "center",
}));
