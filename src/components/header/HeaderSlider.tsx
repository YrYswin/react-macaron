import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface HeaderSliderProps {
  slides: { text: string; imageUrl: string }[];
}

const HeaderSlider: React.FC<HeaderSliderProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <SliderItem key={index} $show={index === currentSlideIndex}>
          <SliderImage src={slide.imageUrl} alt={`Slide ${index + 1}`} />
          <span style={{ paddingLeft: "12px" }}>{slide.text}</span>
        </SliderItem>
      ))}
    </SliderContainer>
  );
};

export default HeaderSlider;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  overflow: hidden;
`;

const SliderItem = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ $show }) => ($show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: lightblue;
  z-index: ${({ $show }) => ($show ? "1" : "-1")};
`;

const SliderImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
