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
    if (!manifest) return;

    console.log("Manifest:", manifest);

    const link =
      document.getElementById("theme-css") || document.createElement("link");
    link.rel = "stylesheet";
    link.id = "theme-css";

    const themeFileName = `theme-${settings.theme.toLowerCase()}.css`;
    const themeEntry = Object.entries(manifest).find(([key]) =>
      key.endsWith(themeFileName)
    );

    if (themeEntry) {
      const [, assetInfo] = themeEntry;
      link.href = assetInfo.file;
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
