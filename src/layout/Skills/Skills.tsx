import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiDocker,
  SiMongodb,
  SiMui,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import {
  aws,
  figma,
  java,
  mysql,
  query,
  typescript,
  vue,
} from "../../assets/images";
import { Section } from "../../components";
import {
  AboutContainer,
  AboutHeading,
  AboutParagraph,
  SkillsContainer,
  SkillsGrid,
  SkillWrapper,
  Wrapper,
} from "./extra/styles";

export default function Skills() {
  return (
    <>
      <Section title="Skills" subTitle="Technologies i've used" id="skills">
        <Wrapper>
          <SkillsContainer>
            <SkillsGrid>
              <SkillWrapper>
                <FaHtml5 color="#F25320" />
              </SkillWrapper>
              <SkillWrapper>
                <FaCss3Alt color="#279FD5" />
              </SkillWrapper>
              <SkillWrapper>
                <FaJs color="#E4D04B" />
              </SkillWrapper>
              <SkillWrapper>
                <FaReact color="#5CCFEE" />
              </SkillWrapper>
              <SkillWrapper>
                <SiTailwindcss color="#06ADC9" />
              </SkillWrapper>
              <SkillWrapper>
                <FaNodeJs color="#4F9640" />
              </SkillWrapper>
              <SkillWrapper>
                <SiMongodb color="#449E45" />
              </SkillWrapper>
              <SkillWrapper>
                <img src={vue} style={{ width: "70%" }} alt="vue logo" />
              </SkillWrapper>
              <SkillWrapper>
                <SiMui color="#00A7F2" />
              </SkillWrapper>
              <SkillWrapper>
                <img
                  style={{ width: "42%" }}
                  src={typescript}
                  alt="typescript logo"
                />
              </SkillWrapper>
              <SkillWrapper>
                <SiRedux color="#7046B2" />
              </SkillWrapper>
              <SkillWrapper>
                <img
                  src={query}
                  style={{ width: "50%" }}
                  alt="react query logo"
                />
              </SkillWrapper>
              <SkillWrapper>
                <FaGitAlt color="#E44C30" />
              </SkillWrapper>
              <SkillWrapper>
                <FaSass color="#CF649A" />
              </SkillWrapper>
              <SkillWrapper>
                <img style={{ width: "30%" }} src={figma} alt="figma logo" />
              </SkillWrapper>
              <SkillWrapper>
                <img style={{ width: "75%" }} src={java} alt="java logo" />
              </SkillWrapper>
              <SkillWrapper>
                <SiSpringboot color="#71B544" />
              </SkillWrapper>
              <SkillWrapper>
                <img style={{ width: "50%" }} src={mysql} alt="mysql logo" />
              </SkillWrapper>
              <SkillWrapper>
                <img style={{ width: "50%" }} src={aws} alt="aws logo" />
              </SkillWrapper>
              <SkillWrapper>
                <SiDocker color="#0872BA" />
              </SkillWrapper>
            </SkillsGrid>
          </SkillsContainer>
          <AboutContainer>
            <AboutHeading>More about me</AboutHeading>
            <AboutParagraph>
              My name is Dhia Ben Hamouda and i'm mainly a frontend web
              developer with over 3 years of experience. I'm really passionate
              about making good-looking responsive websites / apps from scratch.
              I'm currently learning UI / UX Design , Backend Development and
              Mobile Development. I'm currently working in Proxym Group as a
              frontend developer ( React / React Native)
            </AboutParagraph>
          </AboutContainer>
        </Wrapper>
      </Section>
    </>
  );
}
