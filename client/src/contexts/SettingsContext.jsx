// src/contexts/SettingsContext.jsx
import React, { createContext, useState, useContext } from "react";
import dayjs from "dayjs";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  // Default color based on time of day
  var defaultColor = "Dark";
  if (dayjs().hour() > 6 && dayjs().hour() < 20) {
    defaultColor = "Light";
  }

  // Default settings
  const [settings, setSettings] = useState({
    fontSize: "Standard",
    contentWidth: "Standard",
    navigationBar: "Right-Handed",
    theme: "Simple",
    color: defaultColor,
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
