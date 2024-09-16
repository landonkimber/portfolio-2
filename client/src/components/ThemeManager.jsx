import { useEffect, useState } from "react";
import { useSettings } from "../contexts/SettingsContext";

const ThemeManager = () => {
  const { settings } = useSettings();
  const [manifest, setManifest] = useState(null);

  useEffect(() => {
    // MANIFEST CODE
    const fetchManifest = async () => {
      try {
        const response = await fetch("/manifest.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setManifest(data);
        console.log("Manifest:", data);
      } catch (error) {
        console.error("Could not load manifest:", error);
      }
    };

    fetchManifest();

    const fetchManifest2 = async () => {
      try {
        const response = await fetch("/dist/vite./manifest.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setManifest(data);
        console.log("Manifest:", data);
      } catch (error) {
        console.error("Could not load manifest:", error);
      }
    };

    fetchManifest2();

    // OLD CODE
    const oldLink = document.getElementById("theme-css");
    if (oldLink) {
      oldLink.remove();
    }
    const manifest = import.meta.env.VITE_MANIFEST;
    console.log(`Manifest : ${manifest}`);

    const link =
      document.getElementById("theme-css") || document.createElement("link");
    link.rel = "stylesheet";
    link.id = "theme-css";

    // Construct the path to the theme CSS file

    const themeFileName = `theme-${settings.theme.toLowerCase()}.css`;
    const themePath = `/src/styles/${themeFileName}`;

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
