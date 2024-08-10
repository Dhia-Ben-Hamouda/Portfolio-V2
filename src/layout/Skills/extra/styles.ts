import { Box, colors, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  display: "flex",
  marginTop: "4rem",
  gap: "2rem",
}));

export const SkillsContainer = styled(Box)(() => ({
  width: "50%",
}));

export const SkillsGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
}));

export const SkillWrapper = styled(Box)(() => ({
  width: "95px",
  height: "95px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& > *:not(img)": {
    width: "3rem",
    height: "3rem",
  },
}));

export const AboutContainer = styled(Box)(() => ({
  width: "50%",
  marginTop: "2.5rem",
}));

export const AboutHeading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Forte",
  color: theme.palette.primary.main,
  fontSize: "1.75rem",
  marginBottom: ".5rem",
}));

export const AboutParagraph = styled(Typography)(() => ({
  color: colors.common.white,
  textAlign: "justify",
  lineHeight: "2.5rem",
  fontSize: "1rem",
  fontFamily: "Poppins",
}));

export const StyledImage = styled("img", {
  shouldForwardProp: (prop: string) => !["width", "height"].includes(prop),
})<{ width?: string; height?: string }>(({ width, height }) => ({
  ...(width && { width }),
  ...(height && { height }),
}));
