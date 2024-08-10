import { Stack } from "@mui/material";
import { useCallback } from "react";
import toast from "react-hot-toast";
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
  const openResume = useCallback(() => {
    toast.error("not implemented yet");
  }, []);

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
            <Button onClick={openResume}>Resume</Button>
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
