import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: linear-gradient(
    207deg,
    ${({ theme }) => theme.body} 77%,
    ${({ theme }) => theme.primary} 100%
  );
  color: ${({ theme }) => theme.text};
  padding: 50px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto 0 7%;
  text-align: left;

  @media (max-width: 769px) {
    margin-left: 0px;
  }
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

const ResumeItem = styled.div`
  margin-bottom: 30px;
`;

const Date = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Position = styled.h4`
  font-size: 1.5rem;
  margin: 5px 0;
`;

const Company = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 10px 0;
`;

const ResumeSection = () => {
  return (
    <Section id="resume" className="anchor">
      <Container>
        <Subtitle>RESUME</Subtitle>
        <Title>Experience</Title>

        <ResumeItem>
          <Date>April 2024 - Present</Date>
          <Position>Software engineer</Position>
          <Company>Surf Camp Australia</Company>
          <Description>
            Developing a progressive web app using Node.js and React to handle
            upgrade bookings, process refunds, manage additional requests, and
            send notifications to the team.
          </Description>
        </ResumeItem>

        <ResumeItem>
          <Date>Feb 2023 - Feb 2024</Date>
          <Position>Software engineer</Position>
          <Company>Airbus Defence&Space</Company>
          <Description>
            Identify business automation needs, create a Google-based app to
            meet them using Apps Script or AppSheet, and ensure successful
            testing, deployment, documentation, and user acceptance.
          </Description>
        </ResumeItem>

        <ResumeItem>
          <Date>Jan 2022 - Jan 2023</Date>
          <Position>Software engineer</Position>
          <Company>Airbus Commercial</Company>
          <Description>
            Assess existing processes in the Microsoft environment for migration
            to Google, convert VBA-based applications to Apps Script, and
            document the entire transition process.
          </Description>
        </ResumeItem>

        <ResumeItem>
          <Date>Jan 2020 - Sept 2021</Date>
          <Position>Software engineer</Position>
          <Company>Shaple</Company>
          <Description>
            Generate documentation, user guides, and articles for three Google
            add-ons, while also managing code updates, offering support, and
            aiding in maintenance tasks. Additionally, develop web applications
            for client projects.
          </Description>
        </ResumeItem>
      </Container>
    </Section>
  );
};

export default ResumeSection;
