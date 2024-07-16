import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { sunsetTheme, blossomTheme } from "../Colors/Colors";

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('sunset');
    const toggleTheme = () => {
      setTheme(theme === 'sunset' ? 'blossom' : 'sunset');
    }

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'sunset' ? sunsetTheme : blossomTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
    )
  }

// export const CustomThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState('light');
//     const toggleTheme = () => {
//       setTheme(theme === 'light' ? 'dark' : 'light');
//     }

//     return (
//       <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//         {children}
//       </ThemeProvider>
//     </ThemeContext.Provider>
//     )
//   }
