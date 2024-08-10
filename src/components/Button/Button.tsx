import { ButtonProps } from "@mui/material";
import { PropsWithChildren } from "react";
import { Button as StyledButton } from "./extra/styles";

interface IButton extends ButtonProps {}

export default function Button({
  children,
  ...rest
}: PropsWithChildren<IButton>) {
  return (
    <>
      <StyledButton {...rest}>{children}</StyledButton>
    </>
  );
}
