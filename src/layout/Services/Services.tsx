import { useMemo } from "react";
import Service, { IService } from "./components/Service";
import { ServicesGrid, StyledSection } from "./extra/styles";

export default function Services() {
  const services: IService[] = useMemo(
    () => [
      {
        icon: "FaPaintBrush",
        title: "Ui / UX Solutions",
        description:
          "I will help you create a breathtaking design for your website / mobile app using renowned ui / ux tools like Figma and adobe XD",
      },
      {
        icon: "FaPalette",
        title: "Frontend Development",
        description:
          "I will help you create a stunning frontend for your website / mobile app using modern day frontend frameworks like Sass and React JS",
      },
      {
        icon: "FaCode",
        title: "Backend Development",
        description:
          "I will help you create the backend of your website / mobile app using node JS Express JS and MongoDB",
      },
    ],
    []
  );

  return (
    <>
      <StyledSection
        title="Services"
        subTitle="What i provide"
        showTitle
        id="services"
      >
        <ServicesGrid>
          {services?.map(({ description, icon, title }, index) => (
            <Service
              key={index}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </ServicesGrid>
      </StyledSection>
    </>
  );
}
