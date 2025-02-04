import React from "react";
import styled from "styled-components";
import merchToolLarge from "../../Assets/merch-tool.gif";
import eShop from "../../Assets/eshop-v2.gif";
import driveScanner from "../../Assets/drive-scanner.gif";
import titus from "../../Assets/titus.gif";
import base64 from "../../Assets/base-64.gif";

const Section = styled.section`
  color: ${({ theme }) => theme.text};
  padding: 50px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 10px 0 30px;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.projectCard};
  width: 50%;
  margin: 1%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px ${({ theme }) => theme.extraDark};
  flex: 0 0 40.3%;
  display: flex;
  flex-direction: column;
  max-height: 570px;
  box-sizing: border-box;

  @media (max-width: 769px) {
    width: 100%;
    flex: none;
    margin-bottom: 3%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 320px;
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 10px;
`;

const CardSubTitle = styled.h5`
  // font-size: 1.5rem;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.accent};
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: #ffffff;
  border: none;
  width: 50%;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  display: block; /* Ensure the button is a block element */
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
  }

  a {
    text-decoration: none;
    color: #ffffff;
    display: block; /* Ensure the anchor is a block element */
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`;

const ProjectsSection = () => {
  return (
    <Section id="projects" className="anchor">
      <Container>
        <Subtitle>PROJECTS</Subtitle>
        <Title>Some projects</Title>

        <ProjectsGrid>
          <Card className="anchor">
            <CardImage src={merchToolLarge} alt="Project 1" />
            <CardContent>
              <CardTitle>Merch tool</CardTitle>
              <CardSubTitle>Technologies Used: Google Sheets, Apps Script</CardSubTitle>
              <CardDescription>
                A Google Sheets tool for tracking merchandise stock, adding
                sales data, managing products, and monitoring key performance
                indicators (KPIs).
              </CardDescription>
              <Button>
                <a
                  href="https://docs.google.com/spreadsheets/d/12ezWoWS9-zXDTCKvnoD6wx2N2KSJ0DbJZZKxuWCGPUM/edit?gid=49658043#gid=49658043"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="anchor">
            <CardImage src={base64} alt="Project 1" />
            <CardContent>
              <CardTitle>Convert URLs to base 64 in Sheets</CardTitle>
              <CardSubTitle>Technologies Used: Google Sheets, Apps Script</CardSubTitle>
              <CardDescription>
                A Google Sheets tool to convert image URLs in base 64
              </CardDescription>
              <Button>
                <a
                  href="https://docs.google.com/spreadsheets/d/1Z8b5vUUn62Ox-LxqEI3ZOS6bcEYeN_zZdJTRcJoc2qE/edit?gid=1328248532#gid=1328248532"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="anchor">
            <CardImage src={eShop} alt="Project 2" />
            <CardContent>
              <CardTitle>E-commerce</CardTitle>
              <CardSubTitle>Technologies Used: React.js</CardSubTitle>
              <CardDescription>
                A basic e-commerce website built with React.js.
              </CardDescription>
              <Button>
                <a
                  href="https://github.com/lidia-rbr/madadis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="anchor">
            <CardImage src={driveScanner} alt="Project 3" />
            <CardContent>
              <CardTitle>Drive Scanner</CardTitle>
              <CardSubTitle>Technologies Used: Google Sheets, Apps Script, Drive API (V2)</CardSubTitle>
              <CardDescription>
                An Apps Script project to import metadata of all files within a
                given folder, shared drive, or entire drive into Google Sheets.
              </CardDescription>
              <Button>
                <a
                  href="https://github.com/lidia-rbr/DriveScanner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="anchor">
            <CardImage src={titus} alt="Project 4" />
            <CardContent>
              <CardTitle>TITUS Tag convertor</CardTitle>
              <CardSubTitle>Technologies Used: Google Sheets, Apps Script, Drive API (V2), Card Service</CardSubTitle>
              <CardDescription>
                A Google Drive add-on to read Titus tags of uploaded files and
                convert them into Google labels.
              </CardDescription>
              <Button>
                <a
                  href="https://github.com/lidia-rbr/TITUS-Tag-reader"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
