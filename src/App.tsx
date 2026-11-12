import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import ProductLayout from "./components/layout/ProductLayout";
import { ProductProvider } from "./context/ProductProvider";

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route element={<ProductLayout />}>
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
            </Route>
            <Route path="*" element={<p>Not found</p>} />
          </Route>
        </Routes>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
