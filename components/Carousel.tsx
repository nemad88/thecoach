import { HtmlHTMLAttributes, useState, useEffect } from "react";
import styled from "@emotion/styled";

interface CarouselProps extends HtmlHTMLAttributes<HTMLDivElement> {
  width: string;
  slides: number;
}

export default function Carousel(props: CarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      return (prev + 1) % (props.slides + 1);
    });
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (currentIndex === 0) {
      timerId = setTimeout(nextSlide, 0);
    } else {
    }
    timerId = setTimeout(nextSlide, 2000);

    // const intervalId = setInterval(nextSlide, 5000);
    if (isHovering) {
      clearTimeout(timerId);
      return;
    }
    return () => clearTimeout(timerId);
  }, [isHovering, currentIndex]);

  useEffect(() => {
    setTranslateX(-currentIndex * 1000);
  }, [currentIndex]);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    console.log(translateX);
  }, [translateX]);

  return (
    <div>
      <CarouselContainer
        width={props.width}
        id="CarouselContainer"
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <CarouselContent
          currentIndex={currentIndex}
          translateX={translateX}
          id="carousel-content"
        >
          {props.children}
        </CarouselContent>
      </CarouselContainer>
    </div>
  );
}

interface CarouselContainerProps {
  width: string;
}

const CarouselContainer = styled.div<CarouselContainerProps>`
  width: ${(props) => props.width};
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

interface CarouselContentProps {
  translateX: number;
  currentIndex: number;
}

const CarouselContent = styled.div<CarouselContentProps>`
  transform: translateX(${(props) => props.translateX}px);
  
  display: flex;
  transition: ${({ currentIndex }) =>
    currentIndex === 0 ? "unset" : "transform 1s ease-in-out"};
`;
