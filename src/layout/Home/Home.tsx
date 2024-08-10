import { Stack } from "@mui/material";
import { Section } from "../../components";
import {
  StyledButton as Button,
  ButtonContainer,
  ContainerEffect,
  ContainerIcon,
  Greeting,
  Heading,
  IconContainer,
  LeftContainer,
  RightContainer,
  SmallHeading,
  Wrapper,
} from "./extra/styles";

export default function Home() {
  return (
    <Section flexDirection="row" showTitle={false} id="home">
      <LeftContainer>
        <Wrapper>
          <Greeting>Hey, my name is...</Greeting>
          <Heading>Dhia Ben Hamouda</Heading>
          <SmallHeading>
            Creative Full Stack Developer
            <br /> And Ui / UX Designer
          </SmallHeading>
          <ButtonContainer>
            <Button>Portfolio</Button>
            <Button>Resume</Button>
          </ButtonContainer>
        </Wrapper>
        <Stack />
      </LeftContainer>
      <RightContainer>
        <IconContainer>
          <ContainerEffect />
          <ContainerIcon />
        </IconContainer>
      </RightContainer>
    </Section>
  );
}
