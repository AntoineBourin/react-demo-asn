import { useThemeContext } from "../context/ThemeContext";

export default function ThemeSwitch() {
  const { theme, setTheme } = useThemeContext();

  return (
    <button
      type="button"
      className="theme-switch"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Switch theme ({theme})
    </button>
  );
}
