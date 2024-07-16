import React from "react";
import styled from "styled-components";
import profilePicture from "../../Assets/secondary-profile-picture.JPEG";

const Section = styled.section`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.text};
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 769px) {
    display: inline;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  height: 100%;

  @media (max-width: 769px) {
    width: 50%;
  }
`;

const Content = styled.div`
  flex: 2;
  padding: 20px;
`;

const Subtitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 10px 0;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 10px 0;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.extraDark};
  border-radius: 5px;

  @media (max-width: 769px) {
    justify-content: center;
  }
`;

const Skill = styled.div`
  flex: 1 1 20%;
  margin: 10px;
  max-width: 100px;

  @media (max-width: 769px) {
    flex: 1 1 30%;
  }
`;

const SkillTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Stars = styled.div`
  color: ${({ theme }) => theme.primary};
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
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  @media (max-width: 769px) {
    margin-left: 25%;
    width: 50%;
  }
`;

const AboutSection = () => {
  return (
    <Section id="about" className="anchor">
      <Container>
        <ImageContainer>
          <Image src={profilePicture} alt="Razan Smith" />
        </ImageContainer>
        <Content>
          <Subtitle>ABOUT ME</Subtitle>
          <Title>Who Am I</Title>
          <Text>
            Passionate and creative full-stack software developer with a robust
            foundation in mathematics and a love for problem-solving.
          </Text>
          <Text>
            Since transitioning to freelancing post-graduation, I have honed my
            skills across various technologies and industries, thriving on the
            challenges and opportunities each project brings.
          </Text>
          <Skills className="anchor">
            <Skill>
              <SkillTitle>Html</SkillTitle>
              <Stars>★★★★★</Stars>
            </Skill>
            <Skill>
              <SkillTitle>Css</SkillTitle>
              <Stars>★★★★★</Stars>
            </Skill>
            <Skill>
              <SkillTitle>Javascript</SkillTitle>
              <Stars>★★★★★</Stars>
            </Skill>
            <Skill>
              <SkillTitle>Apps Script</SkillTitle>
              <Stars>★★★★★</Stars>
            </Skill>
            <Skill>
              <SkillTitle>Appsheet</SkillTitle>
              <Stars>★★★★★</Stars>
            </Skill>
            <Skill>
              <SkillTitle>Google Suite</SkillTitle>
              <Stars>★★★★★</Stars>
            </Skill>
            <Skill>
              <SkillTitle>React.js</SkillTitle>
              <Stars>★★★★☆</Stars>
            </Skill>
            <Skill>
              <SkillTitle>Node.js</SkillTitle>
              <Stars>★★★★☆</Stars>
            </Skill>
          </Skills>
          <Button>
            <a href="https://lidia-rbr.github.io/my-portfolio/RESUMELIDIA2024.pdf" download="RESUMELIDIA2024.pdf">
              Download CV
            </a>
          </Button>
        </Content>
      </Container>
    </Section>
  );
};

export default AboutSection;
