import { Link } from "react-router";
import type { Product } from "../types/products";

interface ProjectCardProps {
  product: Product;
}

export default function ProjectCard({ product }: ProjectCardProps) {
  return (
    <li className="project-card">
      <Link to={`/products/${product.id}`}>{product.title}</Link>
    </li>
  );
}
