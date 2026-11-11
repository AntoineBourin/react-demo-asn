import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("You are trying to use the context outside the provider");
  }

  return context;
};
