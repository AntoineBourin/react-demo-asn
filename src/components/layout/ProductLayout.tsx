import { Outlet } from "react-router";

function ProductLayout() {
  return (
    <div>
      <p>Layout product</p>
      <Outlet />
      <p>Footer produits</p>
    </div>
  );
}

export default ProductLayout;
