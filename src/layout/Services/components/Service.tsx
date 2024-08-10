import { useTheme } from "@mui/material";
import { FaCode, FaPaintBrush, FaPalette } from "react-icons/fa";
import { Description, Service as StyledService, Title } from "../extra/styles";

export interface IService {
  icon: string;
  title: string;
  description: string;
}

export default function Service({ description, icon, title }: IService) {
  const { palette } = useTheme();

  const iconMapper = {
    FaPaintBrush: (
      <FaPaintBrush
        style={{ marginBottom: "1rem" }}
        color={palette.primary.main}
        size="2.5rem"
      />
    ),
    FaPalette: (
      <FaPalette
        style={{ marginBottom: "1rem" }}
        color={palette.primary.main}
        size="2.5rem"
      />
    ),
    FaCode: (
      <FaCode
        style={{ marginBottom: "1rem" }}
        color={palette.primary.main}
        size="2.5rem"
      />
    ),
  };

  return (
    <>
      <StyledService>
        {iconMapper[icon as keyof typeof iconMapper]}
        <Title>{title}</Title>
        <Description>{description}</Description>
      </StyledService>
    </>
  );
}
