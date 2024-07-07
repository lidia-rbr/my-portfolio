// MyContext.js
import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const myValue = 'Hello from Context mtf!'; // Ensure this value is correctly set

  return (
    <MyContext.Provider value={myValue}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
