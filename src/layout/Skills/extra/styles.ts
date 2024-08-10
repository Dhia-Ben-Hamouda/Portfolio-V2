import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  display: "flex",
  marginTop: "2rem",
}));

export const SkillsContainer = styled(Box)(() => ({
  background: "red",
  width: "50%",
}));

export const SkillsGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
}));

export const SkillWrapper = styled(Box)(() => ({}));

export const AboutContainer = styled(Box)(() => ({
  background: "green",
  width: "50%",
}));
