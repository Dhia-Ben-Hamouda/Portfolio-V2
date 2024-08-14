import { Box, colors, Stack, styled, Typography } from "@mui/material";
import { borderRadius } from "../../../utils/constants";

export const ProjectsContainer = styled(Box)(({ theme }) => ({
  marginBlock: "3rem",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
}));

export const Project = styled(Stack)(() => ({
  background: "#252525",
  padding: "1rem",
  borderRadius,
  minHeight: "400px",
}));

export const Image = styled("img")(() => ({
  width: "100%",
  borderRadius,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Forte",
  color: theme.palette.primary.main,
  textAlign: "center",
  marginBlock: ".5rem",
  fontSize: "1.25rem",
}));

export const Description = styled(Typography)(() => ({
  fontFamily: "Poppins",
  color: colors.common.white,
  fontWeight: "400",
  textAlign: "justify",
  fontSize: ".9rem",
  lineHeight: "1.75rem",
}));

export const ToolsContainer = styled(Box)(() => ({
  display: "flex",
}));

export const ActionsContainer = styled(Box)(() => ({
  display: "flex",
  background: "red",
  justifyContent: "center",
}));
