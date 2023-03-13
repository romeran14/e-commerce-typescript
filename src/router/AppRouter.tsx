import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { EcommerceRoutes } from "../e-commerce/routes/EcommerceRoutes";
import { useChecking } from "../hooks/useChecking";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<EcommerceRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
};
