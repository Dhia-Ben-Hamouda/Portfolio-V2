import { TextFieldProps } from "@mui/material";
import { StyledField } from "./extra/styles";

type ITextField = {} & TextFieldProps;

export default function TextField({ ...rest }: ITextField) {
  return <StyledField {...rest} />;
}
