import { useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext";

const ThemeManager = () => {
  const { settings } = useSettings();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/src/styles/theme-${settings.theme.toLowerCase()}.css`;
    document.head.appendChild(link);
    console.log(link);
  }, [settings.theme]);

  return null;
};

export default ThemeManager;
