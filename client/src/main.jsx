<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
>>>>>>> parent of 78ee51e (changed how the loadManifest.js fetches the css files. Made changes in ThemeManager.jsx to handle loadManifest.js file changes. Added imports for css in main.jsx. Added server property to vite.config.js so I can see changes locally.)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
