import { colors, styled } from "@mui/material";
import { FaReact } from "react-icons/fa";

export const Header = styled("header")(({ theme }) => ({
  background: theme.palette.secondary.main,
  // position: "sticky",
  // top: "0px",
  zIndex: 9999,
  transition: ".5s",

  // "&.animated": {
  //   boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
  //   background: "#313131",
  // },
}));

export const Nav = styled("nav")({
  maxWidth: "1100px",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: "1.75rem",
  transition: ".5s",

  // "&.animated": {
  //   paddingBlock: "1.25rem",
  // },
});

export const DesktopList = styled("ul")({
  display: "flex",
  gap: "1.75rem",
});

export const ListItem = styled("li")({
  fontWeight: "500",
});

export const Link = styled("a")({
  color: colors.common.white,
  fontFamily: "Poppins",
  fontSize: ".95rem",
  position: "relative",

  "&::after": {
    content: "''",
    width: "100%",
    height: "1px",
    position: "absolute",
    right: "0px",
    bottom: "-10px",
    transition: ".7s",
    borderRadius: "50px",
    background: colors.common.white,
    transform: "scale(0, 1)",
  },

  "&:hover::after": {
    transform: "scale(1,1)",
  },
});

export const AnimatedIcon = styled(FaReact)(({ theme }) => ({
  color: theme.palette.primary.main,
  animation: "spin 7.5s infinite linear forwards",

  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },

    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));
