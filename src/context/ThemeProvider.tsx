import { useState } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Le provider nous permet ici de propager le context à nos composants enfant et définir
 * un état pour le faire évoluer depuis l'extérieur.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
