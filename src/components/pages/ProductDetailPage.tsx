import { Link, useParams } from "react-router";
import { useProduct } from "../../hook/useProduct";

const ProductDetailPage = () => {
  // useParams permet de récupérer un paramètre d'URL avec react router
  // (défini dans App, route "/products/:id")
  const { id } = useParams();
  const { product, isLoading, hasError } = useProduct(id);

  if (isLoading) {
    return <p className="status">Chargement...</p>;
  }

  if (hasError || !product) {
    return <p className="status error">Une erreur est survenue</p>;
  }

  return (
    <div className="page">
      <Link to="/" className="back-link">
        ← Retour
      </Link>
      <h1>{product.title}</h1>
      <p className="product-id">Product page {id}</p>
    </div>
  );
};

export default ProductDetailPage;
