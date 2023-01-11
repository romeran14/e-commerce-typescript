import { Route, Routes } from "react-router-dom";
import { EcommerceRoutes } from "../e-commerce/routes/EcommerceRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<EcommerceRoutes />} />
      <Route path="/auth/*" element={<h3>Auth</h3>} />
    </Routes>
  );
};
