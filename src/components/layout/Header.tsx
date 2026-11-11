import { NavLink } from "react-router";
import { useThemeContext } from "../../context/ThemeContext";

export default function Header() {
  const { theme } = useThemeContext();

  return (
    <header className="app-header">
      <nav className="app-nav">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <p className="theme-badge">Theme: {theme}</p>
    </header>
  );
}
