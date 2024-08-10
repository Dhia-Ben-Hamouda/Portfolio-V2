import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiMongodb, SiMui, SiRedux, SiTailwindcss } from "react-icons/si";
import { figma, query, typescript, vue } from "../../assets/images";
import { Section } from "../../components";
import {
  AboutContainer,
  SkillsContainer,
  SkillsGrid,
  Wrapper,
} from "./extra/styles";

export default function Skills() {
  return (
    <>
      <Section title="Skills" subTitle="Technologies i've used" id="skills">
        <Wrapper>
          <SkillsContainer>
            <SkillsGrid>
              <div className="skill">
                <FaHtml5 className="icon" color="#F25320" />
              </div>
              <div className="skill">
                <FaCss3Alt className="icon" color="#279FD5" />
              </div>
              <div className="skill">
                <FaJs className="icon" color="#E4D04B" />
              </div>
              <div className="skill">
                <FaReact className="icon" color="#5CCFEE" />
              </div>
              <div className="skill">
                <SiTailwindcss className="icon" color="#06ADC9" />
              </div>
              <div className="skill">
                <FaNodeJs className="icon" color="#4F9640" />
              </div>
              <div className="skill">
                <SiMongodb className="icon" color="#449E45" />
              </div>
              <div className="skill">
                <img src={vue} style={{ width: "70%" }} alt="vue logo" />
              </div>
              <div className="skill">
                <SiMui className="icon" color="#00A7F2" />
              </div>
              <div className="skill">
                <img
                  style={{ width: "42%" }}
                  src={typescript}
                  alt="typescript logo"
                />
              </div>
              <div className="skill">
                <SiRedux className="icon" color="#7046B2" />
              </div>
              <div className="skill">
                <img
                  src={query}
                  style={{ width: "50%" }}
                  alt="react query logo"
                />
              </div>
              <div className="skill">
                <FaGitAlt className="icon" color="#E44C30" />
              </div>
              <div className="skill">
                <FaSass className="icon" color="#CF649A" />
              </div>
              <div className="skill">
                <img src={figma} alt="figma logo" />
              </div>
            </SkillsGrid>
          </SkillsContainer>
          <AboutContainer></AboutContainer>
        </Wrapper>
      </Section>
    </>
  );
}
