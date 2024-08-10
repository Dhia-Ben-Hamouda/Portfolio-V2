import { PropsWithChildren } from "react";
import {
  Container,
  Section as StyledSection,
  SubTitle,
  Title,
  TitleContainer,
} from "./extra/styles";
import { StackProps } from "@mui/material";

interface ISection extends StackProps {
  title?: string;
  subTitle?: string;
  showTitle?: boolean;
}

export default function Section({
  children,
  title,
  subTitle,
  showTitle = true,
  ...rest
}: PropsWithChildren<ISection>) {
  return (
    <>
      <StyledSection>
        <Container {...rest}>
          {showTitle && (
            <TitleContainer>
              <Title>{title}</Title>
              <SubTitle>{subTitle}</SubTitle>
            </TitleContainer>
          )}
          {children}
        </Container>
      </StyledSection>
    </>
  );
}
