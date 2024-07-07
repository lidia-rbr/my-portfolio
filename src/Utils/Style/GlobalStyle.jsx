import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";
import "@fontsource/raleway"; // Defaults to weight 400
import "@fontsource/raleway/400.css"; // Specify weight
import "@fontsource/raleway/400-italic.css"; // Specify weight and style

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'raleway';
    }

    body {  
        min-height: 100vh;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.25s linear;
    }

    html {
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scroll-padding-top: 60px;
}

.anchor {
    scroll-snap-align: start;
    scroll-snap-type: proximity;
    scroll-behavior: smooth;
}
`;

  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}

export default GlobalStyle;
