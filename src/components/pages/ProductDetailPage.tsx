import { Link, useParams } from "react-router";
import { getProduct } from "../../lib/api/products";
import { lazy, Suspense } from "react";
import Loading from "../Loading";
import { ErrorBoundary } from "react-error-boundary";

const ProductElement = lazy(() => import("./ProductElement"));

const ProductDetailPage = () => {
  // useParams permet de récupérer un paramètre d'URL avec react router
  // (défini dans App, route "/products/:id")
  const { id } = useParams();
  const productPromise = getProduct(id);

  return (
    <div className="page">
      <Link to="/" className="back-link">
        ← Retour
      </Link>
      <ErrorBoundary fallback={<p>Une erreur est survenue</p>}>
        <Suspense fallback={<Loading />}>
          <ProductElement productPromise={productPromise} />
        </Suspense>
      </ErrorBoundary>

      <p className="product-id">Product page {id}</p>
    </div>
  );
};

export default ProductDetailPage;
