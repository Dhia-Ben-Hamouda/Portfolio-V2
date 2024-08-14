import { useMemo } from "react";
import { FaCss3Alt, FaEye, FaGithub, FaHtml5, FaJs } from "react-icons/fa";
import { Tools } from "../../../utils/enums";
import {
  ActionsContainer,
  Description,
  Image,
  Project as StyledProject,
  Title,
  ToolsContainer,
} from "../extra/styles";

export interface IProject {
  title: string;
  description: string;
  picture: string;
  tools: Tools[];
  codeLink?: string;
  deploymentLink?: string;
}

export default function Project({
  description,
  title,
  picture,
  tools,
  codeLink,
  deploymentLink,
}: IProject) {
  const toolsMapper = useMemo(
    () => ({
      [Tools.HTML]: <FaHtml5 />,
      [Tools.CSS]: <FaCss3Alt />,
      [Tools.JAVASCRIPT]: <FaJs />,
    }),
    [tools]
  );

  return (
    <StyledProject>
      <Image src={picture} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ToolsContainer>
        {tools?.map((tool) => toolsMapper[tool as keyof typeof toolsMapper])}
      </ToolsContainer>
      <ActionsContainer>
        <FaGithub />
        <FaEye />
      </ActionsContainer>
    </StyledProject>
  );
}
