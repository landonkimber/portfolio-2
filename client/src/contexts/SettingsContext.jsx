import React, { createContext, useState, useContext } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState("simple");
  const [color, setColor] = useState("light");

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
