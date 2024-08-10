import { Typography } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  Container,
  CopyrightInfo,
  IconsContainer,
  MoreInfo,
} from "./extra/styles";

export default function Footer() {
  return (
    <>
      <Container>
        <MoreInfo>for more information, follow me on :</MoreInfo>
        <IconsContainer>
          <Typography component={"a"} href="#">
            <FaFacebook size="2rem" color="white" />
          </Typography>
          <Typography component={"a"} href="#">
            <FaLinkedin size="2rem" color="white" />
          </Typography>
          <Typography component={"a"} href="#">
            <FaGithub size="2rem" color="white" />
          </Typography>
          <Typography component={"a"} href="#">
            <FaYoutube size="2rem" color="white" />
          </Typography>
        </IconsContainer>
        <CopyrightInfo>
          Copyright &copy; {new Date().getFullYear()} Dhia Ben Hamouda All
          rights reserved
        </CopyrightInfo>
      </Container>
    </>
  );
}
