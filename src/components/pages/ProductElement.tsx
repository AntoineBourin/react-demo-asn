import { use } from "react";
import type { Product } from "../../types/products";

interface ProductElementProps {
  productPromise: Promise<Product>;
}

const ProductElement: React.FC<ProductElementProps> = ({ productPromise }) => {
  const product = use<Product>(productPromise);
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductElement;
