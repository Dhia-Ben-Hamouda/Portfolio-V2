import { Box, colors, Stack, styled, Typography } from "@mui/material";

export const Container = styled(Stack)(() => ({
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
}));

export const MoreInfo = styled(Typography)(() => ({
  color: colors.common.white,
}));

export const IconsContainer = styled(Box)(() => ({
  display: "flex",
  gap: ".75rem",
}));

export const CopyrightInfo = styled(Typography)(() => ({
  color: colors.common.white,
}));
