import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

const images = [
  "/images/banner_1.webp",
  "/images/banner2.webp",
  "/images/banner3.webp",
  "/images/banner4.webp",
  "/images/banner5.webp",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClickReverse = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <header>
      <Container id="hero">
        <ArrowButton onClick={handleClickReverse}>
          <Image
            src="/images/arrowReverse.svg"
            alt="arrow reverse"
            width={45}
            height={45}
          />
        </ArrowButton>

        <ImageWrapper>
          <Image src={images[currentIndex]} alt="vetor" layout="fill" />
        </ImageWrapper>

        <ArrowButton onClick={handleClick}>
          <Image src="/images/arrow.svg" alt="arrow" width={45} height={45} />
        </ArrowButton>
      </Container>
    </header>
  );
};

export default Hero;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100%;
  border-radius: 25px;
  overflow:hidden;
`;

const ArrowButton = styled.button`
  margin: 15px;
  background-color: transparent;
  border: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
  background: #c02a27;
`;

