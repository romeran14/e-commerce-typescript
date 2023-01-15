import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "../pages/products/Components/ProductIDetails";
import ProductsPage from "../pages/products";
import { ECommerceLayout } from "../layout/ECommerceLayout";
import CartPage from "../pages/cart";

export const EcommerceRoutes = () => {
  return (
    <Routes>
      <Route element={<ECommerceLayout />}>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage/>} />
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
