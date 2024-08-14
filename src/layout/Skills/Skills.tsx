import { Section } from "../../components";
import { calculateYearDifference } from "../../utils/functions";
import MySkills from "./components/MySkills";
import {
  AboutContainer,
  AboutHeading,
  AboutParagraph,
  SkillsContainer,
  Wrapper,
} from "./extra/styles";

export default function Skills() {
  return (
    <>
      <Section title="Skills" subTitle="Technologies i've used" id="skills">
        <Wrapper>
          <SkillsContainer>
            <MySkills />
          </SkillsContainer>
          <AboutContainer>
            <AboutHeading>More about me</AboutHeading>
            <AboutParagraph>
              My name is Dhia Ben Hamouda and i'm mainly a frontend web
              developer with over{" "}
              {calculateYearDifference(new Date("2021-01-01"))} years of
              experience. I'm really passionate about making good-looking
              responsive websites / apps from scratch. I'm currently learning UI
              / UX Design , Backend Development and Mobile Development. I'm
              currently working in Proxym Group as a frontend developer ( React
              JS / React Native )
            </AboutParagraph>
          </AboutContainer>
        </Wrapper>
      </Section>
    </>
  );
}
