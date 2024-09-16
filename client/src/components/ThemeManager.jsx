import { useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext";

const ThemeManager = () => {
  const { settings } = useSettings();

  useEffect(() => {
    const themeLink = document.getElementById("theme-css");
    if (themeLink) {
      themeLink.href = `/src/styles/${settings.theme.toLowerCase()}/theme-${settings.theme.toLowerCase()}.css`;
    } else {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.id = "theme-css";
      link.href = `/src/styles/${settings.theme.toLowerCase()}/theme-${settings.theme.toLowerCase()}.css`;
      document.head.appendChild(link);
    }
  }, [settings.theme]);

  return null;
};

export default ThemeManager;
