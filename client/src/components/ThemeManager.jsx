import { useEffect, useState } from "react";
import { useSettings } from "../contexts/SettingsContext";

const ThemeManager = () => {
  const { settings } = useSettings();
  const [manifest, setManifest] = useState(null);

  useEffect(() => {
    // MANIFEST CODE
    const fetchManifest = async () => {
      const possiblePaths = [
        "/manifest.json",
        "/.vite/manifest.json",
        "/assets/manifest.json",
        "/client/dist/.vite/manifest.json",
      ];

      for (const path of possiblePaths) {
        try {
          console.log(`Attempting to fetch manifest from: ${path}`);
          const response = await fetch(path);
          if (response.ok) {
            const data = await response.json();
            console.log("Manifest successfully loaded from:", path);
            console.log("Manifest data:", data);
            return; // Exit the function if successful
          }
        } catch (error) {
          console.error(`Error fetching manifest from ${path}:`, error);
        }
      }

      console.error("Could not load manifest from any of the attempted paths");
    };

    fetchManifest();

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

    const themeFileName = `theme-${settings.theme.toLowerCase()}.css`;
    // const themePath = `/src/styles/${themeFileName}`;
    const themePath = `/assets/${themeFileName}`;

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
