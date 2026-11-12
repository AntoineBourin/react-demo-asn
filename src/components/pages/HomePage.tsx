import { useSearchParams } from "react-router";
import Search from "../Search";
import ThemeSwitch from "../ThemeSwitch";
import ProjectCard from "../ProjectCard";
import TodoList from "../TodoList";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../lib/api/products";

export default function HomePage() {
  // const { products, isLoading, hasError } = useProducts();
  const {
    data,
    isLoading,
    isError: hasError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const filteredProducts = data?.products?.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  /**
   * Early-return en cas de chargement, ce JSX est utilisé directement.
   * Autre possibilité, dans le JSX : {isLoading && <p>Chargement...</p>}
   */
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
        <TodoList />
      </div>
      <Search />
      <ul className="product-list">
        {(filteredProducts || []).map((product) => (
          <ProjectCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
