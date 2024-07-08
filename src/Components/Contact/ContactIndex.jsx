import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.css";
import contactPicture from "../../Assets/contact-picture.JPEG";

const Section = styled.section`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.text};
  padding: 50px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;

  a {
    color: ${({ theme }) => theme.text};
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 70%;
  margin: auto;
  text-align: left;
  align-items: center;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const ContactLeft = styled.div`
  float: left;
  margin-right: auto;
`;

const ContactRight = styled.div`
  float: right;
  margin-left: auto;
  width: 50%;

  @media (max-width: 769px) {
    display: none;
  }

  @media (min-width: 500px) and (max-width: 1124px) {
    width: 30%;
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
  margin-top: 20px;
  flex-direction: column;
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

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  height: 100%;

  @media (max-width: 769px) {
    width: 50%;
  }
`;

const Contact = () => {
  return (
    <Section id="contact" className="anchor">
      <Container>
        <ContactLeft>
          <Title>Contact Me</Title>
          <Text>
            Feel free to reach out to me through any of the following channels:
          </Text>
          <ContactInfo>
            <ContactItem>
              <Icon>
                <i className="fa fa-envelope" aria-hidden="true" />
              </Icon>
              <a href="mailto:your-email@example.com">
                lidia.calicia@gmail.com
              </a>
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
        </ContactLeft>
        <ContactRight>
          <Image src={contactPicture} alt="Razan Smith" />
        </ContactRight>
      </Container>
    </Section>
  );
};

export default Contact;
