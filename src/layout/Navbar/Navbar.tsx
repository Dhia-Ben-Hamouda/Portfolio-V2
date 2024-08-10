import { Box } from "@mui/material";
import {
  AnimatedIcon,
  DesktopList,
  Header,
  Link,
  ListItem,
  Nav,
} from "./extra/styles";

export default function Navbar() {
  return (
    <>
      <Header>
        <Nav>
          <AnimatedIcon size="2rem" />
          <Box />
          <DesktopList>
            <ListItem>
              <Link href="#">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="#services">Services</Link>
            </ListItem>
            <ListItem>
              <Link href="#skills">Skills</Link>
            </ListItem>
            <ListItem>
              <Link href="#projects">Projects</Link>
            </ListItem>
            <ListItem>
              <Link href="#contact">Contact</Link>
            </ListItem>
          </DesktopList>
        </Nav>
      </Header>
    </>
  );
}
