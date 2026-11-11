import { Link, useSearchParams } from "react-router";
import Search from "../Search";
import ThemeSwitch from "../ThemeSwitch";
import { useProducts } from "../../hook/useProducts";

export default function HomePage() {
  const { products, isLoading, hasError } = useProducts();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  if (isLoading) {
    return <p className="status">Chargement...</p>;
  }

  if (hasError) {
    return <p className="status error">Une erreur est survenue</p>;
  }

  return (
    <div className="page">
      <div className="page-toolbar">
        <h1>Produits</h1>
        <ThemeSwitch />
      </div>
      <Search />
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
