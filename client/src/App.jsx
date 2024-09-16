import React from "react";

import { SettingsProvider } from "./contexts/SettingsContext";
import ThemeManager from "./components/ThemeManager";

import AppContent from "./AppContent";
import "./styles/theme-simple.css";
import "./styles/theme-newspaper.css";

function App() {
  return (
    <SettingsProvider>
      <ThemeManager />
      <AppContent />
    </SettingsProvider>
  );
}

export default App;
