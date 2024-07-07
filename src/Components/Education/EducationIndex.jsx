import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.text};
  padding: 50px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 7% 0 auto;
  text-align: right;

    @media (max-width: 769px) {
    margin-right: 0px;
  }
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

const EducationSection = () => {
  return (
    <Section id="education" className="anchor">
      <Container>
        <Title>Education</Title>

        <ResumeItem>
          <Date>2017 - 2020</Date>
          <Position>Master's Degree in Engineering</Position>
          <Company>ESILV, Paris</Company>
          <Description>
          I studied general and informatic engineering in France, developing a strong foundation in both fields. I also spent a quarter in Riverside, California, broadening my perspectives. During this time, I served as president of a tutoring association, honing my leadership and mentoring skills.
          </Description>
        </ResumeItem>

        <ResumeItem>
          <Date>2015 - 2017</Date>
          <Position>Undergraduate</Position>
          <Company>2-year intensive undergraduate program in advanced mathematics, Clermont</Company>
          <Description>
          I completed two years of preparatory classes specializing in complex mathematics to prepare for engineering school entrance exams. This rigorous training enhanced my problem-solving skills and solidified my foundation in advanced mathematical concepts.
          </Description>
        </ResumeItem>
      </Container>
    </Section>
  );
};

export default EducationSection;
