import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
// import { useEffect } from "react";

const Section = styled.section`
  background: linear-gradient(
    168deg,
    ${({ theme }) => theme.body} 79%,
    ${({ theme }) => theme.primary} 111%
  );
  color: ${({ theme }) => theme.text};
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 769px) {
    padding: 30px 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 769px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin: 10px 0;

  @media (max-width: 769px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  width: 70%;
  margin: 10px 0;

  @media (max-width: 769px) {
    width: 100%;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 7% 0 auto;
  text-align: right;

  @media (max-width: 769px) {
    align-items: center;
    text-align: center;
    margin: 0 auto 20px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Video = styled(YouTube)`
  margin: 20px;

  iframe {
    pointer-events: none;
  }

  @media (max-width: 769px) {
    width: auto;
    margin: 10px 0;
  }
  @media (max-width: 1024px) {
    iframe {
      width: 80vw;
      aspect-ratio: 2;
    }
  }
  @media (min-width: 1024px) {
    iframe {
      width: 60vw;
      aspect-ratio: 2;
    }
  }
`;

const VideoSection = () => {
//   useEffect(() => {
//     const handleScroll = (event) => {
//       window.scrollBy({
//         top: event.deltaY,
//         left: 0,
//         behavior: "auto",
//       });
//     };

//     window.addEventListener("wheel", handleScroll);

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, []);
  return (
    <Section id="videoSection" className="anchor">
      <Container>
        <TextContainer>
          <Title>Others 📽️</Title>
          <Text>
            I have a passion for creating videos! Living by the ocean not only
            gives me the chance to surf but also inspires me to capture and
            share surf content. Check out some of my video montages below.
          </Text>
        </TextContainer>
        <VideoContainer>
          <Video className="anchor" videoId="w99F_b_WGGQ" />
          <Video className="anchor" videoId="3QHsrgYqHrA" />
          <Video className="anchor" videoId="pzgzqxfmnhM" />
        </VideoContainer>
      </Container>
    </Section>
  );
};

export default VideoSection;
