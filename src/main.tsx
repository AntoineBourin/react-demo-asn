import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

/**
 * C'est le point d'entrée de l'application.
 * StrictMode permet de re-rendre nos composants 2 fois pour vérifier qu'ils soient purs.
 * BrowserRouter initialise le routage avec react router
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
