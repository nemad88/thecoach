import React, { useState, ButtonHTMLAttributes, CSSProperties } from "react";
import styled from "@emotion/styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "dark" | "light";
  wide?: boolean;
  style?: CSSProperties;
}

export default function Button({
  children,
  variant,
  wide,
  style,
  ...props
}: ButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

  console.log("variant", variant);

  return (
    <ButtonStyled
      onMouseEnter={() => {
        console.log("hover");
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      variant={variant}
      active={isActive}
      wide={wide}
      style={style}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

interface StyledButtonProps {
  variant: "dark" | "light";
  active: boolean;
  wide?: boolean;
}

const ButtonStyled = styled.button<StyledButtonProps>`
  background-color: ${(props) => {
    const darkColor = "#bf9f87";
    const lightColor = "#c8d3db";
    return props?.variant === "dark" ? darkColor : lightColor;
  }};

  filter: ${(props) => {
    console.log(props.active);
    return props.active ? "brightness(95%)" : "brightness(100%)";
  }};

  color: #ffffff;
  font-weight: 400;
  text-transform: uppercase;
  width: ${(props) => (props?.wide ? "280px" : "240px")};

  height: 38px;

  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
