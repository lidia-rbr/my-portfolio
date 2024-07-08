import React from "react";
import styled from "styled-components";
import '@fortawesome/fontawesome-free/css/all.css';

const Section = styled.section`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.text};
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${({ theme }) => theme.text};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 769px) {
    display: inline;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin: 10px 0;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 10px 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  font-size: 1rem;
  margin-right: 10px;
  color: ${({ theme }) => theme.primary};
`;

const Contact = () => {
  return (
    <Section id="contact" className="anchor">
      <Container>
        <Title>Contact Me</Title>
        <Text>
          Feel free to reach out to me through any of the following channels:
        </Text>
        <ContactInfo>
          <ContactItem>
            <Icon>
              <i className="fa fa-envelope" aria-hidden="true" />
            </Icon>
            <a href="mailto:your-email@example.com">lidia.calicia@gmail.com</a>
          </ContactItem>
          <ContactItem>
            <Icon>
              <i className="fa fa-phone" aria-hidden="true" />
            </Icon>
            <span>+61 412 759 215 or +33 6 70 05 34 32</span>
          </ContactItem>
          <ContactItem>
            <Icon>
              <i className="fa fa-linkedin" aria-hidden="true" />
            </Icon>
            <a
              href="https://www.linkedin.com/in/lidia-r-b56b73150/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </ContactItem>
        </ContactInfo>
      </Container>
    </Section>
  );
};

export default Contact;
