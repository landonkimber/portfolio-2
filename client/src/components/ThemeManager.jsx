import { useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext";

const ThemeManager = () => {
  const { settings } = useSettings();

  useEffect(() => {
    const link = document.createElement("link");
    link.href = `/src/styles/theme-${settings.theme.toLowerCase()}.css`;
    link.rel = "stylesheet";
    link.id = "theme-css";
    document.head.appendChild(link);
    console.log(link);
  }, [settings.theme]);

  return null;
};

export default ThemeManager;
