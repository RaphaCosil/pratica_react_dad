import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Section from "./src/components/Component/Component";
import Title from "./src/components/Title/Title";

createRoot(document.getElementById("root")).render(
  <StrictMode>


    <Title
    title="promo"/>
    <div>
      <Section title="Item 1"  img="./assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png" />
      <Section title="Item 1"  img="./assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png" />
      <Section title="Item 1"  img="./assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png" />
    </div>

    <Title
    title="saudável"/>
    <div>
      <Section title="Item 1"  img="./assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png" />
      <Section title="Item 1"  img="./assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png" />
      <Section title="Item 1"  img="./assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png" />
    </div>

    
  </StrictMode>
);
