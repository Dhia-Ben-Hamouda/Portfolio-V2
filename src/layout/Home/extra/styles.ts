import { colors, Stack, styled, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { Button } from "../../../components";
import { borderRadius } from "../../../utils/constants";

export const LeftContainer = styled(Stack)({
  width: "50%",
  justifyContent: "space-evenly",
  flex: 1,
});

export const Wrapper = styled(Stack)({});

export const RightContainer = styled(Stack)({
  width: "50%",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-start",
});

export const IconContainer = styled(Stack)(({ theme }) => ({
  background: theme.palette.primary.main,
  width: "375px",
  minHeight: "375px",
  marginTop: "4rem",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  borderRadius,
}));

export const ContainerEffect = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: "transparent",
  position: "absolute",
  top: "-1.5rem",
  left: "-1.5rem",
  zIndex: -1,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius,
}));

export const ContainerIcon = styled(FaReact)(({ theme }) => ({
  color: theme.palette.secondary.main,
  width: "300px",
  height: "300px",
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Forte",
  fontSize: "3.75rem",
  color: theme.palette.primary.main,
  fontWeight: "400",
  marginBlock: ".125rem",
}));

export const Greeting = styled(Typography)({
  fontFamily: "Forte",
  fontSize: "2rem",
  fontWeight: "400",
  color: colors.common.white,
});

export const SmallHeading = styled(Typography)({
  fontFamily: "Forte",
  fontSize: "2rem",
  fontWeight: "400",
  color: colors.common.white,
  marginBottom: "1.5rem",
});

export const ButtonContainer = styled(Stack)({
  flexDirection: "row",
  alignSelf: "flex-start",
  gap: "1.25rem",
});

export const StyledButton = styled(Button)(() => ({
  "&:hover": {
    transform: "scale(1.07)",
  },

  "&:nth-of-type(2)": {
    background: "transparent",
    color: colors.common.white,
    border: `1px solid ${colors.common.white}`,
  },
}));
