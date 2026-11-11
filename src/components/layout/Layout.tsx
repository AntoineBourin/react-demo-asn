import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useThemeContext } from "../../context/ThemeContext";

export default function Layout() {
  const { theme } = useThemeContext();

  return (
    <div className="app-shell" data-theme={theme}>
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
