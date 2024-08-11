import { Stack } from "@mui/material";
import { Button, Section, TextField } from "../../components";
import { FormContainer, InfoContainer, Wrapper } from "./extra/styles";

export default function Contact() {
  return (
    <>
      <Section title="Contact" subTitle="Get in touch with me" id="contact">
        <Wrapper>
          <FormContainer>
            <Stack gap=".5rem" direction={"row"}>
              <TextField sx={{ flex: 0.5 }} label="Enter name..." />
              <TextField sx={{ flex: 0.5 }} label="Enter subject..." />
            </Stack>
            <TextField label="Enter email..." />
            <TextField multiline rows={5} label="Enter message..." />
            <Button>Send message</Button>
          </FormContainer>
          <InfoContainer></InfoContainer>
        </Wrapper>
      </Section>
    </>
  );
}
