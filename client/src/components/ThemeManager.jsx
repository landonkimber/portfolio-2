import { useEffect, useState } from "react";
import { useSettings } from "../contexts/SettingsContext";

const ThemeManager = () => {
  const { settings } = useSettings();

  useEffect(() => {
    // OLD CODE
    const oldLink = document.getElementById("theme-css");
    if (oldLink) {
      oldLink.remove();
    }

    const link =
      document.getElementById("theme-css") || document.createElement("link");
    link.rel = "stylesheet";
    link.id = "theme-css";

    // Construct the path to the theme CSS file

    //  themePath NEEDS TO BE CHANGED FOR DEV AND DEPLOYMENT !!!
    const themeFileName = `theme-${settings.theme.toLowerCase()}.css`;
    const themePath = `/src/styles/${themeFileName}`;
    // const themePath = `/assets/${themeFileName}`;

    // Update the href of the link
    link.href = themePath;

    // Append the link to the head if it doesn't exist
    if (!document.getElementById("theme-css")) {
      document.head.appendChild(link);
    }

    console.log(`Applied theme: ${themePath}`);
  }, [settings.theme]);

  return null;
};

export default ThemeManager;
