import { Box, colors, Stack, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  marginTop: "5rem",
  display: "flex",
  gap: "3rem",
}));

export const FormContainer = styled(Stack)(() => ({
  width: "60%",
  gap: ".65rem",
}));

export const InfoContainer = styled(Stack)(() => ({
  width: "40%",
  padding: "1rem",
  justifyContent: "space-around",
  // alignItems: "center",
}));

export const InfoText = styled(Typography)(() => ({
  color: colors.common.white,
  fontFamily: "Poppins",
  fontSize: ".9rem",
  fontWeight: "500",
}));

export const InfoWrapper = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
  gap: "1.5rem",
}));

export const IconContainer = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.primary.main,
  width: "60px",
  height: "60px",
  borderRadius: "50%",
}));
