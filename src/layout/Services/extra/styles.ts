import { Box, colors, Stack, styled, Typography } from "@mui/material";
import { Section } from "../../../components";
import { borderRadius } from "../../../utils/constants";

export const StyledSection = styled(Section)(() => ({
  flexDirection: "column",
  gap: "2rem",
}));

export const ServicesGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1.5rem",
  marginTop: "2rem",
}));

export const Service = styled(Stack)(() => ({
  background: "#272727",
  alignItems: "center",
  minHeight: "300px",
  padding: "3rem 1.5rem",
  borderRadius,
}));

export const Title = styled(Typography)(() => ({
  color: colors.common.white,
  fontFamily: "Forte",
  fontSize: "1.5rem",
  marginBottom: "1rem",
}));

export const Description = styled(Typography)(() => ({
  color: colors.common.white,
  textAlign: "center",
  lineHeight: "2rem",
  fontFamily: "Poppins",
  fontSize: ".9rem",
}));
