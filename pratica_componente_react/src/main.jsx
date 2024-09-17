import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Component from "./components/Component.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Component />
  </StrictMode>
);
