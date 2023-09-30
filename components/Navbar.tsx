import React, { HtmlHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface NavbarProps extends HtmlHTMLAttributes<HTMLElement> {}

export default function Navbar({
  children,
  ...props
}: NavbarProps): JSX.Element {
  return <StyledNavbar {...props}>{children}</StyledNavbar>;
}

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  padding: 0px 24px;
`;
