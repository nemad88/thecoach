import styled from "@emotion/styled";
import { HtmlHTMLAttributes } from "react";

interface SectionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  imageSrc: string;
}

export default function Section({
  reverse,
  imageSrc,
}: SectionProps): JSX.Element {
  return (
    <StyledSection reverse={reverse}>
      <div>
        <div className="box box--left">
          <StyledImage src={imageSrc}></StyledImage>
        </div>
        <div className="box box--right">Right</div>
      </div>
    </StyledSection>
  );
}

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface StyledSectionProps {
  reverse?: boolean;
}

const StyledSection = styled.section<StyledSectionProps>``;
