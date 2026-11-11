import { useState } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
