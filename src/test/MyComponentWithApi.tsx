import { useProducts } from "../hook/useProducts";

export default function MyComponentWithApi() {
  const { products, isLoading, hasError } = useProducts();

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (hasError) {
    return <p>Une erreur est survenue</p>;
  }
  return (
    <div>
      {products.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
}
