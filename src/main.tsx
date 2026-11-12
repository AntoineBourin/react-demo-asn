import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import * as z from "zod";
import { fr } from "zod/locales";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query-client";

z.config(fr());

/**
 * C'est le point d'entrée de l'application.
 * StrictMode permet de re-rendre nos composants 2 fois pour vérifier qu'ils soient purs.
 * BrowserRouter initialise le routage avec react router
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
