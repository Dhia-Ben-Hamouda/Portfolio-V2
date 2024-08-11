import { Stack } from "@mui/material";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Section, TextField } from "../../components";
import {
  FormContainer,
  IconContainer,
  InfoContainer,
  InfoText,
  InfoWrapper,
  Wrapper,
} from "./extra/styles";

export default function Contact() {
  return (
    <>
      <Section title="Contact" subTitle="Get in touch with me" id="contact">
        <Wrapper>
          <FormContainer>
            <Stack gap=".65rem" direction={"row"}>
              <TextField sx={{ flex: 0.5 }} label="Enter name..." />
              <TextField sx={{ flex: 0.5 }} label="Enter subject..." />
            </Stack>
            <TextField label="Enter email..." />
            <TextField multiline rows={5} label="Enter message..." />
            <Button>Send message</Button>
          </FormContainer>
          <InfoContainer>
            <InfoWrapper>
              <IconContainer>
                <FaPhoneAlt color="#333" size="1.25rem" />
              </IconContainer>
              <InfoText>Phone: +216 24 684 936</InfoText>
            </InfoWrapper>
            <InfoWrapper>
              <IconContainer>
                <FaEnvelope color="#333" size="1.25rem" />
              </IconContainer>
              <InfoText>Email: dhiabenhamouda.5@gmail.com</InfoText>
            </InfoWrapper>
            <InfoWrapper>
              <IconContainer>
                <FaLocationDot color="#333" size="1.25rem" />
              </IconContainer>
              <InfoText>Location: Tunisia</InfoText>
            </InfoWrapper>
          </InfoContainer>
        </Wrapper>
      </Section>
    </>
  );
}
