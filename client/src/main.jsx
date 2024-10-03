import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Bars from "./components/Bars.jsx";
import "./index.css";

console.log(`
  |   |  |***  |     |     |***|   |  
  |   |  |     |     |     |   |   |   
  |---|  |---  |     |     |   |   |
  |   |  |     |     |     |   |   |        
  |   |  |___  |___  |___  |___|   O     
  `);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
