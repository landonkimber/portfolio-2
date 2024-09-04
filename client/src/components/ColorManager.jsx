import { useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext";

const ColorManager = () => {
  const { color } = useSettings();

  useEffect(() => {
    const link = document.createElement("link");
    link.href = `/src/styles/theme-${theme}.css`;
    link.rel = "stylesheet";
    link.id = "theme-css";
    document.head.appendChild(link);
  }, [theme]);

  return null;
};

export default ThemeManager;
