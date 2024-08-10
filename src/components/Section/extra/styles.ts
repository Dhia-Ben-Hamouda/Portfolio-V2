import { colors, Stack, styled, Typography } from "@mui/material";

export const Section = styled("section")({
  display: "flex",
  width: "100%",
});

export const Container = styled(Stack)(() => ({
  minHeight: "calc(100vh - 80px)",
  maxWidth: "1100px",
  width: "100%",
  margin: "auto",
  display: "flex",
}));

export const TitleContainer = styled(Stack)(() => ({
  width: "100%",
  alignItems: "center",
}));

export const Title = styled(Typography)(() => ({
  fontFamily: "Forte",
  fontSize: "1.75rem",
  color: colors.common.white,
  fontWeight: "400",
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Forte",
  fontSize: "1.25rem",
  color: theme.palette.primary.main,
  position: "relative",
  fontWeight: "400",

  "&::after": {
    content: "''",
    background: "white",
    width: "1.25rem",
    height: ".25rem",
    borderRadius: "50px",
    position: "absolute",
    top: "55%",
    transform: "translateY(-50%)",
    right: "-32px",
  },

  "&::before": {
    content: "''",
    background: "white",
    width: "1.25rem",
    height: ".25rem",
    borderRadius: "50px",
    position: "absolute",
    top: "55%",
    transform: "translateY(-50%)",
    left: "-32px",
  },
}));
