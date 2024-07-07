import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Utils/Context/ThemeContext";

const StyledLink = styled(Link)`
  margin: 15px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.primary} 50%,
    ${({ theme }) => theme.navLink} 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  position: relative;   
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  &:before {
    content: "";
    background: ${({ theme }) => theme.primary};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    background-position: 0;
  }
  &:hover::before {
    width: 100%;
  }
  @media (max-width: 500px) {
    height: 7vh;
  }

  @media (min-width: 500px) and (max-width: 1124px) {
    font-size: 1.5vh;
  }
`;

const StyledNav = styled.nav`
  background-color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.extraDark : "transparent"};
  display: flex;
  align-items: center;
  height: 60px;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;

const StyledRightNav = styled.div`
  float: right;
  padding-right: 20px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLeftNav = styled.div`
  float: left;
  padding-left: 20px;
  margin-right: auto;
  display: flex;
  overflow: hidden;

  @media (max-width: 500px) {
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    display: grid;
    transition: max-height 0.1s ease-in-out, opacity 0.1s ease-in-out;
    position: inherit;
    flex-direction: column;
    width: 100%;
    max-height: none;
    top: 0px;
    padding-top: 65px;
    flex-direction: row;
    background-color: ${({ theme }) => theme.extraDark};
    box-shadow: #f39c121f 0px 0px 20px 2px;
  }
`;

const BurgerButton = styled.div`
  display: none;
  cursor: pointer;
  padding: 15px;
  z-index: 2;

  @media (max-width: 500px) {
    display: block;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.primary};
  margin: 4px 0;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header className="header">
      <StyledNav isScrolled={isScrolled}>
        <BurgerButton onClick={toggleMenu}>
          <Line />
          <Line />
          <Line />
        </BurgerButton>
        <StyledLeftNav isOpen={isOpen}>
          <StyledLink
            to="main"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Home
          </StyledLink>
          <StyledLink
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            About
          </StyledLink>
          <StyledLink
            to="resume"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Experience
          </StyledLink>
          <StyledLink
            to="education"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Education
          </StyledLink>
          <StyledLink
            to="projects"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Projects
          </StyledLink>
        </StyledLeftNav>
        <StyledRightNav>
          <NightModeButton onClick={() => toggleTheme()}>
            {theme === "sunset" ? "🌸" : "🌅"}
          </NightModeButton>
        </StyledRightNav>
      </StyledNav>
    </header>
  );
}

export default Header;
