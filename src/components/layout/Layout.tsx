import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useThemeContext } from "../../context/ThemeContext";
import { useProductContext } from "../../context/ProductContext";

export default function Layout() {
  const { theme } = useThemeContext();
  const { store } = useProductContext();

  return (
    <div className="app-shell" data-theme={theme}>
      <Header />
      <p>Nombre de produits aimés : {store.length}</p>
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
