import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CustomThemeProvider } from "./Utils/Context/ThemeContext";
import Header from "./Components/Header/HeaderIndex";
import MainSection from "./Components/Main/MainIndex";
import About from "./Components/About/AboutIndex";
import Footer from "./Components/Footer/FooterIndex";
import GlobalStyle from "./Utils/Style/GlobalStyle";
import ResumeSection from "./Components/Resume/ResumeIndex";
import EducationSection from "./Components/Education/EducationIndex";
import ProjectsSection from "./Components/Projects/ProjectsIndex";
import Contact from "./Components/Contact/ContactIndex";
import VideoSection from "./Components/Other/OtherIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <CustomThemeProvider>
        <GlobalStyle />
        <Header />
        <MainSection />
        <About />
        <ResumeSection />
        <EducationSection />
        <ProjectsSection />
        <Contact />
        <VideoSection />
        <Footer />
        {/* <ChildComponent /> */}
      </CustomThemeProvider>
  </React.StrictMode>
);
