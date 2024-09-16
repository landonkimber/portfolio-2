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
    console.log("manifest", JSON.stringify(manifest));
    if (!manifest) return;

    const link =
      document.getElementById("theme-css") || document.createElement("link");
    link.rel = "stylesheet";
    link.id = "theme-css";

    const themeFileName = `src/styles/theme-${settings.theme.toLowerCase()}.css`;
    console.log(manifest.themeFileName);
    const themeEntry = manifest[themeFileName];

    console.log("themeFileName", themeFileName);
    console.log("themeEntry", themeEntry);

    if (themeEntry) {
      link.href = themeEntry.file;
      if (!document.getElementById("theme-css")) {
        document.head.appendChild(link);
      }
    } else {
      console.error(`Theme file ${themeFileName} not found in manifest`);
    }
  }, [settings.theme, manifest]);

  return null;
};

export default ThemeManager;
