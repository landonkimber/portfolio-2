import { useEffect, useState } from "react";
import { useSettings } from "../contexts/SettingsContext";
import { loadManifest } from "../utils/loadManifest";
const ThemeManager = () => {
  const { settings } = useSettings();

  const [manifest, setManifest] = useState(null);

  useEffect(() => {
    loadManifest().then(setManifest).catch(console.error);
  }, []);
  useEffect(() => {
    console.log("Loading manifest...");
    console.log(`Settings: ${settings}`);
    console.log(`Settings.theme: ${settings.theme.toLowerCase()}`);
    console.log(`Manifest: ${JSON.stringify(manifest)}`);

    if (!manifest) return;

    const link =
      document.getElementById("theme-css") || document.createElement("link");
    link.rel = "stylesheet";
    link.id = "theme-css";

    const themeFileName = `theme-${settings.theme.toLowerCase()}.css`;

    const themeEntry = Object.entries(manifest).find(([key]) =>
      key.endsWith(themeFileName)
    );
    if (themeEntry) {
      link.href = themeEntry.file;
      if (!document.getElementById("theme-css")) {
        document.head.appendChild(link);
      }
    } else {
      console.error(`Theme file ${themeFileName} not found in manifest`);
    }
  }, [settings, manifest]);

  return null;
};

export default ThemeManager;
