import { project1 } from "../../assets/images/projects";
import { Section } from "../../components";
import { Tools } from "../../utils/enums";
import Project, { IProject } from "./components/Project";
import { ProjectsContainer } from "./extra/styles";

const projects: IProject[] = [
  {
    title: "Manage Landing Page",
    description:
      "in this project i implemented an already made design from frontend mentor using html css and javascript",
    picture: project1,
    tools: [Tools.HTML],
  },
  {
    title: "Manage Landing Page",
    description:
      "in this project i implemented an already made design from frontend mentor using html css and javascript",
    picture: project1,
    tools: [],
  },
  {
    title: "Manage Landing Page",
    description:
      "in this project i implemented an already made design from frontend mentor using html css and javascript",
    picture: project1,
    tools: [],
  },
  {
    title: "Manage Landing Page",
    description:
      "in this project i implemented an already made design from frontend mentor using html css and javascript",
    picture: project1,
    tools: [],
  },
];

export default function Projects() {
  return (
    <>
      <Section title="Projects" subTitle="Things i've created" id="projects">
        <ProjectsContainer>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </ProjectsContainer>
      </Section>
    </>
  );
}
