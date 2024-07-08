import React from "react";
import styled from "styled-components";
import profilePicture from "../../Assets/main-profile-picture.png";

const Section = styled.section`
  background: linear-gradient(
    127deg,
    ${({ theme }) => theme.extraDark} 57%,
    ${({ theme }) => theme.primary} 100%
  );
  color: ${({ theme }) => theme.text};
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 70vh;
  overflow: hidden;

  @media (max-width: 769px) {
    padding: 30px;
    margin-top: 5vh;
    min-height: 40vh;
    align-items: flex-start;
  }

  @media (min-width: 769px) and (max-width: 1124px) {
    min-height: 40vh;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  z-index: 2;
  padding: 20px;
  margin-left: 10%;

  @media (max-width: 769px) {
    padding: 10px;
    margin-left: 0px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: absolute;
  width: 70vh;
  height: 79vh;
  right: 1px;
  bottom: 0;
  background: url(${profilePicture}) no-repeat center center;
  background-size: cover;
  max-width: 50%;
  max-height: 100%;
  z-index: 1;

  @media (max-width: 769px) {
    height: 31vh;
  }
  @media (min-width: 769px) and (max-width: 1124px) {
    height: 42vh;
  }
`;

const Name = styled.h2`
  font-size: 6vw;
  margin: 0;

  @media (max-width: 769px) {
    font-size: 10vw;
  }
`;

const Subtitle = styled.p`
  font-size: 3vw;
  color: ${({ theme }) => theme.primary};
  margin: 10px 0;

  @media (max-width: 769px) {
    font-size: 7vw;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const MainSection = () => {
  const handleEmailLinkClick = (event) => {
    event.preventDefault();
    const mailtoLink = "mailto:lidia.calicia@gmail.com";
    window.location.href = mailtoLink;
  };

  return (
    <Section id="main" className="anchor">
      <TextContainer>
        <h1>Hello, My Name Is</h1>
        <Name>Lidia Ribeiro</Name>
        <Subtitle> A Creative Full Stack Developer</Subtitle>
        <Button onClick={handleEmailLinkClick}>
            Let's chat!
        </Button>
      </TextContainer>
      <ImageContainer />
    </Section>
  );
};

export default MainSection;
