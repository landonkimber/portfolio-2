import React, { useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext";

const ThemeManager = () => {
  const { theme } = useSettings();

  useEffect(() => {
    // Remove previous theme
    const prevTheme = document.getElementById("theme-css");
    if (prevTheme) {
      prevTheme.remove();
    }

    // Add new theme
    const link = document.createElement("link");
    link.href = `/src/styles/theme-${theme}.css`;
    link.rel = "stylesheet";
    link.id = "theme-css";
    document.head.appendChild(link);
  }, [theme]);

  return null;
};

export default ThemeManager;
