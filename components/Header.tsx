import React, { HtmlHTMLAttributes } from "react";
import styled from "@emotion/styled";

import Email from "./icons/Email";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Navbar from "./Navbar";
import Button from "./Button";

interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export default function Header({ ...props }: HeaderProps): JSX.Element {
  return (
    <HeaderContainer {...props}>
      {/* Header */}
      <HeadingContainer>
        <StyledH1>Tapodi Barbara Vezetői- és Karrier Coach</StyledH1>
        <Icons>
          <Email />
          <Facebook />
          <Instagram />
        </Icons>
      </HeadingContainer>
      <StyledHr />

      {/* NavigationBar */}
      <Navbar>
        <Button variant="light">Tudj meg többet</Button>
        <Button variant="light">Árak</Button>
        <Button variant="light">Rólam</Button>
        <Button variant="dark" wide>
          Kérj ingyenes visszahívást
        </Button>
      </Navbar>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  margin: 24px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  padding: 0px 24px;
`;

const StyledH1 = styled.h1`
  color: #404040;

  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 5.76px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

const StyledHr = styled.hr`
  width: 100%;
  border: 1px solid #efefef;
  margin: 24px 0px;
`;

// width: 100%;
//   display: flex;
//   flex-direction: row;
//   background: #ffffff;
//   justify-content: center;
//   align-items: center;
//   border-bottom: 1px solid #efefef;
//   margin-bottom: 24px;

//   .wrapper {
//     width: 100%;
//     max-width: 1440px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .icons {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     width: 200px;
//   }

//   h1 {
//     color: #404040;
//     font-family: Inter;
//     font-size: 32px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     letter-spacing: 5.76px;
//   }
