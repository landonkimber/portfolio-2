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
<<<<<<< HEAD
    console.log("Loading manifest...");
    console.log(`Settings: ${settings}`);
    console.log(`Settings.theme: ${settings.theme.toLowerCase()}`);
    console.log(`Manifest: ${JSON.stringify(manifest)}`);

    if (!manifest) return;

=======
    console.log("manifest", JSON.stringify(manifest));
    if (!manifest) return;

>>>>>>> parent of 78ee51e (changed how the loadManifest.js fetches the css files. Made changes in ThemeManager.jsx to handle loadManifest.js file changes. Added imports for css in main.jsx. Added server property to vite.config.js so I can see changes locally.)
    const link =
      document.getElementById("theme-css") || document.createElement("link");
    link.rel = "stylesheet";
    link.id = "theme-css";

<<<<<<< HEAD
    const themeFileName = `theme-${settings.theme.toLowerCase()}.css`;

    const themeEntry = Object.entries(manifest).find(([key]) =>
      key.endsWith(themeFileName)
    );
=======
    const themeFileName = `src/styles/theme-${settings.theme.toLowerCase()}.css`;
    console.log(manifest.themeFileName);
    const themeEntry = manifest[themeFileName];

    console.log("themeFileName", themeFileName);
    console.log("themeEntry", themeEntry);

>>>>>>> parent of 78ee51e (changed how the loadManifest.js fetches the css files. Made changes in ThemeManager.jsx to handle loadManifest.js file changes. Added imports for css in main.jsx. Added server property to vite.config.js so I can see changes locally.)
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
