import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

/** Création du context avec type et valeur par défaut */
export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

/** Hook pour notre context pour sécuriser l'appel à l'extérieur, surtout si l'appel au context
 * est fait en dehors du Provider
 */
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("You are trying to use the context outside the provider");
  }

  return context;
};
