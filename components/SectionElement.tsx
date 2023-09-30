import styled from "@emotion/styled";
import { HtmlHTMLAttributes } from "react";
import Button from "./Button";
import background from "../public/images/background.jpg";

interface SectionElementProps extends HtmlHTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  imageSrc: string;
  title: string;
  text: string;
  ctaButtonLabel: string;
}

export default function SectionElement({
  reverse,
  imageSrc,
  title,
  text,
  ctaButtonLabel,
}: SectionElementProps): JSX.Element {
  return (
    <ElementWrapper reverse={reverse}>
      <PictureBox>
        <StyledImage src={imageSrc}></StyledImage>
      </PictureBox>
      <Box>
        <Title>{title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
        <StyledButton variant="light">{ctaButtonLabel}</StyledButton>
      </Box>
    </ElementWrapper>
  );
}

interface ElementWrapperProps {
  reverse?: boolean;
}

const ElementWrapper = styled.div<ElementWrapperProps>`
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => (props?.reverse ? "row-reverse" : "row")};
  width: 100%;
  max-width: 1440px;
`;

const PictureBox = styled.div`
  width: 50%;
  max-height: 720px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 24px;
  width: 50%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom center;
`;

const Title = styled.h1`
  color: #404040;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 8.64px;
`;

const Text = styled.p`
  color: #000;

  font-size: 20px;
  font-style: normal;
  font-weight: 200 !important;
  line-height: 200%;
`;

const StyledButton = styled(Button)`
  width: 380px;
`;
