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
} from "../../../assets/images";
import { SkillsGrid, SkillWrapper, StyledImage } from "../extra/styles";

export default function MySkills() {
  return (
    <>
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
          <StyledImage src={vue} width="70%" alt="vue logo" />
        </SkillWrapper>
        <SkillWrapper>
          <SiMui color="#00A7F2" />
        </SkillWrapper>
        <SkillWrapper>
          <StyledImage width="42%" src={typescript} alt="typescript logo" />
        </SkillWrapper>
        <SkillWrapper>
          <SiRedux color="#7046B2" />
        </SkillWrapper>
        <SkillWrapper>
          <StyledImage src={query} width="50%" alt="react query logo" />
        </SkillWrapper>
        <SkillWrapper>
          <FaGitAlt color="#E44C30" />
        </SkillWrapper>
        <SkillWrapper>
          <FaSass color="#CF649A" />
        </SkillWrapper>
        <SkillWrapper>
          <SiDocker color="#02A1E9" />
        </SkillWrapper>

        <SkillWrapper>
          <StyledImage width="75%" src={java} alt="java logo" />
        </SkillWrapper>
        <SkillWrapper>
          <SiSpringboot color="#71B544" />
        </SkillWrapper>
        <SkillWrapper>
          <StyledImage width="50%" src={mysql} alt="mysql logo" />
        </SkillWrapper>
        <SkillWrapper>
          <StyledImage width="50%" src={aws} alt="aws logo" />
        </SkillWrapper>
        <SkillWrapper>
          <StyledImage width="30%" src={figma} alt="figma logo" />
        </SkillWrapper>
      </SkillsGrid>
    </>
  );
}
