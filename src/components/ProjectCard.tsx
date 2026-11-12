import { Link } from "react-router";
import type { Product } from "../types/products";
import { useProductContext } from "../context/ProductContext";

interface ProjectCardProps {
  product: Product;
}

export default function ProjectCard({ product }: ProjectCardProps) {
  const { dispatch } = useProductContext();
  return (
    <li className="project-card">
      <button
        onClick={() =>
          dispatch({ type: "ADD_PRODUCT_LIKED", product: product.title })
        }
      >
        Like
      </button>
      <Link to={`/products/${product.id}`}>{product.title}</Link>
    </li>
  );
}
