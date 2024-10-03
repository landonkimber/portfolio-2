// src/contexts/SettingsContext.jsx
import React, { createContext, useState, useContext, useCallback } from "react";
import dayjs from "dayjs";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  // Default color based on time of day
  var defaultColor = "Dark";
  if (dayjs().hour() > 6 && dayjs().hour() < 20) {
    defaultColor = "Light";
  }

  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  console.log(screenWidth);
  var isVertical = screenHeight > screenWidth;
  var isMobile = "false";

  var defaultWidth = "Standard";
  var defaultNavigation = "Right-Handed";
  if (isVertical && screenWidth < 600) {
    isMobile = "true";
    defaultNavigation = "Bottom";
    defaultWidth = "Wide";
  } else if (!isVertical && screenWidth < 1000) {
    defaultWidth = "Wide";
  }

  // Default settings
  const [settings, setSettings] = useState({
    fontSize: "Standard",
    contentWidth: defaultWidth,
    navigationBar: defaultNavigation,
    theme: "Simple",
    color: defaultColor,
    screenHeight: screenHeight,
    screenWidth: screenWidth,
    mobile: isMobile,
  });

  console.log(settings);
  // if (settings.color == "Seasonal") {
  //   if (dayjs().month() == 9) {
  //     settings.color = "september";
  //   } else if (dayjs().month() == 0) {
  //     settings.color = "Dark"
  // }

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
